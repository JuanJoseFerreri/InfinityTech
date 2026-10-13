import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, computed, signal, ElementRef, ViewChild, HostListener, inject, DestroyRef, NgZone } from '@angular/core';
import { AuthService } from './auth.service';
import { IsActiveMatchOptions, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { LOCAL_PRODUCT_GALLERY as PRODUCT_GALLERY } from './product-image-data';
import { ProductImageComponent } from './product-image.component';
import { CartItem, Category, Product } from './models';

interface CategoryShortcut {
  label: string;
  brand: Product['brand'] | 'Todas';
  category: Category;
  term: string;
  icon: string;
}

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [CommonModule, FormsModule, CurrencyPipe, ProductImageComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  readonly currentTime = signal(this.formatTime());

  private formatTime(): string {
    const now = new Date();
    return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  }
  readonly sectionLinkOptions: IsActiveMatchOptions = {
    paths: 'exact', fragment: 'exact', queryParams: 'ignored', matrixParams: 'ignored'
  };
  readonly auth = inject(AuthService);
  readonly signingOut = signal(false);
  readonly sessionError = signal('');
  @HostListener('window:focus')
  @HostListener('window:pageshow')
  refreshSession(): void {
    this.currentTime.set(this.formatTime());
    void this.auth.refresh();
  }
  async logout(): Promise<void> {
    if (this.signingOut()) return;
    this.signingOut.set(true);
    this.sessionError.set('');
    try { await this.auth.logout(); }
    catch { this.sessionError.set('No se pudo cerrar la sesión. Inténtalo de nuevo.'); }
    finally { this.signingOut.set(false); }
  }
  @ViewChild('productDialog') productDialog!: ElementRef<HTMLDialogElement>;
  readonly brands = ['Todas', 'Apple', 'Samsung', 'Xiaomi'] as const;
  selectedBrand = signal<string>('Todas');
  selectedProduct = signal<Product | null>(null);
  selectedPhoto = signal('');
  detailPhotos = computed(() => {
    const p = this.selectedProduct();
    return p ? [...new Set([p.imageUrl, ...(PRODUCT_GALLERY[p.id] ?? [])])].filter(Boolean) : [];
  });
  readonly demoReviews = [
    { author: 'Laura', rating: 5, text: 'Me resulta cómodo para el día a día y el diseño me encanta.' },
    { author: 'Marcos', rating: 4, text: 'Buena experiencia en general, aunque compararía el precio antes de comprar.' },
    { author: 'Ana', rating: 4, text: 'Cumple con lo que buscaba y ha sido fácil empezar a utilizarlo.' }
  ];
  readonly demoAverage = this.demoReviews.reduce((sum, review) => sum + review.rating, 0) / this.demoReviews.length;
  stars(rating: number): string { return '★'.repeat(rating) + '☆'.repeat(5 - rating); }
  setBrand(brand: string): void {
    if (brand !== this.selectedBrand()) { this.selectedBrand.set(brand); this.categoryRevision.update(v => v + 1); }
  }
  openProduct(product: Product): void {
    this.selectedProduct.set(product);
    this.selectedPhoto.set(product.imageUrl || PRODUCT_GALLERY[product.id]?.[0] || '');
    this.productDialog.nativeElement.showModal();
  }
  onCardClick(event: MouseEvent, product: Product): void {
    if ((event.target as HTMLElement).closest('button, a')) return;
    this.openProduct(product);
  }
  closeProduct(): void { this.productDialog.nativeElement.close(); this.selectedProduct.set(null); }
  onBackdrop(event: MouseEvent): void {
    if (event.target !== this.productDialog.nativeElement) return;
    const rect = this.productDialog.nativeElement.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) this.closeProduct();
  }
  addFromDetail(product: Product): void { this.closeProduct(); this.addToCart(product); }
  canAdd(product: Product): boolean {
    return product.stock > (this.cart().find(i => i.id === product.id)?.quantity ?? 0) &&
      (this.cart().find(i => i.id === product.id)?.quantity ?? 0) < 99;
  }
  readonly categories: Category[] = ['Todos', 'Smartphones', 'Audio', 'Wearables'];
  readonly products = signal<Product[]>([]);
  readonly categoryShortcuts: CategoryShortcut[] = [
    { label: 'Samsung', brand: 'Samsung', category: 'Smartphones', term: '', icon: '📱' },
    { label: 'iPhone', brand: 'Apple', category: 'Smartphones', term: 'iPhone', icon: '📱' },
    { label: 'Xiaomi', brand: 'Xiaomi', category: 'Smartphones', term: '', icon: '📱' },
    { label: 'AirPods', brand: 'Apple', category: 'Audio', term: 'AirPods', icon: '🎧' },
    { label: 'Auriculares', brand: 'Todas', category: 'Audio', term: '', icon: '🎧' },
    { label: 'Relojes', brand: 'Todas', category: 'Wearables', term: '', icon: '⌚' }
  ];
  categoryCards = computed(() => this.categoryShortcuts.map(shortcut => {
    const matches = this.products().filter(product => this.matchesFilters(product, shortcut.category, shortcut.brand, shortcut.term));
    const photo = matches.find(product => product.imageUrl && !this.failedImages().has(product.imageUrl));
    return { ...shortcut, count: matches.length, imageUrl: photo?.imageUrl ?? '' };
  }));
  loading = signal(true);
  catalogError = signal('');
  orderError = signal('');
  submitting = signal(false);
  orderId = signal('');
  orderTotal = signal(0);
  private pendingRequest: { payload: string; id: string } | null = null;

  constructor() {
    const zone = inject(NgZone);
    const destroyRef = inject(DestroyRef);
    // Keep the periodic check outside Angular; render only when the minute changes.
    const timer = zone.runOutsideAngular(() => setInterval(() => {
      const time = this.formatTime();
      if (time !== this.currentTime()) zone.run(() => this.currentTime.set(time));
    }, 1000));
    destroyRef.onDestroy(() => clearInterval(timer));
    void this.loadProducts();
    void this.auth.refresh();
  }
  async loadProducts(): Promise<void> {
    this.loading.set(true);
    this.catalogError.set('');
    try {
      const response = await fetch('/api/products');
      if (!response.ok) throw new Error();
      const products: Product[] = await response.json();
      // Keep the newly requested September announcements ahead of older 2026 entries.
      const septemberApple = new Set([125, 126, 127, 128, 129, 130]);
      this.products.set([...products].sort((a, b) => b.releaseYear - a.releaseYear ||
        Number(septemberApple.has(b.id)) - Number(septemberApple.has(a.id)) || a.id - b.id));
      this.cart.update(items => items.flatMap(item => {
        const p = products.find(p => p.id === item.id);
        return p ? [{ ...p, quantity: item.quantity }] : [];
      }));
      this.saveCart();
    } catch { this.catalogError.set('No se pudo cargar el catálogo. Comprueba que la API y PostgreSQL estén arrancados.'); }
    finally { this.loading.set(false); }
  }
  failedImages = signal(new Set<string>());
  imageFailed(url: string): void { this.failedImages.update(urls => new Set([...urls, url])); }
  selectedCategory = signal<Category>('Todos');
  search = signal('');
  cartOpen = signal(false);
  checkoutOpen = signal(false);
  orderConfirmed = signal(false);
  checkoutSubmitted = signal(false);
  categoryRevision = signal(0);
  checkout = { name: '', email: '', address: '' };
  cart = signal<CartItem[]>(this.loadCart());

  filteredProducts = computed(() => {
    return this.products().filter(product => this.matchesFilters(product, this.selectedCategory(), this.selectedBrand(), this.search()));
  });
  hasFilters = computed(() => this.selectedCategory() !== 'Todos' || this.selectedBrand() !== 'Todas' || !!this.search());
  cartCount = computed(() => this.cart().reduce((total, item) => total + item.quantity, 0));
  subtotal = computed(() => this.cart().reduce((total, item) => total + item.price * item.quantity, 0));
  shipping = computed(() => this.subtotal() === 0 || this.subtotal() >= 50 ? 0 : 4.99);
  total = computed(() => this.subtotal() + this.shipping());

  private matchesFilters(product: Product, category: Category, brand: string, search: string): boolean {
    const term = search.trim().toLowerCase();
    return (category === 'Todos' || product.category === category) &&
      (brand === 'Todas' || product.brand === brand) &&
      (!term || `${product.name} ${product.brand} ${product.category} ${product.description}`.toLowerCase().includes(term));
  }
  browseCategory(shortcut: CategoryShortcut): void {
    this.selectedCategory.set(shortcut.category);
    this.selectedBrand.set(shortcut.brand);
    this.search.set(shortcut.term);
    this.categoryRevision.update(value => value + 1);
  }
  resetFilters(): void {
    this.selectedCategory.set('Todos');
    this.selectedBrand.set('Todas');
    this.search.set('');
    this.categoryRevision.update(value => value + 1);
  }

  setCategory(category: Category): void {
    if (this.selectedCategory() !== category) {
      this.selectedCategory.set(category);
      this.categoryRevision.update((value) => value + 1);
    }
  }
  updateSearch(value: string): void { this.search.set(value); }
  addToCart(product: Product): void {
    if (product.stock <= 0) return;
    this.cart.update((items) => {
      const existing = items.find((item) => item.id === product.id);
      return existing
        ? items.map((item) => item.id === product.id ? { ...item, quantity: Math.min(99, product.stock, item.quantity + 1) } : item)
        : [...items, { ...product, quantity: 1 }];
    });
    this.saveCart();
    this.cartOpen.set(true);
  }
  changeQuantity(id: number, amount: number): void {
    this.cart.update((items) => items
      .map((item) => item.id === id ? { ...item, quantity: Math.min(99, item.stock, item.quantity + amount) } : item)
      .filter((item) => item.quantity > 0));
    this.saveCart();
  }
  remove(id: number): void { this.cart.update((items) => items.filter((item) => item.id !== id)); this.saveCart(); }
  beginCheckout(): void {
    if (this.cartCount()) {
      this.cartOpen.set(false);
      this.checkoutOpen.set(true);
      this.orderConfirmed.set(false);
      this.checkoutSubmitted.set(false);
    }
  }
  async confirmOrder(form: NgForm): Promise<void> {
    this.checkoutSubmitted.set(true);
    if (form.invalid || this.submitting() || !this.cartCount()) return;
    this.orderError.set('');
    this.submitting.set(true);
    const body = {
      customer: { name: this.checkout.name.trim(), email: this.checkout.email.trim(), address: this.checkout.address.trim() },
      items: this.cart().map(item => ({ productId: item.id, quantity: item.quantity }))
    };
    const payload = JSON.stringify(body);
    if (this.pendingRequest?.payload !== payload) this.pendingRequest = { payload, id: crypto.randomUUID() };
    try {
      const response = await fetch('/api/orders', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...body, requestId: this.pendingRequest.id })
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'No se pudo guardar el pedido.');
      this.orderId.set(result.id);
      this.orderTotal.set(result.total);
      this.orderConfirmed.set(true);
      this.cart.set([]);
      this.saveCart();
      this.pendingRequest = null;
      void this.loadProducts();
    } catch (error) {
      this.orderError.set(error instanceof Error ? error.message : 'No se pudo conectar con el servidor.');
    } finally { this.submitting.set(false); }
  }
  closeCheckout(): void { if (this.submitting()) return; this.checkoutOpen.set(false); this.orderConfirmed.set(false); this.checkoutSubmitted.set(false); }
  private saveCart(): void { try { localStorage.setItem('tecnomovil-cart-v2', JSON.stringify(this.cart())); } catch { /* Carrito disponible en memoria. */ } }
  private loadCart(): CartItem[] { try { const items: unknown = JSON.parse(localStorage.getItem('tecnomovil-cart-v2') ?? '[]'); return Array.isArray(items) ? items.filter(i => i && Number.isInteger(i.id) && Number.isInteger(i.quantity) && i.quantity > 0 && i.quantity <= 99 && Number.isFinite(i.price)) : []; } catch { return []; } }
}

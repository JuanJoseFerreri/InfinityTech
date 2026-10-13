import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, computed, signal, ViewChild, HostListener, inject } from '@angular/core';
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';
import { LOCAL_PRODUCT_GALLERY as PRODUCT_GALLERY } from './product-image-data';
import { ProductImageComponent } from './product-image.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
const _c0 = ["productDialog"];
const _forTrack0 = ($index, $item) => $item.label;
function _forTrack1($index, $item) { return $item.id + "-" + this.categoryRevision(); }
const _forTrack2 = ($index, $item) => $item.id;
const _forTrack3 = ($index, $item) => $item.author;
function AppComponent_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 54);
    i0.ɵɵtext(1, "Panel de administrador");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "button", 55);
    i0.ɵɵlistener("click", function AppComponent_Conditional_14_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.logout()); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r2.signingOut());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.signingOut() ? "Cerrando\u2026" : "Cerrar sesi\u00F3n");
} }
function AppComponent_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 11);
    i0.ɵɵtext(1, "Iniciar sesi\u00F3n");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.sessionError());
} }
function AppComponent_For_67_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-product-image", 59);
    i0.ɵɵlistener("failed", function AppComponent_For_67_Conditional_2_Template_app_product_image_failed_0_listener() { i0.ɵɵrestoreView(_r6); const card_r5 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.imageFailed(card_r5.imageUrl)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const card_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("src", card_r5.imageUrl);
} }
function AppComponent_For_67_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const card_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(card_r5.icon);
} }
function AppComponent_For_67_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 56);
    i0.ɵɵlistener("click", function AppComponent_For_67_Template_a_click_0_listener() { const card_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.browseCategory(card_r5)); });
    i0.ɵɵelementStart(1, "div", 57);
    i0.ɵɵconditionalCreate(2, AppComponent_For_67_Conditional_2_Template, 1, 1, "app-product-image", 58)(3, AppComponent_For_67_Conditional_3_Template, 2, 1, "span");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h3");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "small");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const card_r5 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵattribute("aria-label", "Ver productos de " + card_r5.label);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(card_r5.imageUrl ? 2 : 3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(card_r5.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.loading() ? "Cargando\u2026" : ctx_r2.catalogError() ? "Ver cat\u00E1logo" : card_r5.count + (card_r5.count === 1 ? " producto" : " productos"));
} }
function AppComponent_For_86_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 60);
    i0.ɵɵlistener("click", function AppComponent_For_86_Template_button_click_0_listener() { const category_r8 = i0.ɵɵrestoreView(_r7).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.setCategory(category_r8)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const category_r8 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("active", ctx_r2.selectedCategory() === category_r8);
    i0.ɵɵattribute("aria-pressed", ctx_r2.selectedCategory() === category_r8);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(category_r8);
} }
function AppComponent_For_95_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 60);
    i0.ɵɵlistener("click", function AppComponent_For_95_Template_button_click_0_listener() { const brand_r10 = i0.ɵɵrestoreView(_r9).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.setBrand(brand_r10)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const brand_r10 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("active", ctx_r2.selectedBrand() === brand_r10);
    i0.ɵɵattribute("aria-pressed", ctx_r2.selectedBrand() === brand_r10);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(brand_r10);
} }
function AppComponent_Conditional_96_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 61);
    i0.ɵɵlistener("click", function AppComponent_Conditional_96_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r11); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.resetFilters()); });
    i0.ɵɵtext(1, "Limpiar filtros \u00D7");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_99_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 42);
    i0.ɵɵtext(1, "Cargando productos\u2026");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_100_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "p", 43);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "button", 62);
    i0.ɵɵlistener("click", function AppComponent_Conditional_100_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r12); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.loadProducts()); });
    i0.ɵɵtext(3, "Reintentar");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r2.catalogError(), " ");
} }
function AppComponent_For_103_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 65);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const product_r14 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(product_r14.badge);
} }
function AppComponent_For_103_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-product-image", 76);
    i0.ɵɵlistener("failed", function AppComponent_For_103_Conditional_3_Template_app_product_image_failed_0_listener() { i0.ɵɵrestoreView(_r15); const product_r14 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.imageFailed(product_r14.imageUrl)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const product_r14 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("src", product_r14.imageUrl)("alt", product_r14.name);
} }
function AppComponent_For_103_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 67);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const product_r14 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵattribute("aria-label", product_r14.name + ": imagen no disponible");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(product_r14.icon);
} }
function AppComponent_For_103_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 63);
    i0.ɵɵlistener("click", function AppComponent_For_103_Template_article_click_0_listener($event) { const product_r14 = i0.ɵɵrestoreView(_r13).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onCardClick($event, product_r14)); });
    i0.ɵɵelementStart(1, "div", 64);
    i0.ɵɵconditionalCreate(2, AppComponent_For_103_Conditional_2_Template, 2, 1, "span", 65);
    i0.ɵɵconditionalCreate(3, AppComponent_For_103_Conditional_3_Template, 1, 2, "app-product-image", 66)(4, AppComponent_For_103_Conditional_4_Template, 2, 2, "span", 67);
    i0.ɵɵelementStart(5, "button", 68);
    i0.ɵɵlistener("click", function AppComponent_For_103_Template_button_click_5_listener() { const product_r14 = i0.ɵɵrestoreView(_r13).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.addToCart(product_r14)); });
    i0.ɵɵtext(6, "+");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 69)(8, "p", 70);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "h3")(11, "button", 71);
    i0.ɵɵlistener("click", function AppComponent_For_103_Template_button_click_11_listener() { const product_r14 = i0.ɵɵrestoreView(_r13).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.openProduct(product_r14)); });
    i0.ɵɵtext(12);
    i0.ɵɵelementStart(13, "span", 37);
    i0.ɵɵtext(14, "\u2197");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(15, "p", 72);
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "div", 73)(18, "span");
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "a", 74);
    i0.ɵɵtext(21, "Ficha oficial \u2197");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "p");
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "p", 75);
    i0.ɵɵtext(25);
    i0.ɵɵpipe(26, "currency");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const product_r14 = ctx.$implicit;
    const ɵ$index_203_r16 = ctx.$index;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("animation-delay", ɵ$index_203_r16 * 55 + "ms");
    i0.ɵɵadvance();
    i0.ɵɵclassMap(product_r14.color);
    i0.ɵɵadvance();
    i0.ɵɵconditional(product_r14.badge ? 2 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(product_r14.imageUrl && !ctx_r2.failedImages().has(product_r14.imageUrl) ? 3 : 4);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", product_r14.stock === 0);
    i0.ɵɵattribute("aria-label", "A\u00F1adir " + product_r14.name);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate2("", product_r14.brand, " \u00B7 ", product_r14.category);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("aria-label", "Ver detalles de " + product_r14.name);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", product_r14.name, " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(product_r14.description);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Lanzado en ", product_r14.releaseYear);
    i0.ɵɵadvance();
    i0.ɵɵproperty("href", product_r14.officialUrl, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Stock: ", product_r14.stock);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind4(26, 17, product_r14.price, "EUR", "symbol", "1.2-2"));
} }
function AppComponent_ForEmpty_104_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 46)(1, "span");
    i0.ɵɵtext(2, "\u2315");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h3");
    i0.ɵɵtext(4, "No hay productos para mostrar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "Prueba con otra b\u00FAsqueda o categor\u00EDa.");
    i0.ɵɵelementEnd()();
} }
function AppComponent_Conditional_160_Conditional_9_For_2_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-product-image", 76);
    i0.ɵɵlistener("failed", function AppComponent_Conditional_160_Conditional_9_For_2_Conditional_2_Template_app_product_image_failed_0_listener() { i0.ɵɵrestoreView(_r20); const item_r21 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.imageFailed(item_r21.imageUrl)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r21 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("src", item_r21.imageUrl)("alt", item_r21.name);
} }
function AppComponent_Conditional_160_Conditional_9_For_2_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const item_r21 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵtextInterpolate(item_r21.icon);
} }
function AppComponent_Conditional_160_Conditional_9_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 83)(1, "div", 87);
    i0.ɵɵconditionalCreate(2, AppComponent_Conditional_160_Conditional_9_For_2_Conditional_2_Template, 1, 2, "app-product-image", 66)(3, AppComponent_Conditional_160_Conditional_9_For_2_Conditional_3_Template, 1, 1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div")(5, "h3");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p");
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 88)(11, "button", 62);
    i0.ɵɵlistener("click", function AppComponent_Conditional_160_Conditional_9_For_2_Template_button_click_11_listener() { const item_r21 = i0.ɵɵrestoreView(_r19).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.changeQuantity(item_r21.id, -1)); });
    i0.ɵɵtext(12, "\u2212");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "b");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "button", 62);
    i0.ɵɵlistener("click", function AppComponent_Conditional_160_Conditional_9_For_2_Template_button_click_15_listener() { const item_r21 = i0.ɵɵrestoreView(_r19).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.changeQuantity(item_r21.id, 1)); });
    i0.ɵɵtext(16, "+");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(17, "button", 89);
    i0.ɵɵlistener("click", function AppComponent_Conditional_160_Conditional_9_For_2_Template_button_click_17_listener() { const item_r21 = i0.ɵɵrestoreView(_r19).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.remove(item_r21.id)); });
    i0.ɵɵtext(18, "\u00D7");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r21 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵclassMap(item_r21.color);
    i0.ɵɵadvance();
    i0.ɵɵconditional(item_r21.imageUrl && !ctx_r2.failedImages().has(item_r21.imageUrl) ? 2 : 3);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(item_r21.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind4(9, 6, item_r21.price, "EUR", "symbol", "1.2-2"));
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(item_r21.quantity);
} }
function AppComponent_Conditional_160_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 82);
    i0.ɵɵrepeaterCreate(1, AppComponent_Conditional_160_Conditional_9_For_2_Template, 19, 11, "div", 83, _forTrack2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 84)(4, "p")(5, "span");
    i0.ɵɵtext(6, "Subtotal");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "b");
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "currency");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "p")(11, "span");
    i0.ɵɵtext(12, "Env\u00EDo");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "b");
    i0.ɵɵtext(14);
    i0.ɵɵpipe(15, "currency");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "p", 85)(17, "span");
    i0.ɵɵtext(18, "Total");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "b");
    i0.ɵɵtext(20);
    i0.ɵɵpipe(21, "currency");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "button", 86);
    i0.ɵɵlistener("click", function AppComponent_Conditional_160_Conditional_9_Template_button_click_22_listener() { i0.ɵɵrestoreView(_r18); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.beginCheckout()); });
    i0.ɵɵtext(23, "Continuar con el pago \u2192");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r2.cart());
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind4(9, 3, ctx_r2.subtotal(), "EUR", "symbol", "1.2-2"));
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r2.shipping() ? i0.ɵɵpipeBind4(15, 8, ctx_r2.shipping(), "EUR", "symbol", "1.2-2") : "Gratis");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind4(21, 13, ctx_r2.total(), "EUR", "symbol", "1.2-2"));
} }
function AppComponent_Conditional_160_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 81)(1, "span");
    i0.ɵɵtext(2, "\uD83D\uDECD\uFE0F");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h3");
    i0.ɵɵtext(4, "Tu carrito est\u00E1 vac\u00EDo");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "A\u00F1ade algo que te encante.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 90);
    i0.ɵɵlistener("click", function AppComponent_Conditional_160_Conditional_10_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r22); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.cartOpen.set(false)); });
    i0.ɵɵtext(8, "Ir a la tienda");
    i0.ɵɵelementEnd()();
} }
function AppComponent_Conditional_160_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 77);
    i0.ɵɵlistener("click", function AppComponent_Conditional_160_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r17); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.cartOpen.set(false)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(1, "aside", 78)(2, "div", 79)(3, "h2");
    i0.ɵɵtext(4, "Tu carrito ");
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "button", 80);
    i0.ɵɵlistener("click", function AppComponent_Conditional_160_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r17); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.cartOpen.set(false)); });
    i0.ɵɵtext(8, "\u00D7");
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(9, AppComponent_Conditional_160_Conditional_9_Template, 24, 18)(10, AppComponent_Conditional_160_Conditional_10_Template, 9, 0, "div", 81);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r2.cartCount());
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r2.cartCount() ? 9 : 10);
} }
function AppComponent_Conditional_161_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 92)(1, "span");
    i0.ɵɵtext(2, "\u2713");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 17);
    i0.ɵɵtext(4, "\u00A1PEDIDO CONFIRMADO!");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h2");
    i0.ɵɵtext(6, "Pedido guardado.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p");
    i0.ɵɵtext(8);
    i0.ɵɵelement(9, "br");
    i0.ɵɵtext(10);
    i0.ɵɵpipe(11, "currency");
    i0.ɵɵelement(12, "br");
    i0.ɵɵtext(13, "Pendiente de pago. Esta demo no env\u00EDa correos.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "button", 93);
    i0.ɵɵlistener("click", function AppComponent_Conditional_161_Conditional_2_Template_button_click_14_listener() { i0.ɵɵrestoreView(_r23); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.closeCheckout()); });
    i0.ɵɵtext(15, "Seguir comprando");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate1("Referencia: ", ctx_r2.orderId());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Total: ", i0.ɵɵpipeBind2(11, 2, ctx_r2.orderTotal(), "EUR"));
} }
function AppComponent_Conditional_161_Conditional_3_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 98);
    i0.ɵɵtext(1, "Introduce al menos 3 caracteres.");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_161_Conditional_3_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 98);
    i0.ɵɵtext(1, "Introduce un correo electr\u00F3nico v\u00E1lido.");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_161_Conditional_3_Conditional_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 98);
    i0.ɵɵtext(1, "Indica una direcci\u00F3n de al menos 10 caracteres.");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_161_Conditional_3_Conditional_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 43);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.orderError());
} }
function AppComponent_Conditional_161_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 94);
    i0.ɵɵlistener("click", function AppComponent_Conditional_161_Conditional_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r24); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.closeCheckout()); });
    i0.ɵɵtext(1, "\u00D7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "p", 17);
    i0.ɵɵtext(3, "RESUMEN DE PEDIDO");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h2");
    i0.ɵɵtext(5, "Un \u00FAltimo paso.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 95)(7, "span");
    i0.ɵɵtext(8, "Total a pagar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "b");
    i0.ɵɵtext(10);
    i0.ɵɵpipe(11, "currency");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "form", 96, 1);
    i0.ɵɵlistener("ngSubmit", function AppComponent_Conditional_161_Conditional_3_Template_form_ngSubmit_12_listener() { i0.ɵɵrestoreView(_r24); const checkoutForm_r25 = i0.ɵɵreference(13); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.confirmOrder(checkoutForm_r25)); });
    i0.ɵɵelementStart(14, "label");
    i0.ɵɵtext(15, "Nombre completo");
    i0.ɵɵelementStart(16, "input", 97, 2);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_161_Conditional_3_Template_input_ngModelChange_16_listener($event) { i0.ɵɵrestoreView(_r24); const ctx_r2 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r2.checkout.name, $event) || (ctx_r2.checkout.name = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(18, AppComponent_Conditional_161_Conditional_3_Conditional_18_Template, 2, 0, "p", 98);
    i0.ɵɵelementStart(19, "label");
    i0.ɵɵtext(20, "Correo electr\u00F3nico");
    i0.ɵɵelementStart(21, "input", 99, 3);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_161_Conditional_3_Template_input_ngModelChange_21_listener($event) { i0.ɵɵrestoreView(_r24); const ctx_r2 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r2.checkout.email, $event) || (ctx_r2.checkout.email = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(23, AppComponent_Conditional_161_Conditional_3_Conditional_23_Template, 2, 0, "p", 98);
    i0.ɵɵelementStart(24, "label");
    i0.ɵɵtext(25, "Direcci\u00F3n de env\u00EDo");
    i0.ɵɵelementStart(26, "input", 100, 4);
    i0.ɵɵtwoWayListener("ngModelChange", function AppComponent_Conditional_161_Conditional_3_Template_input_ngModelChange_26_listener($event) { i0.ɵɵrestoreView(_r24); const ctx_r2 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r2.checkout.address, $event) || (ctx_r2.checkout.address = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(28, AppComponent_Conditional_161_Conditional_3_Conditional_28_Template, 2, 0, "p", 98);
    i0.ɵɵconditionalCreate(29, AppComponent_Conditional_161_Conditional_3_Conditional_29_Template, 2, 1, "p", 43);
    i0.ɵɵelementStart(30, "button", 101);
    i0.ɵɵtext(31);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "small");
    i0.ɵɵtext(33, "\uD83D\uDD12 Pago simulado \u00B7 Esta demo no procesa pagos reales.");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const name_r26 = i0.ɵɵreference(17);
    const email_r27 = i0.ɵɵreference(22);
    const address_r28 = i0.ɵɵreference(27);
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(10);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind4(11, 16, ctx_r2.total(), "EUR", "symbol", "1.2-2"));
    i0.ɵɵadvance(6);
    i0.ɵɵclassProp("invalid", name_r26.invalid && (name_r26.touched || ctx_r2.checkoutSubmitted()));
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.checkout.name);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(name_r26.invalid && (name_r26.touched || ctx_r2.checkoutSubmitted()) ? 18 : -1);
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("invalid", email_r27.invalid && (email_r27.touched || ctx_r2.checkoutSubmitted()));
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.checkout.email);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(email_r27.invalid && (email_r27.touched || ctx_r2.checkoutSubmitted()) ? 23 : -1);
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("invalid", address_r28.invalid && (address_r28.touched || ctx_r2.checkoutSubmitted()));
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.checkout.address);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(address_r28.invalid && (address_r28.touched || ctx_r2.checkoutSubmitted()) ? 28 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r2.orderError() ? 29 : -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r2.submitting());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.submitting() ? "Guardando\u2026" : "Confirmar pedido \u2192");
} }
function AppComponent_Conditional_161_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 52)(1, "section", 91);
    i0.ɵɵconditionalCreate(2, AppComponent_Conditional_161_Conditional_2_Template, 16, 5, "div", 92)(3, AppComponent_Conditional_161_Conditional_3_Template, 34, 21);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r2.orderConfirmed() ? 2 : 3);
} }
function AppComponent_Conditional_164_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-product-image", 120);
    i0.ɵɵlistener("failed", function AppComponent_Conditional_164_Conditional_5_Template_app_product_image_failed_0_listener() { i0.ɵɵrestoreView(_r30); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.imageFailed(ctx_r2.selectedPhoto())); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const product_r31 = i0.ɵɵnextContext();
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("src", ctx_r2.selectedPhoto())("alt", product_r31.name + " \u00B7 foto " + (ctx_r2.detailPhotos().indexOf(ctx_r2.selectedPhoto()) + 1));
} }
function AppComponent_Conditional_164_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 42);
    i0.ɵɵtext(1, "Imagen no disponible. Selecciona otra fotograf\u00EDa.");
    i0.ɵɵelementEnd();
} }
function AppComponent_Conditional_164_For_9_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-product-image", 59);
    i0.ɵɵlistener("failed", function AppComponent_Conditional_164_For_9_Conditional_1_Template_app_product_image_failed_0_listener() { i0.ɵɵrestoreView(_r34); const photo_r33 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.imageFailed(photo_r33)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const photo_r33 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("src", photo_r33);
} }
function AppComponent_Conditional_164_For_9_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ɵ$index_562_r35 = i0.ɵɵnextContext().$index;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Foto ", ɵ$index_562_r35 + 1);
} }
function AppComponent_Conditional_164_For_9_Template(rf, ctx) { if (rf & 1) {
    const _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 60);
    i0.ɵɵlistener("click", function AppComponent_Conditional_164_For_9_Template_button_click_0_listener() { const photo_r33 = i0.ɵɵrestoreView(_r32).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.selectedPhoto.set(photo_r33)); });
    i0.ɵɵconditionalCreate(1, AppComponent_Conditional_164_For_9_Conditional_1_Template, 1, 1, "app-product-image", 58)(2, AppComponent_Conditional_164_For_9_Conditional_2_Template, 2, 1, "span");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const photo_r33 = ctx.$implicit;
    const ɵ$index_562_r35 = ctx.$index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("active", ctx_r2.selectedPhoto() === photo_r33);
    i0.ɵɵattribute("aria-pressed", ctx_r2.selectedPhoto() === photo_r33)("aria-label", "Ver foto " + (ɵ$index_562_r35 + 1));
    i0.ɵɵadvance();
    i0.ɵɵconditional(!ctx_r2.failedImages().has(photo_r33) ? 1 : 2);
} }
function AppComponent_Conditional_164_For_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 119)(1, "div")(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 121);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const review_r36 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(review_r36.author);
    i0.ɵɵadvance();
    i0.ɵɵattribute("aria-label", review_r36.rating + " de 5 estrellas");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.stars(review_r36.rating));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(review_r36.text);
} }
function AppComponent_Conditional_164_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 102);
    i0.ɵɵlistener("click", function AppComponent_Conditional_164_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r29); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.closeProduct()); });
    i0.ɵɵtext(1, "\u00D7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div", 103)(3, "section", 104)(4, "div", 105);
    i0.ɵɵconditionalCreate(5, AppComponent_Conditional_164_Conditional_5_Template, 1, 2, "app-product-image", 106)(6, AppComponent_Conditional_164_Conditional_6_Template, 2, 0, "p", 42);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 107);
    i0.ɵɵrepeaterCreate(8, AppComponent_Conditional_164_For_9_Template, 3, 5, "button", 35, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "small");
    i0.ɵɵtext(11, "Fotograf\u00EDas oficiales. Pueden mostrar distintos acabados o variantes de la gama.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "section", 108)(13, "p", 17);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "h2", 109);
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "p", 110);
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "p", 111);
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "p", 112);
    i0.ɵɵtext(22);
    i0.ɵɵpipe(23, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "button", 113);
    i0.ɵɵlistener("click", function AppComponent_Conditional_164_Template_button_click_24_listener() { const product_r31 = i0.ɵɵrestoreView(_r29); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.addFromDetail(product_r31)); });
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "a", 114);
    i0.ɵɵtext(27, "Ver informaci\u00F3n del fabricante \u2197");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "section", 115)(29, "h3", 116);
    i0.ɵɵtext(30, "Valoraciones de ejemplo");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "p", 117);
    i0.ɵɵtext(32, "Opiniones ficticias para esta demo; no son rese\u00F1as de compradores reales.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "p")(34, "span", 118);
    i0.ɵɵtext(35, "\u2605\u2605\u2605\u2605\u2606");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "b");
    i0.ɵɵtext(37);
    i0.ɵɵpipe(38, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(39);
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(40, AppComponent_Conditional_164_For_41_Template, 8, 4, "article", 119, _forTrack3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const product_r31 = ctx;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵconditional(ctx_r2.selectedPhoto() && !ctx_r2.failedImages().has(ctx_r2.selectedPhoto()) ? 5 : 6);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r2.detailPhotos());
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate2("", product_r31.brand, " \u00B7 ", product_r31.category);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(product_r31.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(product_r31.description);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("Lanzamiento: ", product_r31.releaseYear, " \u00B7 ", product_r31.stock, " unidades disponibles");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind4(23, 13, product_r31.price, "EUR", "symbol", "1.2-2"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", !ctx_r2.canAdd(product_r31));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(product_r31.stock === 0 ? "Agotado" : !ctx_r2.canAdd(product_r31) ? "L\u00EDmite de unidades en el carrito" : "A\u00F1adir al carrito");
    i0.ɵɵadvance();
    i0.ɵɵproperty("href", product_r31.officialUrl, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(11);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind2(38, 18, ctx_r2.demoAverage, "1.1-1"), "/5");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" \u00B7 ", ctx_r2.demoReviews.length, " ejemplos");
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r2.demoReviews);
} }
export class AppComponent {
    auth = inject(AuthService);
    signingOut = signal(false, ...(ngDevMode ? [{ debugName: "signingOut" }] : []));
    sessionError = signal('', ...(ngDevMode ? [{ debugName: "sessionError" }] : []));
    refreshSession() { void this.auth.refresh(); }
    async logout() {
        if (this.signingOut())
            return;
        this.signingOut.set(true);
        this.sessionError.set('');
        try {
            await this.auth.logout();
        }
        catch {
            this.sessionError.set('No se pudo cerrar la sesión. Inténtalo de nuevo.');
        }
        finally {
            this.signingOut.set(false);
        }
    }
    productDialog;
    brands = ['Todas', 'Apple', 'Samsung', 'Xiaomi'];
    selectedBrand = signal('Todas', ...(ngDevMode ? [{ debugName: "selectedBrand" }] : []));
    selectedProduct = signal(null, ...(ngDevMode ? [{ debugName: "selectedProduct" }] : []));
    selectedPhoto = signal('', ...(ngDevMode ? [{ debugName: "selectedPhoto" }] : []));
    detailPhotos = computed(() => {
        const p = this.selectedProduct();
        return p ? [...new Set([p.imageUrl, ...(PRODUCT_GALLERY[p.id] ?? [])])].filter(Boolean) : [];
    }, ...(ngDevMode ? [{ debugName: "detailPhotos" }] : []));
    demoReviews = [
        { author: 'Laura · perfil de ejemplo', rating: 5, text: 'Me resulta cómodo para el día a día y el diseño me encanta.' },
        { author: 'Marcos · perfil de ejemplo', rating: 4, text: 'Buena experiencia en general, aunque compararía el precio antes de comprar.' },
        { author: 'Ana · perfil de ejemplo', rating: 4, text: 'Cumple con lo que buscaba y ha sido fácil empezar a utilizarlo.' }
    ];
    demoAverage = this.demoReviews.reduce((sum, review) => sum + review.rating, 0) / this.demoReviews.length;
    stars(rating) { return '★'.repeat(rating) + '☆'.repeat(5 - rating); }
    setBrand(brand) {
        if (brand !== this.selectedBrand()) {
            this.selectedBrand.set(brand);
            this.categoryRevision.update(v => v + 1);
        }
    }
    openProduct(product) {
        this.selectedProduct.set(product);
        this.selectedPhoto.set(product.imageUrl || PRODUCT_GALLERY[product.id]?.[0] || '');
        this.productDialog.nativeElement.showModal();
    }
    onCardClick(event, product) {
        if (event.target.closest('button, a'))
            return;
        this.openProduct(product);
    }
    closeProduct() { this.productDialog.nativeElement.close(); this.selectedProduct.set(null); }
    onBackdrop(event) {
        if (event.target !== this.productDialog.nativeElement)
            return;
        const rect = this.productDialog.nativeElement.getBoundingClientRect();
        if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)
            this.closeProduct();
    }
    addFromDetail(product) { this.closeProduct(); this.addToCart(product); }
    canAdd(product) {
        return product.stock > (this.cart().find(i => i.id === product.id)?.quantity ?? 0) &&
            (this.cart().find(i => i.id === product.id)?.quantity ?? 0) < 99;
    }
    categories = ['Todos', 'Smartphones', 'Audio', 'Wearables'];
    products = signal([], ...(ngDevMode ? [{ debugName: "products" }] : []));
    categoryShortcuts = [
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
    }), ...(ngDevMode ? [{ debugName: "categoryCards" }] : []));
    loading = signal(true, ...(ngDevMode ? [{ debugName: "loading" }] : []));
    catalogError = signal('', ...(ngDevMode ? [{ debugName: "catalogError" }] : []));
    orderError = signal('', ...(ngDevMode ? [{ debugName: "orderError" }] : []));
    submitting = signal(false, ...(ngDevMode ? [{ debugName: "submitting" }] : []));
    orderId = signal('', ...(ngDevMode ? [{ debugName: "orderId" }] : []));
    orderTotal = signal(0, ...(ngDevMode ? [{ debugName: "orderTotal" }] : []));
    pendingRequest = null;
    constructor() { void this.loadProducts(); void this.auth.refresh(); }
    async loadProducts() {
        this.loading.set(true);
        this.catalogError.set('');
        try {
            const response = await fetch('/api/products');
            if (!response.ok)
                throw new Error();
            const products = await response.json();
            // Keep the newly requested September announcements ahead of older 2026 entries.
            const septemberApple = new Set([125, 126, 127, 128, 129, 130]);
            this.products.set([...products].sort((a, b) => b.releaseYear - a.releaseYear ||
                Number(septemberApple.has(b.id)) - Number(septemberApple.has(a.id)) || a.id - b.id));
            this.cart.update(items => items.flatMap(item => {
                const p = products.find(p => p.id === item.id);
                return p ? [{ ...p, quantity: item.quantity }] : [];
            }));
            this.saveCart();
        }
        catch {
            this.catalogError.set('No se pudo cargar el catálogo. Comprueba que la API y PostgreSQL estén arrancados.');
        }
        finally {
            this.loading.set(false);
        }
    }
    failedImages = signal(new Set(), ...(ngDevMode ? [{ debugName: "failedImages" }] : []));
    imageFailed(url) { this.failedImages.update(urls => new Set([...urls, url])); }
    selectedCategory = signal('Todos', ...(ngDevMode ? [{ debugName: "selectedCategory" }] : []));
    search = signal('', ...(ngDevMode ? [{ debugName: "search" }] : []));
    cartOpen = signal(false, ...(ngDevMode ? [{ debugName: "cartOpen" }] : []));
    checkoutOpen = signal(false, ...(ngDevMode ? [{ debugName: "checkoutOpen" }] : []));
    orderConfirmed = signal(false, ...(ngDevMode ? [{ debugName: "orderConfirmed" }] : []));
    checkoutSubmitted = signal(false, ...(ngDevMode ? [{ debugName: "checkoutSubmitted" }] : []));
    categoryRevision = signal(0, ...(ngDevMode ? [{ debugName: "categoryRevision" }] : []));
    checkout = { name: '', email: '', address: '' };
    cart = signal(this.loadCart(), ...(ngDevMode ? [{ debugName: "cart" }] : []));
    filteredProducts = computed(() => {
        return this.products().filter(product => this.matchesFilters(product, this.selectedCategory(), this.selectedBrand(), this.search()));
    }, ...(ngDevMode ? [{ debugName: "filteredProducts" }] : []));
    hasFilters = computed(() => this.selectedCategory() !== 'Todos' || this.selectedBrand() !== 'Todas' || !!this.search(), ...(ngDevMode ? [{ debugName: "hasFilters" }] : []));
    cartCount = computed(() => this.cart().reduce((total, item) => total + item.quantity, 0), ...(ngDevMode ? [{ debugName: "cartCount" }] : []));
    subtotal = computed(() => this.cart().reduce((total, item) => total + item.price * item.quantity, 0), ...(ngDevMode ? [{ debugName: "subtotal" }] : []));
    shipping = computed(() => this.subtotal() === 0 || this.subtotal() >= 50 ? 0 : 4.99, ...(ngDevMode ? [{ debugName: "shipping" }] : []));
    total = computed(() => this.subtotal() + this.shipping(), ...(ngDevMode ? [{ debugName: "total" }] : []));
    matchesFilters(product, category, brand, search) {
        const term = search.trim().toLowerCase();
        return (category === 'Todos' || product.category === category) &&
            (brand === 'Todas' || product.brand === brand) &&
            (!term || `${product.name} ${product.brand} ${product.category} ${product.description}`.toLowerCase().includes(term));
    }
    browseCategory(shortcut) {
        this.selectedCategory.set(shortcut.category);
        this.selectedBrand.set(shortcut.brand);
        this.search.set(shortcut.term);
        this.categoryRevision.update(value => value + 1);
    }
    resetFilters() {
        this.selectedCategory.set('Todos');
        this.selectedBrand.set('Todas');
        this.search.set('');
        this.categoryRevision.update(value => value + 1);
    }
    setCategory(category) {
        if (this.selectedCategory() !== category) {
            this.selectedCategory.set(category);
            this.categoryRevision.update((value) => value + 1);
        }
    }
    updateSearch(value) { this.search.set(value); }
    addToCart(product) {
        if (product.stock <= 0)
            return;
        this.cart.update((items) => {
            const existing = items.find((item) => item.id === product.id);
            return existing
                ? items.map((item) => item.id === product.id ? { ...item, quantity: Math.min(99, product.stock, item.quantity + 1) } : item)
                : [...items, { ...product, quantity: 1 }];
        });
        this.saveCart();
        this.cartOpen.set(true);
    }
    changeQuantity(id, amount) {
        this.cart.update((items) => items
            .map((item) => item.id === id ? { ...item, quantity: Math.min(99, item.stock, item.quantity + amount) } : item)
            .filter((item) => item.quantity > 0));
        this.saveCart();
    }
    remove(id) { this.cart.update((items) => items.filter((item) => item.id !== id)); this.saveCart(); }
    beginCheckout() {
        if (this.cartCount()) {
            this.cartOpen.set(false);
            this.checkoutOpen.set(true);
            this.orderConfirmed.set(false);
            this.checkoutSubmitted.set(false);
        }
    }
    async confirmOrder(form) {
        this.checkoutSubmitted.set(true);
        if (form.invalid || this.submitting() || !this.cartCount())
            return;
        this.orderError.set('');
        this.submitting.set(true);
        const body = {
            customer: { name: this.checkout.name.trim(), email: this.checkout.email.trim(), address: this.checkout.address.trim() },
            items: this.cart().map(item => ({ productId: item.id, quantity: item.quantity }))
        };
        const payload = JSON.stringify(body);
        if (this.pendingRequest?.payload !== payload)
            this.pendingRequest = { payload, id: crypto.randomUUID() };
        try {
            const response = await fetch('/api/orders', {
                method: 'POST', headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...body, requestId: this.pendingRequest.id })
            });
            const result = await response.json();
            if (!response.ok)
                throw new Error(result.error || 'No se pudo guardar el pedido.');
            this.orderId.set(result.id);
            this.orderTotal.set(result.total);
            this.orderConfirmed.set(true);
            this.cart.set([]);
            this.saveCart();
            this.pendingRequest = null;
            void this.loadProducts();
        }
        catch (error) {
            this.orderError.set(error instanceof Error ? error.message : 'No se pudo conectar con el servidor.');
        }
        finally {
            this.submitting.set(false);
        }
    }
    closeCheckout() { if (this.submitting())
        return; this.checkoutOpen.set(false); this.orderConfirmed.set(false); this.checkoutSubmitted.set(false); }
    saveCart() { try {
        localStorage.setItem('tecnomovil-cart-v2', JSON.stringify(this.cart()));
    }
    catch { /* Carrito disponible en memoria. */ } }
    loadCart() { try {
        const items = JSON.parse(localStorage.getItem('tecnomovil-cart-v2') ?? '[]');
        return Array.isArray(items) ? items.filter(i => i && Number.isInteger(i.id) && Number.isInteger(i.quantity) && i.quantity > 0 && i.quantity <= 99 && Number.isFinite(i.price)) : [];
    }
    catch {
        return [];
    } }
    static ɵfac = function AppComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AppComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.productDialog = _t.first);
        } }, hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("focus", function AppComponent_focus_HostBindingHandler() { return ctx.refreshSession(); }, i0.ɵɵresolveWindow)("pageshow", function AppComponent_pageshow_HostBindingHandler() { return ctx.refreshSession(); }, i0.ɵɵresolveWindow);
        } }, decls: 165, vars: 15, consts: [["productDialog", ""], ["checkoutForm", "ngForm"], ["name", "ngModel"], ["email", "ngModel"], ["address", "ngModel"], [1, "topbar"], ["href", "#inicio", "aria-label", "TecnoM\u00F3vil inicio", 1, "brand"], ["aria-label", "Navegaci\u00F3n principal"], ["href", "#tienda", 3, "click"], ["href", "#categorias"], ["href", "#beneficios"], ["href", "/login"], ["aria-label", "Abrir carrito", 1, "cart-button", 3, "click"], ["role", "alert", 1, "session-error"], ["id", "inicio"], [1, "hero"], [1, "hero-copy"], [1, "eyebrow"], [1, "hero-text"], ["href", "#tienda", 1, "primary-button", 3, "click"], ["aria-label", "Ilustraci\u00F3n de tel\u00E9fono y accesorios", 1, "hero-visual"], [1, "glow"], [1, "headphones"], [1, "phone"], [1, "spark", "s1"], [1, "spark", "s2"], ["id", "categorias", "aria-labelledby", "categories-title", 1, "category-directory"], [1, "section-heading"], ["id", "categories-title"], [1, "category-tiles"], ["href", "#tienda", 1, "category-tile"], ["id", "tienda", 1, "shop"], [1, "catalog-note"], [1, "filters"], ["aria-label", "Filtrar por tipo de producto", 1, "category-list"], ["type", "button", 3, "active"], [1, "search"], ["aria-hidden", "true"], ["type", "search", "aria-label", "Buscar producto", "placeholder", "Buscar producto", 3, "ngModelChange", "ngModel"], ["aria-label", "Filtrar por marca", 1, "brand-filters"], ["type", "button", 1, "clear-filters"], ["aria-live", "polite"], ["role", "status"], ["role", "alert"], [1, "product-grid"], [1, "product-card", 3, "animation-delay"], [1, "empty-results"], ["id", "beneficios", "aria-labelledby", "advantages-title", 1, "advantages"], ["id", "advantages-title"], [1, "benefits"], [1, "advantages-note"], ["href", "#inicio", 1, "brand"], [1, "modal-backdrop"], ["aria-labelledby", "detail-title", 1, "product-dialog", 3, "click", "cancel"], ["href", "/admin"], ["type", "button", 1, "session-button", 3, "click", "disabled"], ["href", "#tienda", 1, "category-tile", 3, "click"], ["aria-hidden", "true", 1, "category-art"], ["alt", "", "loading", "lazy", 3, "src"], ["alt", "", "loading", "lazy", 3, "failed", "src"], ["type", "button", 3, "click"], ["type", "button", 1, "clear-filters", 3, "click"], [3, "click"], [1, "product-card", 3, "click"], [1, "product-image"], [1, "badge"], ["loading", "lazy", 3, "src", "alt"], ["role", "img", 1, "product-icon"], [3, "click", "disabled"], [1, "product-info"], [1, "product-category"], ["type", "button", 1, "product-title-button", 3, "click"], [1, "product-description"], [1, "product-detail"], ["target", "_blank", "rel", "noopener", 3, "href"], [1, "price"], ["loading", "lazy", 3, "failed", "src", "alt"], [1, "overlay", 3, "click"], ["aria-label", "Carrito de compra", 1, "cart-panel"], [1, "panel-header"], ["aria-label", "Cerrar", 3, "click"], [1, "empty-cart"], [1, "cart-items"], [1, "cart-item"], [1, "cart-summary"], [1, "total"], [1, "primary-button", "wide", 3, "click"], [1, "mini-image"], [1, "quantity"], ["aria-label", "Eliminar", 1, "remove", 3, "click"], [1, "secondary-button", 3, "click"], [1, "checkout-modal"], [1, "confirmation"], [1, "primary-button", 3, "click"], ["aria-label", "Cerrar formulario", 1, "modal-close", 3, "click"], [1, "checkout-total"], ["novalidate", "", 3, "ngSubmit"], ["name", "name", "type", "text", "required", "", "minlength", "3", "placeholder", "Tu nombre y apellidos", 3, "ngModelChange", "ngModel"], [1, "field-error"], ["name", "email", "type", "email", "required", "", "email", "", "placeholder", "tu@email.com", 3, "ngModelChange", "ngModel"], ["name", "address", "type", "text", "required", "", "minlength", "10", "placeholder", "Calle, n\u00FAmero, ciudad", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "primary-button", "wide", 3, "disabled"], ["type", "button", "autofocus", "", "aria-label", "Cerrar detalle del producto", 1, "detail-close", 3, "click"], [1, "detail-layout"], ["aria-label", "Galer\u00EDa del producto", 1, "detail-gallery"], [1, "detail-photo"], [3, "src", "alt"], [1, "thumbnails"], [1, "detail-copy"], ["id", "detail-title"], [1, "detail-description"], [1, "detail-meta"], [1, "detail-price"], ["type", "button", 1, "primary-button", "wide", 3, "click", "disabled"], ["target", "_blank", "rel", "noopener", 1, "manufacturer-link", 3, "href"], ["aria-labelledby", "reviews-title", 1, "demo-reviews"], ["id", "reviews-title"], [1, "review-disclaimer"], ["aria-hidden", "true", 1, "stars"], [1, "review"], [3, "failed", "src", "alt"], [1, "stars"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "header", 5)(1, "a", 6)(2, "span");
            i0.ɵɵtext(3, "TM");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(4, " tecno");
            i0.ɵɵelementStart(5, "span");
            i0.ɵɵtext(6, "m\u00F3vil");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "nav", 7)(8, "a", 8);
            i0.ɵɵlistener("click", function AppComponent_Template_a_click_8_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.resetFilters()); });
            i0.ɵɵtext(9, "Tienda");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "a", 9);
            i0.ɵɵtext(11, "Categor\u00EDas");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "a", 10);
            i0.ɵɵtext(13, "Ventajas");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(14, AppComponent_Conditional_14_Template, 4, 2)(15, AppComponent_Conditional_15_Template, 2, 0, "a", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "button", 12);
            i0.ɵɵlistener("click", function AppComponent_Template_button_click_16_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.cartOpen.set(true)); });
            i0.ɵɵtext(17, "\uD83D\uDECD\uFE0F ");
            i0.ɵɵelementStart(18, "b");
            i0.ɵɵtext(19);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "span");
            i0.ɵɵtext(21, "Carrito");
            i0.ɵɵelementEnd()()();
            i0.ɵɵconditionalCreate(22, AppComponent_Conditional_22_Template, 2, 1, "p", 13);
            i0.ɵɵelementStart(23, "main", 14)(24, "section", 15)(25, "div", 16)(26, "p", 17);
            i0.ɵɵtext(27, "TECNOLOG\u00CDA QUE TE ACOMPA\u00D1A");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "h1");
            i0.ɵɵtext(29, "Haz que tu m\u00F3vil");
            i0.ɵɵelement(30, "br");
            i0.ɵɵelementStart(31, "em");
            i0.ɵɵtext(32, "pueda m\u00E1s.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(33, "p", 18);
            i0.ɵɵtext(34, "Los accesorios esenciales para conectar, crear y disfrutar sin l\u00EDmites.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "a", 19);
            i0.ɵɵlistener("click", function AppComponent_Template_a_click_35_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.resetFilters()); });
            i0.ɵɵtext(36, "Explorar productos ");
            i0.ɵɵelementStart(37, "span");
            i0.ɵɵtext(38, "\u2192");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(39, "div", 20);
            i0.ɵɵelement(40, "div", 21);
            i0.ɵɵelementStart(41, "div", 22);
            i0.ɵɵtext(42, "\u25D6 ");
            i0.ɵɵelementStart(43, "i");
            i0.ɵɵtext(44, "\u25D7");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(45, "div", 23)(46, "span");
            i0.ɵɵtext(47, "\u25CF");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(48, "strong");
            i0.ɵɵtext(49, "09:41");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(50, "small");
            i0.ɵɵtext(51, "\u25CC");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(52, "div", 24);
            i0.ɵɵtext(53, "\u2726");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(54, "div", 25);
            i0.ɵɵtext(55, "\u2726");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(56, "section", 26)(57, "div", 27)(58, "div")(59, "p", 17);
            i0.ɵɵtext(60, "ENCUENTRA LO QUE BUSCAS");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(61, "h2", 28);
            i0.ɵɵtext(62, "Categor\u00EDas");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(63, "p");
            i0.ɵɵtext(64, "Tu pr\u00F3xima elecci\u00F3n empieza aqu\u00ED.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(65, "div", 29);
            i0.ɵɵrepeaterCreate(66, AppComponent_For_67_Template, 8, 4, "a", 30, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(68, "section", 31)(69, "div", 27)(70, "div")(71, "p", 17);
            i0.ɵɵtext(72, "DESCUBRE LO \u00DALTIMO");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(73, "h2");
            i0.ɵɵtext(74, "Todo para tu ");
            i0.ɵɵelementStart(75, "em");
            i0.ɵɵtext(76, "m\u00F3vil");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(77, "p");
            i0.ɵɵtext(78, "Peque\u00F1os accesorios.");
            i0.ɵɵelement(79, "br");
            i0.ɵɵtext(80, "Grandes posibilidades.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(81, "p", 32);
            i0.ɵɵtext(82, "Novedades de 2026 primero \u00B7 Incluye los anuncios de Apple de septiembre; consulta la disponibilidad en cada ficha. Precios y existencias de demostraci\u00F3n.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(83, "div", 33)(84, "div", 34);
            i0.ɵɵrepeaterCreate(85, AppComponent_For_86_Template, 2, 4, "button", 35, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(87, "label", 36)(88, "span", 37);
            i0.ɵɵtext(89, "\u2315");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(90, "input", 38);
            i0.ɵɵlistener("ngModelChange", function AppComponent_Template_input_ngModelChange_90_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.updateSearch($event)); });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(91, "div", 39)(92, "span");
            i0.ɵɵtext(93, "Marca");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(94, AppComponent_For_95_Template, 2, 4, "button", 35, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵconditionalCreate(96, AppComponent_Conditional_96_Template, 2, 0, "button", 40);
            i0.ɵɵelementStart(97, "small", 41);
            i0.ɵɵtext(98);
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(99, AppComponent_Conditional_99_Template, 2, 0, "p", 42);
            i0.ɵɵconditionalCreate(100, AppComponent_Conditional_100_Template, 4, 1, "p", 43);
            i0.ɵɵelementStart(101, "div", 44);
            i0.ɵɵrepeaterCreate(102, AppComponent_For_103_Template, 27, 22, "article", 45, _forTrack1, true, AppComponent_ForEmpty_104_Template, 7, 0, "div", 46);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(105, "section", 47)(106, "div", 27)(107, "div")(108, "p", 17);
            i0.ɵɵtext(109, "COMPRA CON TRANQUILIDAD");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(110, "h2", 48);
            i0.ɵɵtext(111, "Tus ");
            i0.ɵɵelementStart(112, "em");
            i0.ɵɵtext(113, "ventajas");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(114, "div", 49)(115, "div")(116, "span", 37);
            i0.ɵɵtext(117, "\uD83D\uDE9A");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(118, "span")(119, "b");
            i0.ɵɵtext(120, "Env\u00EDo gratis");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(121, "small");
            i0.ɵɵtext(122, "en pedidos de 50 \u20AC o m\u00E1s");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(123, "div")(124, "span", 37);
            i0.ɵɵtext(125, "\u21A9\uFE0F");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(126, "span")(127, "b");
            i0.ɵɵtext(128, "Devoluciones f\u00E1ciles");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(129, "small");
            i0.ɵɵtext(130, "30 d\u00EDas para decidir");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(131, "div")(132, "span", 37);
            i0.ɵɵtext(133, "\uD83D\uDD12");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(134, "span")(135, "b");
            i0.ɵɵtext(136, "Compra de demostraci\u00F3n");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(137, "small");
            i0.ɵɵtext(138, "No se realizan cobros reales");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(139, "div")(140, "span", 37);
            i0.ɵɵtext(141, "\uD83D\uDECD\uFE0F");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(142, "span")(143, "b");
            i0.ɵɵtext(144, "Compra sin registro");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(145, "small");
            i0.ɵɵtext(146, "Haz tu pedido como invitado, sin crear una cuenta");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(147, "p", 50);
            i0.ɵɵtext(148, "Tienda de ejemplo: las condiciones de env\u00EDo y devoluci\u00F3n son ilustrativas.");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(149, "footer")(150, "a", 51)(151, "span");
            i0.ɵɵtext(152, "TM");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(153, " tecno");
            i0.ɵɵelementStart(154, "span");
            i0.ɵɵtext(155, "m\u00F3vil");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(156, "p");
            i0.ɵɵtext(157, "Accesorios que siguen tu ritmo.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(158, "small");
            i0.ɵɵtext(159, "\u00A9 2026 TecnoM\u00F3vil \u00B7 Proyecto de demostraci\u00F3n");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(160, AppComponent_Conditional_160_Template, 11, 2);
            i0.ɵɵconditionalCreate(161, AppComponent_Conditional_161_Template, 4, 1, "div", 52);
            i0.ɵɵelementStart(162, "dialog", 53, 0);
            i0.ɵɵlistener("click", function AppComponent_Template_dialog_click_162_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onBackdrop($event)); })("cancel", function AppComponent_Template_dialog_cancel_162_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.closeProduct()); });
            i0.ɵɵconditionalCreate(164, AppComponent_Conditional_164_Template, 42, 21);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            let tmp_17_0;
            i0.ɵɵadvance(14);
            i0.ɵɵconditional(ctx.auth.isAdmin() ? 14 : !ctx.auth.checking() ? 15 : -1);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.cartCount());
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.sessionError() ? 22 : -1);
            i0.ɵɵadvance(43);
            i0.ɵɵattribute("aria-busy", ctx.loading());
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.categoryCards());
            i0.ɵɵadvance(19);
            i0.ɵɵrepeater(ctx.categories);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngModel", ctx.search());
            i0.ɵɵadvance(4);
            i0.ɵɵrepeater(ctx.brands);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.hasFilters() ? 96 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate2("", ctx.filteredProducts().length, " ", ctx.filteredProducts().length === 1 ? "producto" : "productos");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.loading() ? 99 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.catalogError() ? 100 : -1);
            i0.ɵɵadvance();
            i0.ɵɵattribute("data-category", ctx.selectedCategory());
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.filteredProducts());
            i0.ɵɵadvance(58);
            i0.ɵɵconditional(ctx.cartOpen() ? 160 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.checkoutOpen() ? 161 : -1);
            i0.ɵɵadvance(3);
            i0.ɵɵconditional((tmp_17_0 = ctx.selectedProduct()) ? 164 : -1, tmp_17_0);
        } }, dependencies: [CommonModule, FormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.RequiredValidator, i1.MinLengthValidator, i1.EmailValidator, i1.NgModel, i1.NgForm, ProductImageComponent, i2.DecimalPipe, i2.CurrencyPipe], styles: ["[_nghost-%COMP%] { --ink:#172033; --muted:#6c7380; --lime:#d4fb57; --paper:#f8f8f6; --line:#e5e7e9; display:block; color:var(--ink); background:var(--paper); }\n.topbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .session-button[_ngcontent-%COMP%]{border:0;background:none;color:var(--muted);font:inherit;font-size:14px;padding:12px 0;white-space:nowrap}\n.topbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .session-button[_ngcontent-%COMP%]:disabled{opacity:.6;cursor:wait}\n.session-error[_ngcontent-%COMP%]{margin:0;padding:12px 20px;background:#fff0f0;color:#a32237;font-size:14px}\n@media(min-width:721px) and (max-width:1050px){.topbar[_ngcontent-%COMP%]{height:auto!important;min-height:100px;flex-wrap:wrap;gap:8px;padding-top:12px!important}.topbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{order:3;width:100%;justify-content:space-between;gap:16px;overflow-x:auto}.topbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{white-space:nowrap}}\n*[_ngcontent-%COMP%]{box-sizing:border-box}.topbar[_ngcontent-%COMP%]{height:78px;display:flex;align-items:center;justify-content:space-between;padding:0 max(5vw,36px);background:#fff;border-bottom:1px solid #edf0f0;position:sticky;top:0;z-index:20}.brand[_ngcontent-%COMP%]{font-size:23px;font-weight:800;letter-spacing:-1.7px;color:var(--ink);text-decoration:none}.brand[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:first-child{display:inline-grid;place-items:center;margin-right:7px;width:27px;height:27px;font-size:11px;letter-spacing:-1px;border-radius:8px;background:var(--ink);color:var(--lime)}.brand[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:last-child{color:#8774ea}.topbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{display:flex;gap:31px;margin-left:100px}.topbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:14px;color:var(--muted);text-decoration:none}.topbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--ink)}button[_ngcontent-%COMP%]{font:inherit;cursor:pointer}.cart-button[_ngcontent-%COMP%]{border:0;border-radius:10px;padding:11px 15px;background:#f0f1f0;color:var(--ink);font-size:14px}.cart-button[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{display:inline-grid;place-items:center;width:18px;height:18px;margin:0 5px;border-radius:50%;background:var(--ink);color:var(--lime);font-size:11px}.hero[_ngcontent-%COMP%]{min-height:490px;display:grid;grid-template-columns:1fr 1fr;align-items:center;padding:65px max(8vw,60px) 56px;overflow:hidden;background:#edede9}.eyebrow[_ngcontent-%COMP%]{margin:0 0 13px;color:#7664d6;letter-spacing:1.4px;font-size:11px;font-weight:800}.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .checkout-modal[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;line-height:.98;letter-spacing:-3.6px;font-size:clamp(43px,5.1vw,70px)}em[_ngcontent-%COMP%]{font-style:normal;color:#7966dc}.hero-text[_ngcontent-%COMP%]{max-width:400px;margin:25px 0 30px;color:var(--muted);font-size:16px;line-height:1.55}.primary-button[_ngcontent-%COMP%]{display:inline-flex;gap:22px;align-items:center;justify-content:center;border:0;border-radius:8px;padding:15px 20px;background:var(--ink);color:#fff;text-decoration:none;font-weight:700;font-size:14px;transition:.2s}.primary-button[_ngcontent-%COMP%]:hover{transform:translateY(-2px);background:#29344a}.hero-visual[_ngcontent-%COMP%]{height:365px;position:relative;display:grid;place-items:center}.glow[_ngcontent-%COMP%]{position:absolute;width:325px;height:325px;border-radius:50%;background:var(--lime);filter:blur(.2px)}.phone[_ngcontent-%COMP%]{z-index:2;width:170px;height:330px;padding:16px 11px;border:8px solid #192033;border-radius:29px;background:linear-gradient(145deg,#4d44ac,#877be8 65%,#b6adff);box-shadow:23px 27px 0 rgba(28,31,44,.13);transform:rotate(9deg);color:#fff}.phone[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;margin:auto;width:42px;height:10px;border-radius:9px;background:#171d2b;text-align:center;color:#171d2b}.phone[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;margin-top:103px;font-size:25px;text-align:center;letter-spacing:-1px}.phone[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{display:block;margin:93px auto 0;width:33px;height:33px;border:2px solid #fff;border-radius:50%;text-align:center;line-height:29px}.headphones[_ngcontent-%COMP%]{position:absolute;z-index:3;right:3%;bottom:8%;font-size:130px;line-height:1;color:#252c3d;transform:rotate(-16deg)}.headphones[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-style:normal;color:#3e4863}.spark[_ngcontent-%COMP%]{position:absolute;z-index:4;color:#fff;font-size:29px}.s1[_ngcontent-%COMP%]{top:12%;right:10%}.s2[_ngcontent-%COMP%]{bottom:6%;left:13%;font-size:19px}.benefits[_ngcontent-%COMP%]{min-height:95px;padding:20px max(8vw,60px);background:#fff;display:flex;justify-content:space-between;align-items:center}.benefits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;gap:12px;align-items:center;font-size:25px}.benefits[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:flex;flex-direction:column;font-size:13px}.benefits[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{margin-top:3px;color:var(--muted);font-size:12px}.shop[_ngcontent-%COMP%]{padding:82px max(8vw,60px)}.section-heading[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:end}.section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:43px;letter-spacing:-2px}.section-heading[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{color:var(--muted);font-size:14px;line-height:1.55}.filters[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:25px;align-items:center;margin:41px 0 28px}.category-list[_ngcontent-%COMP%]{display:flex;gap:8px;flex-wrap:wrap}.category-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:10px 15px;border:1px solid var(--line);border-radius:22px;background:transparent;color:var(--muted);font-size:13px}.category-list[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{border-color:var(--ink);background:var(--ink);color:#fff}.search[_ngcontent-%COMP%]{display:flex;align-items:center;gap:7px;width:210px;padding:9px 12px;border:1px solid var(--line);border-radius:8px;background:#fff;color:var(--muted)}.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{min-width:0;width:100%;border:0;outline:0;background:transparent;font:inherit;font-size:13px}.product-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:23px}.product-card[_ngcontent-%COMP%]{min-width:0;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #edf0f0;transition:.2s}.product-card[_ngcontent-%COMP%]:hover{transform:translateY(-4px);box-shadow:0 13px 28px rgba(33,42,58,.1)}.product-image[_ngcontent-%COMP%]{position:relative;height:211px;display:grid;place-items:center;overflow:hidden}.product-image.violet[_ngcontent-%COMP%]{background:#e8e5ff}.product-image.blue[_ngcontent-%COMP%]{background:#dceefa}.product-image.coral[_ngcontent-%COMP%]{background:#ffe8df}.product-image.mint[_ngcontent-%COMP%]{background:#dff6ed}.product-image.amber[_ngcontent-%COMP%]{background:#fff0ca}.product-image.pink[_ngcontent-%COMP%]{background:#ffe3f0}.product-icon[_ngcontent-%COMP%]{font-size:104px;line-height:1;font-weight:700;color:#30394d;filter:drop-shadow(8px 8px 0 rgba(35,45,69,.12));transform:rotate(-8deg)}.badge[_ngcontent-%COMP%]{position:absolute;top:13px;left:13px;padding:5px 8px;border-radius:5px;background:#fff;color:#5f4dcd;font-size:10px;font-weight:800}.product-image[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;right:13px;bottom:13px;display:grid;place-items:center;width:35px;height:35px;border:0;border-radius:50%;background:#fff;color:var(--ink);font-size:22px;box-shadow:0 3px 11px #0002}.product-info[_ngcontent-%COMP%]{padding:16px 17px 18px}.product-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:4px 0 6px;font-size:15px}.product-category[_ngcontent-%COMP%]{margin:0;color:#7664d6;font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.7px}.rating[_ngcontent-%COMP%]{color:#e7a829;font-size:12px}.rating[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#9a9fa7}.price[_ngcontent-%COMP%]{margin:12px 0 0;font-size:16px;font-weight:800}.price[_ngcontent-%COMP%]   del[_ngcontent-%COMP%]{margin-left:7px;color:#9da2ab;font-weight:400;font-size:12px}.empty-results[_ngcontent-%COMP%]{grid-column:1/-1;padding:55px;text-align:center;color:var(--muted)}.empty-results[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:38px}.empty-results[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:var(--ink)}footer[_ngcontent-%COMP%]{padding:42px max(8vw,60px);display:grid;grid-template-columns:1fr 1fr;gap:15px;background:#192235;color:#fff}footer[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]{color:#fff}footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:5px 0;color:#b7bdcb;font-size:14px}footer[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{grid-column:1/-1;margin-top:19px;color:#7c8495;font-size:11px}.overlay[_ngcontent-%COMP%]{position:fixed;inset:0;z-index:30;background:#11182785}.cart-panel[_ngcontent-%COMP%]{position:fixed;z-index:31;top:0;right:0;width:min(420px,100%);height:100dvh;display:flex;flex-direction:column;background:#fff;box-shadow:-14px 0 36px #0002;animation:_ngcontent-%COMP%_slideIn .24s ease}.panel-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:24px 26px;border-bottom:1px solid var(--line)}.panel-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:22px;letter-spacing:-1px}.panel-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#8270de}.panel-header[_ngcontent-%COMP%] > button[_ngcontent-%COMP%], .modal-close[_ngcontent-%COMP%]{border:0;background:none;color:var(--muted);font-size:30px}.cart-items[_ngcontent-%COMP%]{flex:1;overflow:auto;padding:5px 24px}.cart-item[_ngcontent-%COMP%]{position:relative;display:grid;grid-template-columns:68px 1fr 20px;gap:12px;padding:17px 0;border-bottom:1px solid var(--line)}.mini-image[_ngcontent-%COMP%]{display:grid;place-items:center;width:68px;height:68px;border-radius:9px;font-size:40px;color:#30394d}.mini-image.violet[_ngcontent-%COMP%]{background:#e8e5ff}.mini-image.blue[_ngcontent-%COMP%]{background:#dceefa}.mini-image.coral[_ngcontent-%COMP%]{background:#ffe8df}.mini-image.mint[_ngcontent-%COMP%]{background:#dff6ed}.mini-image.amber[_ngcontent-%COMP%]{background:#fff0ca}.mini-image.pink[_ngcontent-%COMP%]{background:#ffe3f0}.cart-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:2px 0 5px;font-size:14px}.cart-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:13px;font-weight:700}.quantity[_ngcontent-%COMP%]{display:flex;gap:10px;align-items:center;margin-top:9px}.quantity[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:grid;place-items:center;width:22px;height:22px;border:1px solid var(--line);border-radius:5px;background:#fff}.quantity[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{font-size:13px}.remove[_ngcontent-%COMP%]{align-self:start;border:0;background:none;color:#9aa0a9;font-size:20px}.cart-summary[_ngcontent-%COMP%]{padding:19px 26px 25px;border-top:1px solid var(--line)}.cart-summary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin:9px 0;font-size:13px;color:var(--muted)}.cart-summary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{color:var(--ink)}.cart-summary[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%]{margin:17px 0;color:var(--ink);font-size:17px;font-weight:800}.wide[_ngcontent-%COMP%]{width:100%;margin-top:8px}.empty-cart[_ngcontent-%COMP%]{padding:70px 25px;text-align:center}.empty-cart[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{font-size:42px}.empty-cart[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-bottom:5px}.empty-cart[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--muted);font-size:14px}.secondary-button[_ngcontent-%COMP%]{margin-top:15px;padding:11px 16px;border:1px solid var(--ink);border-radius:7px;background:#fff;font-weight:700}.modal-backdrop[_ngcontent-%COMP%]{position:fixed;inset:0;z-index:40;display:grid;place-items:center;padding:20px;background:#11182790}.checkout-modal[_ngcontent-%COMP%]{position:relative;width:min(440px,100%);padding:35px;border-radius:15px;background:#fff;box-shadow:0 20px 60px #0005}.checkout-modal[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:36px;letter-spacing:-2px}.modal-close[_ngcontent-%COMP%]{position:absolute;right:18px;top:13px}.checkout-total[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin:25px 0;padding:15px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line);font-size:14px}.checkout-total[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{font-size:23px}.checkout-modal[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;margin:15px 0;color:var(--muted);font-size:12px}.checkout-modal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:block;width:100%;margin-top:6px;padding:12px;border:1px solid var(--line);border-radius:7px;font:inherit;color:var(--ink)}.checkout-modal[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{display:block;margin-top:15px;text-align:center;color:var(--muted);font-size:11px}.confirmation[_ngcontent-%COMP%]{text-align:center;padding:18px 0}.confirmation[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:grid;place-items:center;width:56px;height:56px;margin:0 auto 18px;border-radius:50%;background:var(--lime);font-size:30px}.confirmation[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:14px}.confirmation[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]:not(.eyebrow){color:var(--muted);line-height:1.5;font-size:14px}.confirmation[_ngcontent-%COMP%]   .primary-button[_ngcontent-%COMP%]{margin-top:13px}@keyframes _ngcontent-%COMP%_slideIn{from{transform:translateX(100%)}to{transform:translateX(0)}}\n@media(max-width:720px){.topbar[_ngcontent-%COMP%]{height:65px;padding:0 19px}.brand[_ngcontent-%COMP%]{font-size:20px}.brand[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:first-child{width:24px;height:24px}.topbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{display:none}.cart-button[_ngcontent-%COMP%]{padding:9px 10px}.cart-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:none}.hero[_ngcontent-%COMP%]{grid-template-columns:1fr;min-height:600px;padding:53px 25px 0}.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:49px}.hero-visual[_ngcontent-%COMP%]{height:260px;margin-top:-10px;transform:scale(.8);transform-origin:bottom center}.benefits[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:18px;padding:24px}.benefits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{grid-column:1/-1}.shop[_ngcontent-%COMP%]{padding:57px 20px}.section-heading[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{display:none}.section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:37px}.filters[_ngcontent-%COMP%]{display:block;margin-top:29px}.category-list[_ngcontent-%COMP%]{flex-wrap:nowrap;overflow:auto;padding-bottom:8px}.category-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{white-space:nowrap}.search[_ngcontent-%COMP%]{width:100%;margin-top:11px}.product-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr);gap:12px}.product-image[_ngcontent-%COMP%]{height:160px}.product-icon[_ngcontent-%COMP%]{font-size:78px}.product-info[_ngcontent-%COMP%]{padding:12px}.product-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:13px}.price[_ngcontent-%COMP%]{font-size:14px}footer[_ngcontent-%COMP%]{padding:34px 24px}.cart-panel[_ngcontent-%COMP%]{width:100%}}\n.product-card[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_productEnter .38s both cubic-bezier(.2,.75,.32,1)}.checkout-modal[_ngcontent-%COMP%]   input.invalid[_ngcontent-%COMP%]{border-color:#d24b58;background:#fff7f7}.field-error[_ngcontent-%COMP%]{margin:-9px 0 2px;color:#c33e4e;font-size:11px}@keyframes _ngcontent-%COMP%_productEnter{from{opacity:0;transform:translateY(14px) scale(.985)}to{opacity:1;transform:translateY(0) scale(1)}}@media(prefers-reduced-motion:reduce){.product-card[_ngcontent-%COMP%]{animation:none!important}}\n.product-image[_ngcontent-%COMP%]{background:#fff!important;height:240px}.product-photo[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain;padding:16px}.mini-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain;border-radius:9px;background:white}.badge[_ngcontent-%COMP%]{z-index:1}.product-description[_ngcontent-%COMP%]{min-height:48px;font-size:13px;color:var(--muted);line-height:1.5}.product-detail[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:8px;font-size:11px;color:var(--muted)}.product-detail[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#6656bf}@media(max-width:720px){.product-image[_ngcontent-%COMP%]{height:180px}.product-photo[_ngcontent-%COMP%]{padding:8px}}\n\n\n.brand-filters[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin:0 0 24px}.brand-filters[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{font-size:13px;font-weight:700;margin-right:8px}.brand-filters[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:1px solid var(--line);border-radius:20px;padding:8px 15px;background:#fff;color:var(--ink)}.brand-filters[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{background:#e8e5ff;border-color:#7966dc;color:#5141b0}.brand-filters[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{margin-left:auto;color:var(--muted)}.product-card[_ngcontent-%COMP%]{cursor:pointer}.product-title-button[_ngcontent-%COMP%]{border:0;background:none;padding:0;color:inherit;font:inherit;text-align:left;display:flex;gap:12px;align-items:center;width:100%}.product-title-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:auto;color:#7966dc}button[_ngcontent-%COMP%]:focus-visible{outline:3px solid #7966dc;outline-offset:3px}\n.product-dialog[_ngcontent-%COMP%]{width:min(940px,calc(100vw - 32px));max-height:90dvh;overflow:auto;border:0;border-radius:18px;padding:40px;color:var(--ink);background:#fff;box-shadow:0 24px 80px #0005}.product-dialog[_ngcontent-%COMP%]::backdrop{background:#111827aa}.detail-close[_ngcontent-%COMP%]{position:absolute;right:12px;top:8px;background:#f3f3f7;border:0;border-radius:50%;width:34px;height:34px;font-size:25px;color:var(--ink)}.detail-layout[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:32px}.detail-photo[_ngcontent-%COMP%]{height:320px;display:grid;place-items:center;background:#fafafa;border-radius:12px;overflow:hidden}.detail-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain}.thumbnails[_ngcontent-%COMP%]{display:flex;gap:10px;overflow-x:auto;margin:16px 0}.thumbnails[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{flex:0 0 76px;height:65px;border:2px solid var(--line);border-radius:8px;background:white;padding:4px;overflow:hidden}.thumbnails[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{border-color:#7966dc}.thumbnails[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain}.detail-gallery[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:var(--muted);font-size:11px;line-height:1.5;display:block}.detail-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:30px;margin:0 0 16px;letter-spacing:-1px}.detail-description[_ngcontent-%COMP%]{line-height:1.65;color:#555e6e}.detail-meta[_ngcontent-%COMP%]{font-size:12px;color:var(--muted)}.detail-price[_ngcontent-%COMP%]{font-size:27px;font-weight:800;margin:20px 0 8px}.primary-button[_ngcontent-%COMP%]:disabled{opacity:.55;cursor:not-allowed;transform:none}.manufacturer-link[_ngcontent-%COMP%]{display:block;margin:18px 0;color:#6656bf;font-size:13px}.demo-reviews[_ngcontent-%COMP%]{border-top:1px solid var(--line);margin-top:24px;padding-top:10px}.demo-reviews[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:17px}.review-disclaimer[_ngcontent-%COMP%]{font-size:12px;background:#f0eefc;padding:10px;border-radius:6px;line-height:1.5}.stars[_ngcontent-%COMP%]{color:#a76800;letter-spacing:2px}.review[_ngcontent-%COMP%]{border-top:1px solid var(--line);padding:14px 0;font-size:12px}.review[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap}.review[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--muted);line-height:1.5;margin-bottom:0}body[_ngcontent-%COMP%]:has(.product-dialog[open]){overflow:hidden}\n@media(max-width:720px){.detail-layout[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:24px}.product-dialog[_ngcontent-%COMP%]{padding:42px 20px 24px}.detail-photo[_ngcontent-%COMP%]{height:230px}.brand-filters[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{width:100%;margin:5px 0}}\n\n\n\n.catalog-note[_ngcontent-%COMP%] { margin: 22px 0 0; color: var(--muted); font-size: 14px; line-height: 1.5; }\n#inicio[_ngcontent-%COMP%], #categorias[_ngcontent-%COMP%], #tienda[_ngcontent-%COMP%], #beneficios[_ngcontent-%COMP%] { scroll-margin-top: 98px; }\n.topbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] { margin-left: 0; }\n.topbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] { padding: 12px 0; }\na[_ngcontent-%COMP%]:focus-visible { outline: 3px solid #7966dc; outline-offset: 5px; border-radius: 5px; }\n[_nghost-%COMP%]:has(#categorias:target)   nav[_ngcontent-%COMP%]   a[href=\"#categorias\"][_ngcontent-%COMP%], \n[_nghost-%COMP%]:has(#tienda:target)   nav[_ngcontent-%COMP%]   a[href=\"#tienda\"][_ngcontent-%COMP%], \n[_nghost-%COMP%]:has(#beneficios:target)   nav[_ngcontent-%COMP%]   a[href=\"#beneficios\"][_ngcontent-%COMP%] { color: var(--ink); text-decoration: underline; text-underline-offset: 7px; }\n.category-directory[_ngcontent-%COMP%] { padding: 70px max(8vw,60px); background: #fff; }\n.category-tiles[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 18px; margin-top: 32px; }\n.category-tile[_ngcontent-%COMP%] { display: flex; flex-direction: column; align-items: center; padding: 22px 18px; border-radius: 16px; background: #e2f884; color: var(--ink); text-decoration: none; text-align: center; transition: transform .2s, background .2s, box-shadow .2s; }\n.category-tile[_ngcontent-%COMP%]:hover { background: #d4f35d; transform: translateY(-4px); box-shadow: 0 9px 22px #17203314; }\n.category-art[_ngcontent-%COMP%] { display: grid; place-items: center; width: 100%; height: 155px; margin-bottom: 18px; }\n.category-art[_ngcontent-%COMP%]   app-product-image[_ngcontent-%COMP%] { width: 155px; }\n.category-art[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] { font-size: 75px; }\n.category-tile[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { margin: 0; font-size: 20px; font-weight: 600; letter-spacing: -.4px; }\n.category-tile[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { margin-top: 7px; color: #495530; font-size: 13px; }\n.brand-filters[_ngcontent-%COMP%]   .clear-filters[_ngcontent-%COMP%] { border: 0; background: transparent; text-decoration: underline; text-underline-offset: 3px; font-size: 13px; }\n.advantages[_ngcontent-%COMP%] { padding: 64px max(8vw,60px); background: #eeedf7; }\n.advantages[_ngcontent-%COMP%]   .benefits[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); background: transparent; padding: 36px 0 20px; gap: 24px; }\n.advantages[_ngcontent-%COMP%]   .benefits[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] { min-width: 0; align-items: flex-start; grid-column: auto; }\n.advantages[_ngcontent-%COMP%]   .benefits[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child { font-size: 25px; }\n.advantages[_ngcontent-%COMP%]   .benefits[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] { font-size: 16px; }\n.advantages[_ngcontent-%COMP%]   .benefits[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { font-size: 14px; line-height: 1.5; }\n.advantages-note[_ngcontent-%COMP%] { margin: 16px 0 0; color: #606776; font-size: 13px; line-height: 1.5; }\n@media(max-width:900px) {\n  .advantages[_ngcontent-%COMP%]   .benefits[_ngcontent-%COMP%] { grid-template-columns: repeat(2,minmax(0,1fr)); }\n  .topbar[_ngcontent-%COMP%] { padding-left: 24px; padding-right: 24px; }\n  .topbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] { gap: 20px; }\n}\n@media(max-width:720px) {\n  .topbar[_ngcontent-%COMP%] { height: auto; min-height: 105px; padding: 12px 20px 0; flex-wrap: wrap; gap: 8px; }\n  .topbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] { display: flex; order: 3; width: 100%; justify-content: space-between; gap: 16px; overflow-x: auto; }\n  .topbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] { flex-shrink: 0; font-size: 14px; padding: 10px 0 14px; }\n  #inicio[_ngcontent-%COMP%], #categorias[_ngcontent-%COMP%], #tienda[_ngcontent-%COMP%], #beneficios[_ngcontent-%COMP%] { scroll-margin-top: 128px; }\n  .category-directory[_ngcontent-%COMP%], .advantages[_ngcontent-%COMP%] { padding: 48px 20px; }\n  .category-tiles[_ngcontent-%COMP%] { grid-template-columns: repeat(2,minmax(0,1fr)); gap: 12px; margin-top: 26px; }\n  .category-tile[_ngcontent-%COMP%] { padding: 18px 10px; border-radius: 12px; }\n  .category-art[_ngcontent-%COMP%] { height: 120px; }\n  .category-art[_ngcontent-%COMP%]   app-product-image[_ngcontent-%COMP%] { width: 120px; }\n  .category-art[_ngcontent-%COMP%] { margin-bottom: 14px; }\n  .category-tile[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { font-size: 18px; }\n  .advantages[_ngcontent-%COMP%]   .benefits[_ngcontent-%COMP%] { grid-template-columns: 1fr; gap: 26px; padding-top: 28px; }\n}\n@media(prefers-reduced-motion:reduce) {\n  .category-tile[_ngcontent-%COMP%] { transition: none; }\n  .category-tile[_ngcontent-%COMP%]:hover { transform: none; }\n}\n\n\n\n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .checkout-modal[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:800;letter-spacing:-.035em;line-height:1.08}\n.detail-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:800;letter-spacing:-.025em;line-height:1.15}\n.brand[_ngcontent-%COMP%]{letter-spacing:-.04em}\n\n\n\n.product-image[_ngcontent-%COMP%] { background: #f4f5f7 !important; }\n.product-image[_ngcontent-%COMP%]   app-product-image[_ngcontent-%COMP%] { width: min(85%, 210px); }\n.mini-image[_ngcontent-%COMP%]   app-product-image[_ngcontent-%COMP%] { width: 64px; }\n.detail-photo[_ngcontent-%COMP%]   app-product-image[_ngcontent-%COMP%] { width: min(90%, 310px); }\n.thumbnails[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] { display: grid; place-items: center; }\n.thumbnails[_ngcontent-%COMP%]   app-product-image[_ngcontent-%COMP%] { width: 53px; }\n@media(max-width:720px) {\n  .product-image[_ngcontent-%COMP%]   app-product-image[_ngcontent-%COMP%] { width: min(92%, 156px); }\n  .detail-photo[_ngcontent-%COMP%]   app-product-image[_ngcontent-%COMP%] { width: min(90%, 225px); }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppComponent, [{
        type: Component,
        args: [{ selector: 'app-root', standalone: true, imports: [CommonModule, FormsModule, CurrencyPipe, ProductImageComponent], template: "<header class=\"topbar\">\n  <a class=\"brand\" href=\"#inicio\" aria-label=\"TecnoM\u00F3vil inicio\"><span>TM</span> tecno<span>m\u00F3vil</span></a>\n  <nav aria-label=\"Navegaci\u00F3n principal\"><a href=\"#tienda\" (click)=\"resetFilters()\">Tienda</a><a href=\"#categorias\">Categor\u00EDas</a><a href=\"#beneficios\">Ventajas</a>\n    @if (auth.isAdmin()) {\n      <a href=\"/admin\">Panel de administrador</a>\n      <button class=\"session-button\" type=\"button\" (click)=\"logout()\" [disabled]=\"signingOut()\">{{ signingOut() ? 'Cerrando\u2026' : 'Cerrar sesi\u00F3n' }}</button>\n    } @else if (!auth.checking()) { <a href=\"/login\">Iniciar sesi\u00F3n</a> }\n  </nav>\n  <button class=\"cart-button\" (click)=\"cartOpen.set(true)\" aria-label=\"Abrir carrito\">\uD83D\uDECD\uFE0F <b>{{ cartCount() }}</b><span>Carrito</span></button>\n</header>\n@if (sessionError()) { <p class=\"session-error\" role=\"alert\">{{ sessionError() }}</p> }\n\n<main id=\"inicio\">\n  <section class=\"hero\">\n    <div class=\"hero-copy\"><p class=\"eyebrow\">TECNOLOG\u00CDA QUE TE ACOMPA\u00D1A</p><h1>Haz que tu m\u00F3vil<br><em>pueda m\u00E1s.</em></h1><p class=\"hero-text\">Los accesorios esenciales para conectar, crear y disfrutar sin l\u00EDmites.</p><a class=\"primary-button\" href=\"#tienda\" (click)=\"resetFilters()\">Explorar productos <span>\u2192</span></a></div>\n    <div class=\"hero-visual\" aria-label=\"Ilustraci\u00F3n de tel\u00E9fono y accesorios\"><div class=\"glow\"></div><div class=\"headphones\">\u25D6 <i>\u25D7</i></div><div class=\"phone\"><span>\u25CF</span><strong>09:41</strong><small>\u25CC</small></div><div class=\"spark s1\">\u2726</div><div class=\"spark s2\">\u2726</div></div>\n  </section>\n\n  <section class=\"category-directory\" id=\"categorias\" aria-labelledby=\"categories-title\">\n    <div class=\"section-heading\"><div><p class=\"eyebrow\">ENCUENTRA LO QUE BUSCAS</p><h2 id=\"categories-title\">Categor\u00EDas</h2></div><p>Tu pr\u00F3xima elecci\u00F3n empieza aqu\u00ED.</p></div>\n    <div class=\"category-tiles\" [attr.aria-busy]=\"loading()\">\n      @for (card of categoryCards(); track card.label) {\n        <a class=\"category-tile\" href=\"#tienda\" (click)=\"browseCategory(card)\" [attr.aria-label]=\"'Ver productos de ' + card.label\">\n          <div class=\"category-art\" aria-hidden=\"true\">\n            @if (card.imageUrl) {\n              <app-product-image [src]=\"card.imageUrl\" alt=\"\" loading=\"lazy\" (failed)=\"imageFailed(card.imageUrl)\"></app-product-image>\n            } @else { <span>{{ card.icon }}</span> }\n          </div>\n          <h3>{{ card.label }}</h3>\n          <small>{{ loading() ? 'Cargando\u2026' : catalogError() ? 'Ver cat\u00E1logo' : card.count + (card.count === 1 ? ' producto' : ' productos') }}</small>\n        </a>\n      }\n    </div>\n  </section>\n\n  <section class=\"shop\" id=\"tienda\"><div class=\"section-heading\"><div><p class=\"eyebrow\">DESCUBRE LO \u00DALTIMO</p><h2>Todo para tu <em>m\u00F3vil</em></h2></div><p>Peque\u00F1os accesorios.<br>Grandes posibilidades.</p></div>\n    <p class=\"catalog-note\">Novedades de 2026 primero \u00B7 Incluye los anuncios de Apple de septiembre; consulta la disponibilidad en cada ficha. Precios y existencias de demostraci\u00F3n.</p>\n    <div class=\"filters\"><div class=\"category-list\" aria-label=\"Filtrar por tipo de producto\">@for (category of categories; track category) {<button type=\"button\" [class.active]=\"selectedCategory() === category\" [attr.aria-pressed]=\"selectedCategory() === category\" (click)=\"setCategory(category)\">{{ category }}</button>}</div><label class=\"search\"><span aria-hidden=\"true\">\u2315</span><input type=\"search\" aria-label=\"Buscar producto\" [ngModel]=\"search()\" (ngModelChange)=\"updateSearch($event)\" placeholder=\"Buscar producto\"></label></div>\n    <div class=\"brand-filters\" aria-label=\"Filtrar por marca\"><span>Marca</span>\n      @for (brand of brands; track brand) {<button type=\"button\" [class.active]=\"selectedBrand() === brand\" [attr.aria-pressed]=\"selectedBrand() === brand\" (click)=\"setBrand(brand)\">{{ brand }}</button>}\n      @if (hasFilters()) {<button class=\"clear-filters\" type=\"button\" (click)=\"resetFilters()\">Limpiar filtros \u00D7</button>}\n      <small aria-live=\"polite\">{{ filteredProducts().length }} {{ filteredProducts().length === 1 ? 'producto' : 'productos' }}</small>\n    </div>\n    @if (loading()) { <p role=\"status\">Cargando productos\u2026</p> }\n    @if (catalogError()) { <p role=\"alert\">{{ catalogError() }} <button (click)=\"loadProducts()\">Reintentar</button></p> }\n    <div class=\"product-grid\" [attr.data-category]=\"selectedCategory()\">@for (product of filteredProducts(); track product.id + '-' + categoryRevision(); let index = $index) {<article class=\"product-card\" (click)=\"onCardClick($event, product)\" [style.animation-delay]=\"index * 55 + 'ms'\"><div class=\"product-image\" [class]=\"product.color\">@if (product.badge) {<span class=\"badge\">{{ product.badge }}</span>}@if (product.imageUrl && !failedImages().has(product.imageUrl)) {<app-product-image [src]=\"product.imageUrl\" [alt]=\"product.name\" loading=\"lazy\" (failed)=\"imageFailed(product.imageUrl)\"></app-product-image>} @else {<span class=\"product-icon\" role=\"img\" [attr.aria-label]=\"product.name + ': imagen no disponible'\">{{ product.icon }}</span>}<button [disabled]=\"product.stock === 0\" (click)=\"addToCart(product)\" [attr.aria-label]=\"'A\u00F1adir ' + product.name\">+</button></div><div class=\"product-info\"><p class=\"product-category\">{{ product.brand }} \u00B7 {{ product.category }}</p><h3><button class=\"product-title-button\" type=\"button\" (click)=\"openProduct(product)\" [attr.aria-label]=\"'Ver detalles de ' + product.name\">{{ product.name }} <span aria-hidden=\"true\">\u2197</span></button></h3><p class=\"product-description\">{{ product.description }}</p><div class=\"product-detail\"><span>Lanzado en {{ product.releaseYear }}</span><a [href]=\"product.officialUrl\" target=\"_blank\" rel=\"noopener\">Ficha oficial \u2197</a></div><p>Stock: {{ product.stock }}</p><p class=\"price\">{{ product.price | currency:'EUR':'symbol':'1.2-2' }}</p></div></article>} @empty {<div class=\"empty-results\"><span>\u2315</span><h3>No hay productos para mostrar</h3><p>Prueba con otra b\u00FAsqueda o categor\u00EDa.</p></div>}</div>\n  </section>\n  <section class=\"advantages\" id=\"beneficios\" aria-labelledby=\"advantages-title\">\n    <div class=\"section-heading\"><div><p class=\"eyebrow\">COMPRA CON TRANQUILIDAD</p><h2 id=\"advantages-title\">Tus <em>ventajas</em></h2></div></div>\n    <div class=\"benefits\"><div><span aria-hidden=\"true\">\uD83D\uDE9A</span><span><b>Env\u00EDo gratis</b><small>en pedidos de 50 \u20AC o m\u00E1s</small></span></div><div><span aria-hidden=\"true\">\u21A9\uFE0F</span><span><b>Devoluciones f\u00E1ciles</b><small>30 d\u00EDas para decidir</small></span></div><div><span aria-hidden=\"true\">\uD83D\uDD12</span><span><b>Compra de demostraci\u00F3n</b><small>No se realizan cobros reales</small></span></div><div><span aria-hidden=\"true\">\uD83D\uDECD\uFE0F</span><span><b>Compra sin registro</b><small>Haz tu pedido como invitado, sin crear una cuenta</small></span></div></div>\n    <p class=\"advantages-note\">Tienda de ejemplo: las condiciones de env\u00EDo y devoluci\u00F3n son ilustrativas.</p>\n  </section>\n</main>\n\n<footer><a class=\"brand\" href=\"#inicio\"><span>TM</span> tecno<span>m\u00F3vil</span></a><p>Accesorios que siguen tu ritmo.</p><small>\u00A9 2026 TecnoM\u00F3vil \u00B7 Proyecto de demostraci\u00F3n</small></footer>\n\n@if (cartOpen()) {<div class=\"overlay\" (click)=\"cartOpen.set(false)\"></div><aside class=\"cart-panel\" aria-label=\"Carrito de compra\"><div class=\"panel-header\"><h2>Tu carrito <span>{{ cartCount() }}</span></h2><button (click)=\"cartOpen.set(false)\" aria-label=\"Cerrar\">\u00D7</button></div>@if (cartCount()) {<div class=\"cart-items\">@for (item of cart(); track item.id) {<div class=\"cart-item\"><div class=\"mini-image\" [class]=\"item.color\">@if (item.imageUrl && !failedImages().has(item.imageUrl)) {<app-product-image [src]=\"item.imageUrl\" [alt]=\"item.name\" loading=\"lazy\" (failed)=\"imageFailed(item.imageUrl)\"></app-product-image>} @else {{{ item.icon }}}</div><div><h3>{{ item.name }}</h3><p>{{ item.price | currency:'EUR':'symbol':'1.2-2' }}</p><div class=\"quantity\"><button (click)=\"changeQuantity(item.id, -1)\">\u2212</button><b>{{ item.quantity }}</b><button (click)=\"changeQuantity(item.id, 1)\">+</button></div></div><button class=\"remove\" (click)=\"remove(item.id)\" aria-label=\"Eliminar\">\u00D7</button></div>}</div><div class=\"cart-summary\"><p><span>Subtotal</span><b>{{ subtotal() | currency:'EUR':'symbol':'1.2-2' }}</b></p><p><span>Env\u00EDo</span><b>{{ shipping() ? (shipping() | currency:'EUR':'symbol':'1.2-2') : 'Gratis' }}</b></p><p class=\"total\"><span>Total</span><b>{{ total() | currency:'EUR':'symbol':'1.2-2' }}</b></p><button class=\"primary-button wide\" (click)=\"beginCheckout()\">Continuar con el pago \u2192</button></div>} @else {<div class=\"empty-cart\"><span>\uD83D\uDECD\uFE0F</span><h3>Tu carrito est\u00E1 vac\u00EDo</h3><p>A\u00F1ade algo que te encante.</p><button class=\"secondary-button\" (click)=\"cartOpen.set(false)\">Ir a la tienda</button></div>}</aside>}\n\n@if (checkoutOpen()) {<div class=\"modal-backdrop\"><section class=\"checkout-modal\">@if (orderConfirmed()) {<div class=\"confirmation\"><span>\u2713</span><p class=\"eyebrow\">\u00A1PEDIDO CONFIRMADO!</p><h2>Pedido guardado.</h2><p>Referencia: {{ orderId() }}<br>Total: {{ orderTotal() | currency:'EUR' }}<br>Pendiente de pago. Esta demo no env\u00EDa correos.</p><button class=\"primary-button\" (click)=\"closeCheckout()\">Seguir comprando</button></div>} @else {<button class=\"modal-close\" (click)=\"closeCheckout()\" aria-label=\"Cerrar formulario\">\u00D7</button><p class=\"eyebrow\">RESUMEN DE PEDIDO</p><h2>Un \u00FAltimo paso.</h2><div class=\"checkout-total\"><span>Total a pagar</span><b>{{ total() | currency:'EUR':'symbol':'1.2-2' }}</b></div><form #checkoutForm=\"ngForm\" (ngSubmit)=\"confirmOrder(checkoutForm)\" novalidate><label>Nombre completo<input name=\"name\" type=\"text\" [(ngModel)]=\"checkout.name\" required minlength=\"3\" #name=\"ngModel\" [class.invalid]=\"name.invalid && (name.touched || checkoutSubmitted())\" placeholder=\"Tu nombre y apellidos\"></label>@if (name.invalid && (name.touched || checkoutSubmitted())) {<p class=\"field-error\">Introduce al menos 3 caracteres.</p>}<label>Correo electr\u00F3nico<input name=\"email\" type=\"email\" [(ngModel)]=\"checkout.email\" required email #email=\"ngModel\" [class.invalid]=\"email.invalid && (email.touched || checkoutSubmitted())\" placeholder=\"tu@email.com\"></label>@if (email.invalid && (email.touched || checkoutSubmitted())) {<p class=\"field-error\">Introduce un correo electr\u00F3nico v\u00E1lido.</p>}<label>Direcci\u00F3n de env\u00EDo<input name=\"address\" type=\"text\" [(ngModel)]=\"checkout.address\" required minlength=\"10\" #address=\"ngModel\" [class.invalid]=\"address.invalid && (address.touched || checkoutSubmitted())\" placeholder=\"Calle, n\u00FAmero, ciudad\"></label>@if (address.invalid && (address.touched || checkoutSubmitted())) {<p class=\"field-error\">Indica una direcci\u00F3n de al menos 10 caracteres.</p>}@if (orderError()) { <p role=\"alert\">{{ orderError() }}</p> }<button class=\"primary-button wide\" type=\"submit\" [disabled]=\"submitting()\">{{ submitting() ? 'Guardando\u2026' : 'Confirmar pedido \u2192' }}</button></form><small>\uD83D\uDD12 Pago simulado \u00B7 Esta demo no procesa pagos reales.</small>}</section></div>}\n<dialog #productDialog class=\"product-dialog\" aria-labelledby=\"detail-title\" (click)=\"onBackdrop($event)\" (cancel)=\"closeProduct()\">\n  @if (selectedProduct(); as product) {\n    <button class=\"detail-close\" type=\"button\" autofocus aria-label=\"Cerrar detalle del producto\" (click)=\"closeProduct()\">\u00D7</button>\n    <div class=\"detail-layout\">\n      <section class=\"detail-gallery\" aria-label=\"Galer\u00EDa del producto\">\n        <div class=\"detail-photo\">\n          @if (selectedPhoto() && !failedImages().has(selectedPhoto())) {\n            <app-product-image [src]=\"selectedPhoto()\" [alt]=\"product.name + ' \u00B7 foto ' + (detailPhotos().indexOf(selectedPhoto()) + 1)\" (failed)=\"imageFailed(selectedPhoto())\"></app-product-image>\n          } @else { <p role=\"status\">Imagen no disponible. Selecciona otra fotograf\u00EDa.</p> }\n        </div>\n        <div class=\"thumbnails\">\n          @for (photo of detailPhotos(); track photo; let i = $index) {\n            <button type=\"button\" [class.active]=\"selectedPhoto() === photo\" [attr.aria-pressed]=\"selectedPhoto() === photo\" [attr.aria-label]=\"'Ver foto ' + (i + 1)\" (click)=\"selectedPhoto.set(photo)\">\n              @if (!failedImages().has(photo)) {<app-product-image [src]=\"photo\" alt=\"\" loading=\"lazy\" (failed)=\"imageFailed(photo)\"></app-product-image>}\n              @else {<span>Foto {{ i + 1 }}</span>}\n            </button>\n          }\n        </div>\n        <small>Fotograf\u00EDas oficiales. Pueden mostrar distintos acabados o variantes de la gama.</small>\n      </section>\n      <section class=\"detail-copy\">\n        <p class=\"eyebrow\">{{ product.brand }} \u00B7 {{ product.category }}</p>\n        <h2 id=\"detail-title\">{{ product.name }}</h2>\n        <p class=\"detail-description\">{{ product.description }}</p>\n        <p class=\"detail-meta\">Lanzamiento: {{ product.releaseYear }} \u00B7 {{ product.stock }} unidades disponibles</p>\n        <p class=\"detail-price\">{{ product.price | currency:'EUR':'symbol':'1.2-2' }}</p>\n        <button type=\"button\" class=\"primary-button wide\" [disabled]=\"!canAdd(product)\" (click)=\"addFromDetail(product)\">{{ product.stock === 0 ? 'Agotado' : !canAdd(product) ? 'L\u00EDmite de unidades en el carrito' : 'A\u00F1adir al carrito' }}</button>\n        <a class=\"manufacturer-link\" [href]=\"product.officialUrl\" target=\"_blank\" rel=\"noopener\">Ver informaci\u00F3n del fabricante \u2197</a>\n        <section class=\"demo-reviews\" aria-labelledby=\"reviews-title\">\n          <h3 id=\"reviews-title\">Valoraciones de ejemplo</h3>\n          <p class=\"review-disclaimer\">Opiniones ficticias para esta demo; no son rese\u00F1as de compradores reales.</p>\n          <p><span class=\"stars\" aria-hidden=\"true\">\u2605\u2605\u2605\u2605\u2606</span> <b>{{ demoAverage | number:'1.1-1' }}/5</b> \u00B7 {{ demoReviews.length }} ejemplos</p>\n          @for (review of demoReviews; track review.author) {\n            <article class=\"review\"><div><b>{{ review.author }}</b><span class=\"stars\" [attr.aria-label]=\"review.rating + ' de 5 estrellas'\">{{ stars(review.rating) }}</span></div><p>{{ review.text }}</p></article>\n          }\n        </section>\n      </section>\n    </div>\n  }\n</dialog>\n", styles: [":host { --ink:#172033; --muted:#6c7380; --lime:#d4fb57; --paper:#f8f8f6; --line:#e5e7e9; display:block; color:var(--ink); background:var(--paper); }\n.topbar nav .session-button{border:0;background:none;color:var(--muted);font:inherit;font-size:14px;padding:12px 0;white-space:nowrap}\n.topbar nav .session-button:disabled{opacity:.6;cursor:wait}\n.session-error{margin:0;padding:12px 20px;background:#fff0f0;color:#a32237;font-size:14px}\n@media(min-width:721px) and (max-width:1050px){.topbar{height:auto!important;min-height:100px;flex-wrap:wrap;gap:8px;padding-top:12px!important}.topbar nav{order:3;width:100%;justify-content:space-between;gap:16px;overflow-x:auto}.topbar nav a{white-space:nowrap}}\n*{box-sizing:border-box}.topbar{height:78px;display:flex;align-items:center;justify-content:space-between;padding:0 max(5vw,36px);background:#fff;border-bottom:1px solid #edf0f0;position:sticky;top:0;z-index:20}.brand{font-size:23px;font-weight:800;letter-spacing:-1.7px;color:var(--ink);text-decoration:none}.brand>span:first-child{display:inline-grid;place-items:center;margin-right:7px;width:27px;height:27px;font-size:11px;letter-spacing:-1px;border-radius:8px;background:var(--ink);color:var(--lime)}.brand>span:last-child{color:#8774ea}.topbar nav{display:flex;gap:31px;margin-left:100px}.topbar nav a{font-size:14px;color:var(--muted);text-decoration:none}.topbar nav a:hover{color:var(--ink)}button{font:inherit;cursor:pointer}.cart-button{border:0;border-radius:10px;padding:11px 15px;background:#f0f1f0;color:var(--ink);font-size:14px}.cart-button b{display:inline-grid;place-items:center;width:18px;height:18px;margin:0 5px;border-radius:50%;background:var(--ink);color:var(--lime);font-size:11px}.hero{min-height:490px;display:grid;grid-template-columns:1fr 1fr;align-items:center;padding:65px max(8vw,60px) 56px;overflow:hidden;background:#edede9}.eyebrow{margin:0 0 13px;color:#7664d6;letter-spacing:1.4px;font-size:11px;font-weight:800}.hero h1,.section-heading h2,.checkout-modal h2{margin:0;line-height:.98;letter-spacing:-3.6px;font-size:clamp(43px,5.1vw,70px)}em{font-style:normal;color:#7966dc}.hero-text{max-width:400px;margin:25px 0 30px;color:var(--muted);font-size:16px;line-height:1.55}.primary-button{display:inline-flex;gap:22px;align-items:center;justify-content:center;border:0;border-radius:8px;padding:15px 20px;background:var(--ink);color:#fff;text-decoration:none;font-weight:700;font-size:14px;transition:.2s}.primary-button:hover{transform:translateY(-2px);background:#29344a}.hero-visual{height:365px;position:relative;display:grid;place-items:center}.glow{position:absolute;width:325px;height:325px;border-radius:50%;background:var(--lime);filter:blur(.2px)}.phone{z-index:2;width:170px;height:330px;padding:16px 11px;border:8px solid #192033;border-radius:29px;background:linear-gradient(145deg,#4d44ac,#877be8 65%,#b6adff);box-shadow:23px 27px 0 rgba(28,31,44,.13);transform:rotate(9deg);color:#fff}.phone span{display:block;margin:auto;width:42px;height:10px;border-radius:9px;background:#171d2b;text-align:center;color:#171d2b}.phone strong{display:block;margin-top:103px;font-size:25px;text-align:center;letter-spacing:-1px}.phone small{display:block;margin:93px auto 0;width:33px;height:33px;border:2px solid #fff;border-radius:50%;text-align:center;line-height:29px}.headphones{position:absolute;z-index:3;right:3%;bottom:8%;font-size:130px;line-height:1;color:#252c3d;transform:rotate(-16deg)}.headphones i{font-style:normal;color:#3e4863}.spark{position:absolute;z-index:4;color:#fff;font-size:29px}.s1{top:12%;right:10%}.s2{bottom:6%;left:13%;font-size:19px}.benefits{min-height:95px;padding:20px max(8vw,60px);background:#fff;display:flex;justify-content:space-between;align-items:center}.benefits>div{display:flex;gap:12px;align-items:center;font-size:25px}.benefits span{display:flex;flex-direction:column;font-size:13px}.benefits small{margin-top:3px;color:var(--muted);font-size:12px}.shop{padding:82px max(8vw,60px)}.section-heading{display:flex;justify-content:space-between;align-items:end}.section-heading h2{font-size:43px;letter-spacing:-2px}.section-heading>p{color:var(--muted);font-size:14px;line-height:1.55}.filters{display:flex;justify-content:space-between;gap:25px;align-items:center;margin:41px 0 28px}.category-list{display:flex;gap:8px;flex-wrap:wrap}.category-list button{padding:10px 15px;border:1px solid var(--line);border-radius:22px;background:transparent;color:var(--muted);font-size:13px}.category-list button.active{border-color:var(--ink);background:var(--ink);color:#fff}.search{display:flex;align-items:center;gap:7px;width:210px;padding:9px 12px;border:1px solid var(--line);border-radius:8px;background:#fff;color:var(--muted)}.search input{min-width:0;width:100%;border:0;outline:0;background:transparent;font:inherit;font-size:13px}.product-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:23px}.product-card{min-width:0;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #edf0f0;transition:.2s}.product-card:hover{transform:translateY(-4px);box-shadow:0 13px 28px rgba(33,42,58,.1)}.product-image{position:relative;height:211px;display:grid;place-items:center;overflow:hidden}.product-image.violet{background:#e8e5ff}.product-image.blue{background:#dceefa}.product-image.coral{background:#ffe8df}.product-image.mint{background:#dff6ed}.product-image.amber{background:#fff0ca}.product-image.pink{background:#ffe3f0}.product-icon{font-size:104px;line-height:1;font-weight:700;color:#30394d;filter:drop-shadow(8px 8px 0 rgba(35,45,69,.12));transform:rotate(-8deg)}.badge{position:absolute;top:13px;left:13px;padding:5px 8px;border-radius:5px;background:#fff;color:#5f4dcd;font-size:10px;font-weight:800}.product-image button{position:absolute;right:13px;bottom:13px;display:grid;place-items:center;width:35px;height:35px;border:0;border-radius:50%;background:#fff;color:var(--ink);font-size:22px;box-shadow:0 3px 11px #0002}.product-info{padding:16px 17px 18px}.product-info h3{margin:4px 0 6px;font-size:15px}.product-category{margin:0;color:#7664d6;font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.7px}.rating{color:#e7a829;font-size:12px}.rating span{color:#9a9fa7}.price{margin:12px 0 0;font-size:16px;font-weight:800}.price del{margin-left:7px;color:#9da2ab;font-weight:400;font-size:12px}.empty-results{grid-column:1/-1;padding:55px;text-align:center;color:var(--muted)}.empty-results span{font-size:38px}.empty-results h3{color:var(--ink)}footer{padding:42px max(8vw,60px);display:grid;grid-template-columns:1fr 1fr;gap:15px;background:#192235;color:#fff}footer .brand{color:#fff}footer p{margin:5px 0;color:#b7bdcb;font-size:14px}footer small{grid-column:1/-1;margin-top:19px;color:#7c8495;font-size:11px}.overlay{position:fixed;inset:0;z-index:30;background:#11182785}.cart-panel{position:fixed;z-index:31;top:0;right:0;width:min(420px,100%);height:100dvh;display:flex;flex-direction:column;background:#fff;box-shadow:-14px 0 36px #0002;animation:slideIn .24s ease}.panel-header{display:flex;justify-content:space-between;align-items:center;padding:24px 26px;border-bottom:1px solid var(--line)}.panel-header h2{margin:0;font-size:22px;letter-spacing:-1px}.panel-header h2 span{color:#8270de}.panel-header>button,.modal-close{border:0;background:none;color:var(--muted);font-size:30px}.cart-items{flex:1;overflow:auto;padding:5px 24px}.cart-item{position:relative;display:grid;grid-template-columns:68px 1fr 20px;gap:12px;padding:17px 0;border-bottom:1px solid var(--line)}.mini-image{display:grid;place-items:center;width:68px;height:68px;border-radius:9px;font-size:40px;color:#30394d}.mini-image.violet{background:#e8e5ff}.mini-image.blue{background:#dceefa}.mini-image.coral{background:#ffe8df}.mini-image.mint{background:#dff6ed}.mini-image.amber{background:#fff0ca}.mini-image.pink{background:#ffe3f0}.cart-item h3{margin:2px 0 5px;font-size:14px}.cart-item p{margin:0;font-size:13px;font-weight:700}.quantity{display:flex;gap:10px;align-items:center;margin-top:9px}.quantity button{display:grid;place-items:center;width:22px;height:22px;border:1px solid var(--line);border-radius:5px;background:#fff}.quantity b{font-size:13px}.remove{align-self:start;border:0;background:none;color:#9aa0a9;font-size:20px}.cart-summary{padding:19px 26px 25px;border-top:1px solid var(--line)}.cart-summary p{display:flex;justify-content:space-between;margin:9px 0;font-size:13px;color:var(--muted)}.cart-summary p b{color:var(--ink)}.cart-summary .total{margin:17px 0;color:var(--ink);font-size:17px;font-weight:800}.wide{width:100%;margin-top:8px}.empty-cart{padding:70px 25px;text-align:center}.empty-cart>span{font-size:42px}.empty-cart h3{margin-bottom:5px}.empty-cart p{color:var(--muted);font-size:14px}.secondary-button{margin-top:15px;padding:11px 16px;border:1px solid var(--ink);border-radius:7px;background:#fff;font-weight:700}.modal-backdrop{position:fixed;inset:0;z-index:40;display:grid;place-items:center;padding:20px;background:#11182790}.checkout-modal{position:relative;width:min(440px,100%);padding:35px;border-radius:15px;background:#fff;box-shadow:0 20px 60px #0005}.checkout-modal h2{font-size:36px;letter-spacing:-2px}.modal-close{position:absolute;right:18px;top:13px}.checkout-total{display:flex;justify-content:space-between;align-items:center;margin:25px 0;padding:15px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line);font-size:14px}.checkout-total b{font-size:23px}.checkout-modal label{display:block;margin:15px 0;color:var(--muted);font-size:12px}.checkout-modal input{display:block;width:100%;margin-top:6px;padding:12px;border:1px solid var(--line);border-radius:7px;font:inherit;color:var(--ink)}.checkout-modal small{display:block;margin-top:15px;text-align:center;color:var(--muted);font-size:11px}.confirmation{text-align:center;padding:18px 0}.confirmation>span{display:grid;place-items:center;width:56px;height:56px;margin:0 auto 18px;border-radius:50%;background:var(--lime);font-size:30px}.confirmation h2{margin-bottom:14px}.confirmation>p:not(.eyebrow){color:var(--muted);line-height:1.5;font-size:14px}.confirmation .primary-button{margin-top:13px}@keyframes slideIn{from{transform:translateX(100%)}to{transform:translateX(0)}}\n@media(max-width:720px){.topbar{height:65px;padding:0 19px}.brand{font-size:20px}.brand>span:first-child{width:24px;height:24px}.topbar nav{display:none}.cart-button{padding:9px 10px}.cart-button span{display:none}.hero{grid-template-columns:1fr;min-height:600px;padding:53px 25px 0}.hero h1{font-size:49px}.hero-visual{height:260px;margin-top:-10px;transform:scale(.8);transform-origin:bottom center}.benefits{display:grid;grid-template-columns:1fr 1fr;gap:18px;padding:24px}.benefits>div:last-child{grid-column:1/-1}.shop{padding:57px 20px}.section-heading>p{display:none}.section-heading h2{font-size:37px}.filters{display:block;margin-top:29px}.category-list{flex-wrap:nowrap;overflow:auto;padding-bottom:8px}.category-list button{white-space:nowrap}.search{width:100%;margin-top:11px}.product-grid{grid-template-columns:repeat(2,1fr);gap:12px}.product-image{height:160px}.product-icon{font-size:78px}.product-info{padding:12px}.product-info h3{font-size:13px}.price{font-size:14px}footer{padding:34px 24px}.cart-panel{width:100%}}\n.product-card{animation:productEnter .38s both cubic-bezier(.2,.75,.32,1)}.checkout-modal input.invalid{border-color:#d24b58;background:#fff7f7}.field-error{margin:-9px 0 2px;color:#c33e4e;font-size:11px}@keyframes productEnter{from{opacity:0;transform:translateY(14px) scale(.985)}to{opacity:1;transform:translateY(0) scale(1)}}@media(prefers-reduced-motion:reduce){.product-card{animation:none!important}}\n.product-image{background:#fff!important;height:240px}.product-photo{width:100%;height:100%;object-fit:contain;padding:16px}.mini-image img{width:100%;height:100%;object-fit:contain;border-radius:9px;background:white}.badge{z-index:1}.product-description{min-height:48px;font-size:13px;color:var(--muted);line-height:1.5}.product-detail{display:flex;flex-wrap:wrap;gap:8px;font-size:11px;color:var(--muted)}.product-detail a{color:#6656bf}@media(max-width:720px){.product-image{height:180px}.product-photo{padding:8px}}\n/* Filtros y ficha de producto */\n.brand-filters{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin:0 0 24px}.brand-filters>span{font-size:13px;font-weight:700;margin-right:8px}.brand-filters button{border:1px solid var(--line);border-radius:20px;padding:8px 15px;background:#fff;color:var(--ink)}.brand-filters button.active{background:#e8e5ff;border-color:#7966dc;color:#5141b0}.brand-filters small{margin-left:auto;color:var(--muted)}.product-card{cursor:pointer}.product-title-button{border:0;background:none;padding:0;color:inherit;font:inherit;text-align:left;display:flex;gap:12px;align-items:center;width:100%}.product-title-button span{margin-left:auto;color:#7966dc}button:focus-visible{outline:3px solid #7966dc;outline-offset:3px}\n.product-dialog{width:min(940px,calc(100vw - 32px));max-height:90dvh;overflow:auto;border:0;border-radius:18px;padding:40px;color:var(--ink);background:#fff;box-shadow:0 24px 80px #0005}.product-dialog::backdrop{background:#111827aa}.detail-close{position:absolute;right:12px;top:8px;background:#f3f3f7;border:0;border-radius:50%;width:34px;height:34px;font-size:25px;color:var(--ink)}.detail-layout{display:grid;grid-template-columns:1fr 1fr;gap:32px}.detail-photo{height:320px;display:grid;place-items:center;background:#fafafa;border-radius:12px;overflow:hidden}.detail-photo img{width:100%;height:100%;object-fit:contain}.thumbnails{display:flex;gap:10px;overflow-x:auto;margin:16px 0}.thumbnails button{flex:0 0 76px;height:65px;border:2px solid var(--line);border-radius:8px;background:white;padding:4px;overflow:hidden}.thumbnails button.active{border-color:#7966dc}.thumbnails img{width:100%;height:100%;object-fit:contain}.detail-gallery small{color:var(--muted);font-size:11px;line-height:1.5;display:block}.detail-copy h2{font-size:30px;margin:0 0 16px;letter-spacing:-1px}.detail-description{line-height:1.65;color:#555e6e}.detail-meta{font-size:12px;color:var(--muted)}.detail-price{font-size:27px;font-weight:800;margin:20px 0 8px}.primary-button:disabled{opacity:.55;cursor:not-allowed;transform:none}.manufacturer-link{display:block;margin:18px 0;color:#6656bf;font-size:13px}.demo-reviews{border-top:1px solid var(--line);margin-top:24px;padding-top:10px}.demo-reviews h3{font-size:17px}.review-disclaimer{font-size:12px;background:#f0eefc;padding:10px;border-radius:6px;line-height:1.5}.stars{color:#a76800;letter-spacing:2px}.review{border-top:1px solid var(--line);padding:14px 0;font-size:12px}.review>div{display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap}.review p{color:var(--muted);line-height:1.5;margin-bottom:0}body:has(.product-dialog[open]){overflow:hidden}\n@media(max-width:720px){.detail-layout{grid-template-columns:1fr;gap:24px}.product-dialog{padding:42px 20px 24px}.detail-photo{height:230px}.brand-filters small{width:100%;margin:5px 0}}\n\n/* Destinos independientes del men\u00FA y categor\u00EDas visuales. */\n.catalog-note { margin: 22px 0 0; color: var(--muted); font-size: 14px; line-height: 1.5; }\n#inicio, #categorias, #tienda, #beneficios { scroll-margin-top: 98px; }\n.topbar nav { margin-left: 0; }\n.topbar nav a { padding: 12px 0; }\na:focus-visible { outline: 3px solid #7966dc; outline-offset: 5px; border-radius: 5px; }\n:host:has(#categorias:target) nav a[href=\"#categorias\"],\n:host:has(#tienda:target) nav a[href=\"#tienda\"],\n:host:has(#beneficios:target) nav a[href=\"#beneficios\"] { color: var(--ink); text-decoration: underline; text-underline-offset: 7px; }\n.category-directory { padding: 70px max(8vw,60px); background: #fff; }\n.category-tiles { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 18px; margin-top: 32px; }\n.category-tile { display: flex; flex-direction: column; align-items: center; padding: 22px 18px; border-radius: 16px; background: #e2f884; color: var(--ink); text-decoration: none; text-align: center; transition: transform .2s, background .2s, box-shadow .2s; }\n.category-tile:hover { background: #d4f35d; transform: translateY(-4px); box-shadow: 0 9px 22px #17203314; }\n.category-art { display: grid; place-items: center; width: 100%; height: 155px; margin-bottom: 18px; }\n.category-art app-product-image { width: 155px; }\n.category-art > span { font-size: 75px; }\n.category-tile h3 { margin: 0; font-size: 20px; font-weight: 600; letter-spacing: -.4px; }\n.category-tile small { margin-top: 7px; color: #495530; font-size: 13px; }\n.brand-filters .clear-filters { border: 0; background: transparent; text-decoration: underline; text-underline-offset: 3px; font-size: 13px; }\n.advantages { padding: 64px max(8vw,60px); background: #eeedf7; }\n.advantages .benefits { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); background: transparent; padding: 36px 0 20px; gap: 24px; }\n.advantages .benefits > div { min-width: 0; align-items: flex-start; grid-column: auto; }\n.advantages .benefits > div > span:first-child { font-size: 25px; }\n.advantages .benefits b { font-size: 16px; }\n.advantages .benefits small { font-size: 14px; line-height: 1.5; }\n.advantages-note { margin: 16px 0 0; color: #606776; font-size: 13px; line-height: 1.5; }\n@media(max-width:900px) {\n  .advantages .benefits { grid-template-columns: repeat(2,minmax(0,1fr)); }\n  .topbar { padding-left: 24px; padding-right: 24px; }\n  .topbar nav { gap: 20px; }\n}\n@media(max-width:720px) {\n  .topbar { height: auto; min-height: 105px; padding: 12px 20px 0; flex-wrap: wrap; gap: 8px; }\n  .topbar nav { display: flex; order: 3; width: 100%; justify-content: space-between; gap: 16px; overflow-x: auto; }\n  .topbar nav a { flex-shrink: 0; font-size: 14px; padding: 10px 0 14px; }\n  #inicio, #categorias, #tienda, #beneficios { scroll-margin-top: 128px; }\n  .category-directory, .advantages { padding: 48px 20px; }\n  .category-tiles { grid-template-columns: repeat(2,minmax(0,1fr)); gap: 12px; margin-top: 26px; }\n  .category-tile { padding: 18px 10px; border-radius: 12px; }\n  .category-art { height: 120px; }\n  .category-art app-product-image { width: 120px; }\n  .category-art { margin-bottom: 14px; }\n  .category-tile h3 { font-size: 18px; }\n  .advantages .benefits { grid-template-columns: 1fr; gap: 26px; padding-top: 28px; }\n}\n@media(prefers-reduced-motion:reduce) {\n  .category-tile { transition: none; }\n  .category-tile:hover { transform: none; }\n}\n\n/* Rounded heading typography: avoid the tight tracking of the previous serif font. */\n.hero h1,.section-heading h2,.checkout-modal h2{font-weight:800;letter-spacing:-.035em;line-height:1.08}\n.detail-copy h2{font-weight:800;letter-spacing:-.025em;line-height:1.15}\n.brand{letter-spacing:-.04em}\n\n/* Native transparent photos: one consistent visible-product frame in every context. */\n.product-image { background: #f4f5f7 !important; }\n.product-image app-product-image { width: min(85%, 210px); }\n.mini-image app-product-image { width: 64px; }\n.detail-photo app-product-image { width: min(90%, 310px); }\n.thumbnails button { display: grid; place-items: center; }\n.thumbnails app-product-image { width: 53px; }\n@media(max-width:720px) {\n  .product-image app-product-image { width: min(92%, 156px); }\n  .detail-photo app-product-image { width: min(90%, 225px); }\n}\n"] }]
    }], () => [], { refreshSession: [{
            type: HostListener,
            args: ['window:focus']
        }, {
            type: HostListener,
            args: ['window:pageshow']
        }], productDialog: [{
            type: ViewChild,
            args: ['productDialog']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "app/app.component.ts", lineNumber: 24 }); })();
//# sourceMappingURL=app.component.js.map
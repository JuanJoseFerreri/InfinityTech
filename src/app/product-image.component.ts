import { Component, computed, input, output } from '@angular/core';
import { IMAGE_FRAMES } from './product-image-data';
import { fitProductImage } from './product-image-layout';

/** Fits the visible product, rather than the PNG's often oversized transparent canvas. */
@Component({
  selector: 'app-product-image',
  standalone: true,
  templateUrl: './product-image.component.html',
  styleUrl: './product-image.component.css'
})
export class ProductImageComponent {
  readonly src = input.required<string>();
  readonly alt = input('');
  readonly loading = input<'lazy' | 'eager'>('lazy');
  readonly failed = output<string>();
  readonly frame = computed(() => fitProductImage(IMAGE_FRAMES[this.src()]));
}

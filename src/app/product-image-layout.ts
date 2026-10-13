import { ImageFrame } from './product-image-data';

export function fitProductImage(image?: ImageFrame) {
  if (!image) return { width: 90, height: 90, left: 5, top: 5 };
  const [left, top, right, bottom] = image.bounds;
  const scale = 90 / Math.max(right - left, bottom - top);
  return {
    width: image.width * scale, height: image.height * scale,
    left: 50 - (left + right) / 2 * scale,
    top: 50 - (top + bottom) / 2 * scale
  };
}

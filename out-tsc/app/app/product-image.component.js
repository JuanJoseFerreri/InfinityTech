import { Component, computed, input, output } from '@angular/core';
import { IMAGE_FRAMES } from './product-image-data';
import { fitProductImage } from './product-image-layout';
import * as i0 from "@angular/core";
/** Fits the visible product, rather than the PNG's often oversized transparent canvas. */
export class ProductImageComponent {
    src = input.required(...(ngDevMode ? [{ debugName: "src" }] : []));
    alt = input('', ...(ngDevMode ? [{ debugName: "alt" }] : []));
    loading = input('lazy', ...(ngDevMode ? [{ debugName: "loading" }] : []));
    failed = output();
    frame = computed(() => fitProductImage(IMAGE_FRAMES[this.src()]), ...(ngDevMode ? [{ debugName: "frame" }] : []));
    static ɵfac = function ProductImageComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ProductImageComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProductImageComponent, selectors: [["app-product-image"]], inputs: { src: [1, "src"], alt: [1, "alt"], loading: [1, "loading"] }, outputs: { failed: "failed" }, decls: 1, vars: 11, consts: [["decoding", "async", "referrerpolicy", "no-referrer", 3, "error", "src", "alt", "loading"]], template: function ProductImageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "img", 0);
            i0.ɵɵdomListener("error", function ProductImageComponent_Template_img_error_0_listener() { return ctx.failed.emit(ctx.src()); });
            i0.ɵɵdomElementEnd();
        } if (rf & 2) {
            i0.ɵɵstyleProp("width", ctx.frame().width, "%")("height", ctx.frame().height, "%")("left", ctx.frame().left, "%")("top", ctx.frame().top, "%");
            i0.ɵɵdomProperty("src", ctx.src(), i0.ɵɵsanitizeUrl)("alt", ctx.alt())("loading", ctx.loading());
        } }, styles: ["[_nghost-%COMP%] { display: block; position: relative; aspect-ratio: 1; overflow: hidden; }\n    img[_ngcontent-%COMP%] { position: absolute; display: block; max-width: none; object-fit: contain; }"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductImageComponent, [{
        type: Component,
        args: [{ selector: 'app-product-image', standalone: true, template: `<img [src]="src()" [alt]="alt()" [loading]="loading()" decoding="async"
    referrerpolicy="no-referrer" [style.width.%]="frame().width"
    [style.height.%]="frame().height" [style.left.%]="frame().left"
    [style.top.%]="frame().top" (error)="failed.emit(src())">`, styles: ["\n    :host { display: block; position: relative; aspect-ratio: 1; overflow: hidden; }\n    img { position: absolute; display: block; max-width: none; object-fit: contain; }\n  "] }]
    }], null, { src: [{ type: i0.Input, args: [{ isSignal: true, alias: "src", required: true }] }], alt: [{ type: i0.Input, args: [{ isSignal: true, alias: "alt", required: false }] }], loading: [{ type: i0.Input, args: [{ isSignal: true, alias: "loading", required: false }] }], failed: [{ type: i0.Output, args: ["failed"] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProductImageComponent, { className: "ProductImageComponent", filePath: "app/product-image.component.ts", lineNumber: 18 }); })();
//# sourceMappingURL=product-image.component.js.map
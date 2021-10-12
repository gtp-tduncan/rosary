export class ElementBoundaryUtils {

  constructor() {
    console.log(`ElementBoundaryService constructor`);
  }

  styleWindowBase(elementRect: DOMRect, widthMargin?: number, heightMargin?: number): string {
    return this.style(elementRect, this.windowRect, widthMargin, heightMargin);
  }

  style(elementRect: DOMRect, viewRect: DOMRect, widthMargin?: number, heightMargin?: number): string {
    const validatedRect = this.validateRect(elementRect, viewRect, widthMargin, heightMargin);
    return (validatedRect?.hasChanges)
      ? this.styleWorker(validatedRect.elementRect)
      : '';
  }

  validateRectWindowBase(elementRect: DOMRect, widthMargin?: number, heightMargin?: number): ValidatedRect {
    return this.validateRect(elementRect, this.windowRect, widthMargin, heightMargin);
  }

  validateRect(elementRect: DOMRect, viewRect: DOMRect, widthMargin?: number, heightMargin?: number): ValidatedRect {
    if (elementRect.left >= viewRect.left && elementRect.top >= viewRect.top
      && elementRect.right <= viewRect.right && elementRect.bottom <= viewRect.bottom) {
        return {
          hasChanges: false,
          elementRect: undefined
        };
    }

    const useWidthMargin = (widthMargin || 5);
    const useHeightMargin = (heightMargin || 5);
    const newLeft = (elementRect.left >= viewRect.left) ? elementRect.left : viewRect.left + useWidthMargin;
    const newTop = (elementRect.top >= viewRect.top) ? elementRect.top : viewRect.top + useHeightMargin;
    const newRight = this.verifyValue(elementRect.right, viewRect.right, useWidthMargin);
    const newBottom = this.verifyValue(elementRect.bottom, viewRect.bottom, useHeightMargin);
    const newWidth = newRight - newLeft;
    const newHeight = newBottom - newTop;
    const validateRect = new DOMRect(newLeft, newTop, newWidth, newHeight);

    return {
      hasChanges: true,
      elementRect: validateRect,
      elementStyle: this.styleWorker(validateRect)
    };
  }

  private verifyValue(elementValue: number, viewValue: number, marginOffset: number): number {
    if (elementValue <= viewValue) {
      return elementValue;
    }
    return viewValue - marginOffset;
  }

  private get windowRect(): DOMRect {
    return new DOMRect(0, 0, window.innerWidth, window.innerHeight);
  }

  private styleWorker(validatedRect: DOMRect): string {
    return `max-width: ${Math.trunc(validatedRect.width)}; max-height: ${Math.trunc(validatedRect.height)};`;
  }

}

export interface ValidatedRect {
  hasChanges: boolean;
  elementRect?: DOMRect;
  elementStyle?: string;
}

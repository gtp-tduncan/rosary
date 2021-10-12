import { TestBed } from '@angular/core/testing';

import { ElementBoundaryUtils } from './element-boundary-utils';

describe('ElementBoundaryUtils', () => {
  let elementBoundaryUtils: ElementBoundaryUtils;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    elementBoundaryUtils = new ElementBoundaryUtils();
  });

  it('should indicate no changes needed to rectangle', () => {
    expect(elementBoundaryUtils).toBeTruthy();
    const x = 10, y = 5, width = 200, height = 150;
    const viewX = 0, viewY = 0, viewWidth = 300, viewHeight = 200;

    const rect = new DOMRect(x, y, width, height);
    const viewRect = new DOMRect(viewX, viewY, viewWidth, viewHeight);

    const response = elementBoundaryUtils.validateRect(rect, viewRect);

    expect(response.hasChanges).toBeFalse();
    expect(response.elementRect).toBeFalsy();
  });

  it('should indicate rectangle changed - left of element', () => {
    expect(elementBoundaryUtils).toBeTruthy();
    const x = 10, y = 5, width = 200, height = 150;
    const rect = new DOMRect(x, y, width, height);

    const viewX = 20, viewY = 0, viewWidth = 300, viewHeight = 200;
    const viewRect = new DOMRect(viewX, viewY, viewWidth, viewHeight);

    const expectedX = viewX + 5, expectedY = y, expectedWidth = rect.right - expectedX, expectedHeight = height;

    const response = elementBoundaryUtils.validateRect(rect, viewRect);

    expect(response.hasChanges).toBeTruthy()
    expect(response.elementRect).toBeTruthy();
    expect(response.elementRect.x).toEqual(expectedX);
    expect(response.elementRect.y).toEqual(expectedY);
    expect(response.elementRect.width).toEqual(expectedWidth);
    expect(response.elementRect.height).toEqual(expectedHeight);
    expect(response.elementRect.left).toEqual(expectedX);
    expect(response.elementRect.top).toEqual(expectedY);
    expect(response.elementRect.right).toEqual(expectedX + expectedWidth);
    expect(response.elementRect.bottom).toEqual(expectedY + expectedHeight);
  });

  it('should indicate rectangle changed - right of element', () => {
    expect(elementBoundaryUtils).toBeTruthy();
    const x = 10, y = 5, width = 400, height = 150;
    const rect = new DOMRect(x, y, width, height);

    const viewX = 0, viewY = 0, viewWidth = 300, viewHeight = 200;
    const viewRect = new DOMRect(viewX, viewY, viewWidth, viewHeight);

    const expectedX = x, expectedY = y, expectedWidth = viewRect.right - expectedX - 5, expectedHeight = height;

    const response = elementBoundaryUtils.validateRect(rect, viewRect);

    expect(response.hasChanges).toBeTruthy()
    expect(response.elementRect).toBeTruthy();
    expect(response.elementRect.x).toEqual(expectedX);
    expect(response.elementRect.y).toEqual(expectedY);
    expect(response.elementRect.width).toEqual(expectedWidth);
    expect(response.elementRect.height).toEqual(expectedHeight);
    expect(response.elementRect.left).toEqual(expectedX);
    expect(response.elementRect.top).toEqual(expectedY);
    expect(response.elementRect.right).toEqual(expectedX + expectedWidth);
    expect(response.elementRect.bottom).toEqual(expectedY + expectedHeight);
  });

  it('should indicate rectangle changed - top of element', () => {
    expect(elementBoundaryUtils).toBeTruthy();
    const x = 10, y = 5, width = 200, height = 150;
    const rect = new DOMRect(x, y, width, height);

    const viewX = 0, viewY = 10, viewWidth = 300, viewHeight = 200;
    const viewRect = new DOMRect(viewX, viewY, viewWidth, viewHeight);

    const expectedX = x, expectedY = viewY + 5, expectedWidth = width, expectedHeight = rect.bottom - expectedY;

    const response = elementBoundaryUtils.validateRect(rect, viewRect);

    expect(response.hasChanges).toBeTruthy()
    expect(response.elementRect).toBeTruthy();
    expect(response.elementRect.x).toEqual(expectedX);
    expect(response.elementRect.y).toEqual(expectedY);
    expect(response.elementRect.width).toEqual(expectedWidth);
    expect(response.elementRect.height).toEqual(expectedHeight);
    expect(response.elementRect.left).toEqual(expectedX);
    expect(response.elementRect.top).toEqual(expectedY);
    expect(response.elementRect.right).toEqual(expectedX + expectedWidth);
    expect(response.elementRect.bottom).toEqual(expectedY + expectedHeight);
  });

  it('should indicate rectangle changed - bottom of element', () => {
    expect(elementBoundaryUtils).toBeTruthy();
    const x = 10, y = 5, width = 200, height = 350;
    const rect = new DOMRect(x, y, width, height);

    const viewX = 0, viewY = 0, viewWidth = 300, viewHeight = 200;
    const viewRect = new DOMRect(viewX, viewY, viewWidth, viewHeight);

    const expectedX = x, expectedY = y, expectedWidth = width, expectedHeight = viewRect.bottom - expectedY - 5;

    const response = elementBoundaryUtils.validateRect(rect, viewRect);

    expect(response.hasChanges).toBeTruthy()
    expect(response.elementRect).toBeTruthy();
    expect(response.elementRect.x).toEqual(expectedX);
    expect(response.elementRect.y).toEqual(expectedY);
    expect(response.elementRect.width).toEqual(expectedWidth);
    expect(response.elementRect.height).toEqual(expectedHeight);
    expect(response.elementRect.left).toEqual(expectedX);
    expect(response.elementRect.top).toEqual(expectedY);
    expect(response.elementRect.right).toEqual(expectedX + expectedWidth);
    expect(response.elementRect.bottom).toEqual(expectedY + expectedHeight);
  });

});

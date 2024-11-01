// cypress/support/index.d.ts
/// <reference types="cypress" />

interface WindowDimensions {
  width: number;
  height: number;
  x: number;
  y: number;
}

interface IconPos {
  x: number;
  y: number;
}

interface DragOptions {
  offset: 'width' | 'height' | 'both';
}

declare namespace Cypress {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Chainable<Subject> {
    getDimensions(
      options?: Partial<TypeOptions>,
    ): Chainable<{ width: number; height: number; x: number; y: number }>;

    dragWindow(
      deltaX: number,
      deltaY: number,
      dragOptions?: Partial<DragOptions>,
      options?: Partial<TypeOptions>,
    ): Chainable<{
      initial: WindowDimensions;
      final: WindowDimensions;
    }>;

    getIconRowCol(options?: Partial<TypeOptions>): Chainable<{ row: number; col: number }>;

    dragIcon(
      deltaX: number,
      deltaY: number,
      options?: Partial<TypeOptions>,
    ): Chainable<{ initial: IconPos; final: IconPos }>;
  }
}

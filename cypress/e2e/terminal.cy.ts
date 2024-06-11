/* eslint-disable no-relative-import-paths/no-relative-import-paths */
import { TASKBAR_HEIGHT } from '../../src/themes';

const VIEWPORT_WIDTH = 1000;
const VIEWPORT_HEIGHT = 660;
const MINIMUM_WIDTH = 600;
const MINIMUM_HEIGHT = 300;
const DEFAULT_WIDTH = 800;
const DEFAULT_HEIGHT = 400;
describe(
  'Terminal',
  {
    viewportWidth: VIEWPORT_WIDTH,
    viewportHeight: VIEWPORT_HEIGHT,
  },
  () => {
    beforeEach(() => {
      cy.visit('/');
      cy.get('[data-testid="start-button"]').click();
      cy.get('[data-testid="start-button"]').as('startButton');
      cy.get('[data-testid="window-header"]').as('windowHeader');
      cy.get('[data-testid="window"]').as('myWindow');
      cy.get('[data-testid="taskbar-entry"]').as('taskbarEntry');
      cy.get('[data-testid="window-close"]').as('closeButton');
      cy.get('[data-testid="window-maximize"]').as('maximizeButton');
      cy.get('[data-testid="window-minimize"]').as('minimizeButton');
      cy.get('[data-testid="resize-left"]').as('leftBar');
      cy.get('[data-testid="resize-right"]').as('rightBar');
      cy.get('[data-testid="resize-top"]').as('topBar');
      cy.get('[data-testid="resize-bottom"]').as('bottomBar');
      cy.get('[data-testid="resize-top-left"]').as('topLeftBar');
      cy.get('[data-testid="resize-top-right"]').as('topRightBar');
      cy.get('[data-testid="resize-bottom-left"]').as('bottomLeftBar');
      cy.get('[data-testid="resize-bottom-right"]').as('bottomRightBar');
    });
    it('Should open with default width and height', () => {
      cy.get('@startButton').click();
      cy.get('@myWindow')
        .getDimensions()
        .then(({ x, y, width, height }) => {
          expect(width).equal(DEFAULT_WIDTH);
          expect(height).equal(DEFAULT_HEIGHT);
          expect(x + width).to.be.lessThan(VIEWPORT_WIDTH + 1);
          expect(y + height).to.be.lessThan(VIEWPORT_HEIGHT + 1 - TASKBAR_HEIGHT);
        });
    });
  },
);

/* eslint-disable no-relative-import-paths/no-relative-import-paths */
import { TASKBAR_HEIGHT } from '../../src/themes';

const VIEWPORT_WIDTH = 1000;
const VIEWPORT_HEIGHT = 660;

describe(
  'Icon Drag',
  {
    viewportWidth: VIEWPORT_WIDTH,
    viewportHeight: VIEWPORT_HEIGHT,
  },
  () => {
    beforeEach(() => {
      cy.visit('/');
      cy.get('[data-testid="desktop"]').rightclick();
      cy.get('[data-testid="new-file"]').click();
      cy.get('[data-testid="NewFile"]').as('icon');
    });
    it.only('should drag and drop within bounds', () => {
      const deltaX = 300;
      const deltaY = 300;

      cy.get('@icon').then(($el) => {
        const rect = $el[0].getBoundingClientRect();
        const startX = rect.left + rect.width / 2;
        const startY = rect.top + rect.height / 2;
        const endX = startX + deltaX;
        const endY = startY + deltaY;

        cy.get('@icon')
          .trigger('mousedown', { which: 1 })
          .trigger('mousemove', { clientX: deltaX, clientY: deltaY })
          .trigger('mousemove', { clientX: deltaX + 10, clientY: deltaY + 10 }) // additional move
          .trigger('mouseup', { force: true });
      });
    });
  },
);

/* eslint-disable no-relative-import-paths/no-relative-import-paths */
import { TASKBAR_HEIGHT } from '../../src/themes';

const VIEWPORT_WIDTH = 1000;
const VIEWPORT_HEIGHT = 660;
const MINIMUM_WIDTH = 300;
const MINIMUM_HEIGHT = 300;

describe(
  'Window',
  {
    viewportWidth: VIEWPORT_WIDTH,
    viewportHeight: VIEWPORT_HEIGHT,
  },
  () => {
    beforeEach(() => {
      cy.visit('/');
      cy.get('[data-testid="desktop"]').rightclick();
      cy.get('[data-testid="new-file"]').click();
      cy.get('[data-testid="NewFile"]').dblclick();
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
    it('Should open when clicking on the desktop icon', () => {
      cy.get('@myWindow').should('be.visible');
    });
    it('Should not appear partially outside the viewport', () => {
      cy.get('@myWindow')
        .getDimensions()
        .then(({ width, height, x, y }) => {
          expect(x).to.be.greaterThan(-1);
          expect(y).to.be.greaterThan(-1);
          expect(y + height).to.be.lessThan(1 + VIEWPORT_HEIGHT - TASKBAR_HEIGHT);
          expect(x + width).to.be.lessThan(1 + VIEWPORT_WIDTH);
        });
    });
    it('Should have a taskbar entry', () => {
      cy.get('@taskbarEntry').should('be.visible');
    });
    it('Should close the window and taskbar when closing', () => {
      cy.get('@closeButton').click();
      cy.get('@myWindow').should('not.exist');
      cy.get('@taskbarEntry').should('not.exist');
    });
    it('Should be draggable', () => {
      cy.get('@windowHeader')
        .dragWindow(50, -50)
        .then(({ initial, final }) => {
          expect(final).to.deep.equal({ ...initial, x: initial.x + 50, y: initial.y - 50 });
        });
    });
    it('should not be draggable past the viewport boundaries', () => {
      cy.get('@windowHeader')
        .dragWindow(-1000, 0)
        .then(({ initial, final }) => {
          expect(final).to.deep.equal({ ...initial, x: 0 });
        });

      cy.get('@windowHeader')
        .dragWindow(0, -1000)
        .then(({ initial, final }) => {
          expect(final).to.deep.equal({ ...initial, y: 0 });
        });

      cy.get('@windowHeader')
        .dragWindow(1000, 0)
        .then(({ initial, final }) => {
          expect(final).to.deep.equal({ ...initial, x: VIEWPORT_WIDTH - initial.width });
        });

      cy.get('@windowHeader')
        .dragWindow(0, 1000)
        .then(({ initial, final }) => {
          expect(final).to.deep.equal({
            ...initial,
            y: VIEWPORT_HEIGHT - initial.height,
          });
        });
    });
    it('Should be resizeable from the left', () => {
      cy.get('@leftBar')
        .dragWindow(-50, 0)
        .then(({ initial, final }) => {
          expect(final).to.deep.equal({ ...initial, x: initial.x - 50, width: initial.width + 50 });
        });

      // Should not be resizeable past the viewport boundaries
      cy.get('@leftBar')
        .dragWindow(-1000, 0)
        .then(({ initial, final }) => {
          expect(final).to.deep.equal({ ...initial, x: 0, width: initial.width + initial.x });
        });

      // Should not be resizeable past the minimum width
      cy.get('@leftBar')
        .dragWindow(1000, 0)
        .then(({ initial, final }) => {
          expect(final).to.deep.equal({ ...initial, x: final.x, width: MINIMUM_WIDTH });
        });

      // Up and down doesn't change the width
      cy.get('@leftBar')
        .dragWindow(0, 1000)
        .then(({ initial, final }) => {
          expect(final).to.deep.equal({ ...initial });
        });
    });
    it('Should be resizeable from the right', () => {
      cy.get('@rightBar')
        .dragWindow(50, 0, { offset: 'width' })
        .then(({ initial, final }) => {
          expect(final).to.deep.equal({ ...initial, width: initial.width + 50 });
        });

      // Should not be resizeable past the viewport boundaries
      cy.get('@rightBar')
        .dragWindow(300, 0, { offset: 'width' })
        .then(({ initial, final }) => {
          expect(final).to.deep.equal({ ...initial, width: VIEWPORT_WIDTH - initial.x });
        });

      cy.get('@windowHeader').dragWindow(-10, 0);

      // Should not be resizeable past the minimum width
      cy.get('@rightBar')
        .dragWindow(-2000, 0, { offset: 'width' })
        .then(({ initial, final }) => {
          expect(final).to.deep.equal({ ...initial, x: final.x, width: MINIMUM_WIDTH });
        });

      // Up and down doesn't change the width
      cy.get('@rightBar')
        .dragWindow(0, 1000, { offset: 'width' })
        .then(({ initial, final }) => {
          expect(final).to.deep.equal({ ...initial });
        });
    });

    it('Should be resizeable from the top', () => {
      cy.get('@topBar')
        .dragWindow(0, -50)
        .then(({ initial, final }) => {
          expect(final).to.deep.equal({
            ...initial,
            y: initial.y - 50,
            height: initial.height + 50,
          });
        });

      // Should not be resizeable past the viewport boundaries
      cy.get('@topBar')
        .dragWindow(0, -1000)
        .then(({ initial, final }) => {
          expect(final).to.deep.equal({ ...initial, y: 0, height: initial.height + initial.y });
        });

      // Should not be resizeable past the minimum height
      cy.get('@topBar')
        .dragWindow(0, 1000)
        .then(({ initial, final }) => {
          expect(final).to.deep.equal({ ...initial, y: final.y, height: MINIMUM_HEIGHT });
        });

      // Left and right doesn't change the height
      cy.get('@topBar')
        .dragWindow(1000, 0)
        .then(({ initial, final }) => {
          expect(final).to.deep.equal({ ...initial });
        });
    });

    it('Should be resizeable from the bottom', () => {
      cy.get('@bottomBar')
        .dragWindow(0, 50, { offset: 'height' })
        .then(({ initial, final }) => {
          expect(final).to.deep.equal({ ...initial, height: initial.height + 50 });
        });

      // Should not be resizeable past the viewport boundaries
      cy.get('@bottomBar')
        .dragWindow(0, 300, { offset: 'height' })
        .then(({ initial, final }) => {
          expect(final).to.deep.equal({ ...initial, height: VIEWPORT_HEIGHT - initial.y });
        });

      cy.get('@windowHeader').dragWindow(0, -10);

      // Should not be resizeable past the minimum height
      cy.get('@bottomBar')
        .dragWindow(0, -2000, { offset: 'height' })
        .then(({ initial, final }) => {
          expect(final).to.deep.equal({ ...initial, y: final.y, height: MINIMUM_HEIGHT });
        });

      // Left and right doesn't change the height
      cy.get('@bottomBar')
        .dragWindow(1000, 0, { offset: 'height' })
        .then(({ initial, final }) => {
          expect(final).to.deep.equal({ ...initial });
        });
    });

    it('Should be resizeable from the top left', () => {
      cy.get('@topLeftBar')
        .dragWindow(-50, -50)
        .then(({ initial, final }) => {
          expect(final).to.deep.equal({
            x: initial.x - 50,
            y: initial.y - 50,
            width: initial.width + 50,
            height: initial.height + 50,
          });
        });

      // Should not be resizeable past the viewport boundaries
      cy.get('@topLeftBar')
        .dragWindow(-1000, -1000)
        .then(({ initial, final }) => {
          expect(final).to.deep.equal({
            x: 0,
            y: 0,
            width: initial.width + initial.x,
            height: initial.height + initial.y,
          });
        });

      // Should not be resizeable past the minimum width and height
      cy.get('@topLeftBar')
        .dragWindow(1000, 1000)
        .then(({ final }) => {
          expect(final).to.deep.equal({
            ...final,
            width: MINIMUM_WIDTH,
            height: MINIMUM_HEIGHT,
          });
        });
    });

    it('Should be resizeable from the top right', () => {
      cy.get('@topRightBar')
        .dragWindow(50, -50, { offset: 'width' })
        .then(({ initial, final }) => {
          expect(final).to.deep.equal({
            ...initial,
            width: initial.width + 50,
            y: initial.y - 50,
            height: initial.height + 50,
          });
        });

      // Should not be resizeable past the viewport boundaries
      cy.get('@topRightBar')
        .dragWindow(300, -1000, { offset: 'width' })
        .then(({ initial, final }) => {
          expect(final).to.deep.equal({
            ...initial,
            width: VIEWPORT_WIDTH - initial.x,
            y: 0,
            height: initial.height + initial.y,
          });
        });

      cy.get('@windowHeader').dragWindow(-10, 0);

      // Should not be resizeable past the minimum width and height
      cy.get('@topRightBar')
        .dragWindow(-2000, 1000, { offset: 'width' })
        .then(({ final }) => {
          expect(final).to.deep.equal({
            ...final,
            width: MINIMUM_WIDTH,
            height: MINIMUM_HEIGHT,
          });
        });
    });

    it('Should be resizeable from the bottom left', () => {
      cy.get('@bottomLeftBar')
        .dragWindow(-50, 50, { offset: 'height' })
        .then(({ initial, final }) => {
          expect(final).to.deep.equal({
            ...initial,
            x: initial.x - 50,
            width: initial.width + 50,
            height: initial.height + 50,
          });
        });

      // Should not be resizeable past the viewport boundaries
      cy.get('@bottomLeftBar')
        .dragWindow(-1000, 300, { offset: 'height' })
        .then(({ initial, final }) => {
          expect(final).to.deep.equal({
            ...initial,
            x: 0,
            width: initial.width + initial.x,
            height: VIEWPORT_HEIGHT - initial.y,
          });
        });

      cy.get('@windowHeader').dragWindow(0, -10);

      // Should not be resizeable past the minimum width and height
      cy.get('@bottomLeftBar')
        .dragWindow(1000, -2000, { offset: 'height' })
        .then(({ final }) => {
          expect(final).to.deep.equal({
            ...final,
            x: final.x,
            width: MINIMUM_WIDTH,
            height: MINIMUM_HEIGHT,
          });
        });
    });

    it('Should be resizeable from the bottom right', () => {
      cy.get('@bottomRightBar')
        .dragWindow(50, 50, { offset: 'both' })
        .then(({ initial, final }) => {
          expect(final).to.deep.equal({
            ...initial,
            width: initial.width + 50,
            height: initial.height + 50,
          });
        });

      // Should not be resizeable past the viewport boundaries
      cy.get('@bottomRightBar')
        .dragWindow(300, 300, { offset: 'both' })
        .then(({ initial, final }) => {
          expect(final).to.deep.equal({
            ...initial,
            width: VIEWPORT_WIDTH - initial.x,
            height: VIEWPORT_HEIGHT - initial.y,
          });
        });

      cy.get('@windowHeader').dragWindow(-10, -10);

      // Should not be resizeable past the minimum width and height
      cy.get('@bottomRightBar')
        .dragWindow(-2000, -2000, { offset: 'both' })
        .then(({ final }) => {
          expect(final).to.deep.equal({
            ...final,
            width: MINIMUM_WIDTH,
            height: MINIMUM_HEIGHT,
          });
        });
    });

    it('Should maximize when double clicking header or using the maximize button', () => {
      cy.get('@windowHeader')
        .dblclick()
        .then(() => {
          cy.wait(200).then(() => {
            cy.get('@myWindow')
              .getDimensions()
              .then(({ width, height, x, y }) => {
                expect(width).equal(VIEWPORT_WIDTH);
                expect(height).equal(VIEWPORT_HEIGHT - TASKBAR_HEIGHT);
                expect(x).equal(0);
                expect(y).equal(0);
              });
          });
        });

      // unmaximize
      cy.get('@windowHeader')
        .dblclick()
        .then(() => {
          cy.wait(200).then(() => {
            cy.get('@myWindow')
              .getDimensions()
              .then(({ width, height, x, y }) => {
                expect(x).to.be.greaterThan(-1);
                expect(y).to.be.greaterThan(-1);
                expect(y + height).to.be.lessThan(1 + VIEWPORT_HEIGHT - TASKBAR_HEIGHT);
                expect(x + width).to.be.lessThan(1 + VIEWPORT_WIDTH);
              });
          });
        });

      // Do it again, but this time with the maximize button
      cy.get('@maximizeButton')
        .click()
        .then(() => {
          cy.wait(200).then(() => {
            cy.get('@myWindow')
              .getDimensions()
              .then(({ width, height, x, y }) => {
                expect(width).equal(VIEWPORT_WIDTH);
                expect(height).equal(VIEWPORT_HEIGHT - TASKBAR_HEIGHT);
                expect(x).equal(0);
                expect(y).equal(0);
              });
          });
        });

      cy.get('@maximizeButton')
        .click()
        .then(() => {
          cy.wait(200).then(() => {
            cy.get('@myWindow')
              .getDimensions()
              .then(({ width, height, x, y }) => {
                expect(x).to.be.greaterThan(-1);
                expect(y).to.be.greaterThan(-1);
                expect(y + height).to.be.lessThan(1 + VIEWPORT_HEIGHT - TASKBAR_HEIGHT);
                expect(x + width).to.be.lessThan(1 + VIEWPORT_WIDTH);
              });
          });
        });
    });

    it('Should maximize to viewport width from any position, and remember unmaximized position', () => {
      cy.get('@windowHeader').dragWindow(100, 100).get('@leftBar').dragWindow(-100, 0);
      cy.get('@myWindow')
        .getDimensions()
        .then(({ width: initialWidth, height: initialHeight }) => {
          cy.get('@maximizeButton')
            .click()
            .wait(200)
            .get('@maximizeButton')
            .click()
            .wait(200)
            .get('@myWindow')
            .getDimensions()
            .then(({ width, height }) => {
              expect(width).equal(initialWidth);
              expect(height).equal(initialHeight);
            });
        });
    });

    it('should reset unmaximized position if the user manually sets it to be viewport size or bigger', () => {
      cy.get('@myWindow')
        .getDimensions()
        .then(({ width: initialWidth, height: initialHeight }) => {
          cy.get('@windowHeader')
            .dragWindow(-1000, -1000)
            .get('@bottomRightBar')
            .dragWindow(1000, 1000)
            .get('@maximizeButton')
            .click()
            .wait(200)
            .get('@maximizeButton')
            .click()
            .wait(200)
            .get('@myWindow')
            .getDimensions()
            .then(({ width, height }) => {
              expect(width).equal(initialWidth);
              expect(height).equal(initialHeight);
            });
        });
    });

    it('should hide and restore the window when toggling minimize', () => {
      cy.get('@minimizeButton').click();
      cy.get('@myWindow').should('not.be.visible');
      cy.get('@taskbarEntry').click();
      cy.get('@myWindow').should('be.visible');
    });

    it('should remember the unminimized position and size when restoring from minimized', () => {
      cy.get('@windowHeader').dragWindow(100, -100).get('@leftBar').dragWindow(-100, 0);
      cy.get('@myWindow')
        .getDimensions()
        .then(({ x, y, width, height }) => {
          cy.get('@minimizeButton').click();
          cy.wait(200);
          cy.get('@taskbarEntry').click();
          cy.wait(200);
          cy.get('@myWindow')
            .getDimensions()
            .then(({ x: newX, y: newY, width: newWidth, height: newHeight }) => {
              expect(newX).equal(x);
              expect(newY).equal(y);
              expect(newWidth).equal(width);
              expect(newHeight).equal(height);
            });
        });
    });

    it('should open in opened state even if closed in a minimized state', () => {
      cy.get('@myWindow')
        .getDimensions()
        .then(({ x: initialX, y: initialY, width: initialWidth, height: initialHeight }) => {
          cy.get('@minimizeButton').click();
          cy.wait(200);
          cy.get('@taskbarEntry').rightclick();
          cy.get('[data-testid="close"]').click();
          cy.get('[data-testid="NewFile"]').dblclick();
          cy.get('@myWindow').should('be.visible');
          cy.get('@myWindow')
            .getDimensions()
            .then(({ x: newX, y: newY, width: newWidth, height: newHeight }) => {
              expect(newX).equal(initialX);
              expect(newY).equal(initialY);
              expect(newWidth).equal(initialWidth);
              expect(newHeight).equal(initialHeight);
            });
        });
    });
  },
);

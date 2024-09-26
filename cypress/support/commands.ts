/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// cypress/support/commands.ts

Cypress.Commands.add('getDimensions', { prevSubject: 'element' }, (subject: JQuery) => {
  const transform = subject.css('transform');
  const width = subject.outerWidth();
  const height = subject.outerHeight();
  if (transform === 'none') {
    return cy.wrap({ width, height, x: 0, y: 0 });
  }
  const matrixValues = transform.match(/matrix.*\((.*)\)/)[1].split(', ');
  const x = Number.parseFloat(matrixValues[4]);
  const y = Number.parseFloat(matrixValues[5]);
  return cy.wrap({ width, height, x, y });
});

Cypress.Commands.add(
  'dragWindow',
  { prevSubject: 'element' },
  (subject, deltaX, deltaY, dragOptions?) => {
    const myWindow = '[data-testid="window"]';
    cy.wrap(subject).then(($header) => {
      cy.get(myWindow)
        .getDimensions()
        .then(({ width: initialWidth, height: initialHeight, x: initialX, y: initialY }) => {
          const widthOffset =
            dragOptions?.offset === 'width' || dragOptions?.offset === 'both' ? initialWidth : 0;
          const heightOffset =
            dragOptions?.offset === 'height' || dragOptions?.offset === 'both' ? initialHeight : 0;
          const newX = initialX + deltaX + widthOffset;
          const newY = initialY + deltaY + heightOffset;

          cy.wrap($header)
            .trigger('mousedown', { which: 1, clientX: initialX, clientY: initialY })
            .trigger('mousemove', { clientX: newX, clientY: newY })
            .trigger('mouseup', { force: true });

          cy.get(myWindow)
            .getDimensions()
            .then(({ width, height, x: finalX, y: finalY }) => {
              return cy.wrap({
                initial: { width: initialWidth, height: initialHeight, x: initialX, y: initialY },
                final: { width, height, x: finalX, y: finalY },
              });
            });
        });
    });
  },
);

Cypress.Commands.add('getIconRowCol', { prevSubject: 'element' }, (subject: JQuery) => {
  const element = subject[0];
  const gridColumnStart = window.getComputedStyle(element).getPropertyValue('grid-column-start');
  const gridRowStart = window.getComputedStyle(element).getPropertyValue('grid-row-start');
  return cy.wrap({
    row: Number.parseInt(gridRowStart, 10),
    col: Number.parseInt(gridColumnStart, 10),
  });
});

Cypress.Commands.add('dragIcon', { prevSubject: 'element' }, (subject, deltaX, deltaY) => {
  const element = subject[0];

  cy.wrap(subject)
    .getIconRowCol()
    .then(({ row: initialRow, col: initialCol }) => {
      cy.wrap(subject)
        .trigger('mousedown', { which: 1 })
        .trigger('mousemove', { clientX: deltaX, clientY: deltaY })
        .trigger('mouseup', { force: true });

      cy.wrap(subject)
        .getIconRowCol()
        .then(({ row: finalRow, col: finalCol }) => {
          return cy.wrap({
            initial: { x: initialCol, y: initialRow },
            final: { x: finalCol, y: finalRow },
          });
        });
    });
});

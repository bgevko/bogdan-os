describe('The Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('successfully loads', () => {
    cy.visit('/');
  });
  it('should contain the start button', () => {
    cy.visit('/');
    cy.get('[data-testid="start-button"]').should('contain', 'Explore');
  });
});

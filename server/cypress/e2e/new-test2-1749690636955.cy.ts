//*** New test2 ***//

// This is a demo test

describe('New test2', () => {

  it('should fail for wrong url - e2e script injection', () => {
    cy.visit('https://example.cypress.io/\');cy.visit(\'Kitchen Sink');
    cy.get('h1').should('have.text', 'Kitchen Sink');
  });

  it('should have Kitchen Sink title', () => {
    cy.visit('https://example.cypress.io/');
    cy.get('h1').should('have.text', 'Kitchen Sink');
    cy.visit('');
    cy.get('').click();
  });

  it('should ', () => {
    cy.visit('https://example.cypress.io/');
    cy.visit('');
    cy.visit('');
    cy.visit('');
    cy.get('').type('');
  });

});
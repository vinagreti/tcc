// This is a demo test
describe('New test2', () => {

  it('should have Kitchen Sink title', () => {
    cy.visit('https://example.cypress.io/\');cy.visit(\'https://example.cypress.io/');
    cy.get('h1').should('have.text', 'Kitchen Sink');
  });

  it('should ', () => {
    cy.visit('https://example.cypress.io');
    cy.get('h1').should('include.text', 'Kitchen Sink');
  });

  it('should ', () => {
    cy.visit('');

  });

});
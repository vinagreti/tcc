// testando login
describe('studeo', () => {

  it('should login', () => {
    cy.visit('https://studeo.unicesumar.edu.br/#!/access/login');
    cy.get('#username').type('19340825');
    cy.get('#password').type('Brun2010');
    cy.get('button[type="submit"]').click();
    cy.get('uni-user-avatar').should('include.text', 'BJ');
  });

});
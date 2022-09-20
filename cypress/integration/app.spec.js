/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

describe('Navigation', () => {
  it('Admin and User Routes', () => {
    cy.visit('http://localhost:3000/');
    cy.get('*[data-cy^="navbar-login"]').click();
    cy.url().should('include', '/login');
    cy.get('*[data-cy^="login-message"]').contains('Login Here!');
    cy.get('*[data-cy^="login-email"]').type('abinaya.g.k@gmail.com', { force: true });
    cy.get('*[data-cy^="login-pass"]').type('Dankotuwa@123', { force: true });
    cy.get('*[data-cy^="login-submitBtn"]').click();
    cy.get('*[data-cy^="dashboard-userType"]').contains('admin');
    cy.get('*[data-cy^="dashboard-logout"]').click();
    cy.get('*[data-cy^="login-message"]').contains('Login Here!');
    cy.get('*[data-cy^="login-email"]').type('duminda.g.k@gmail.com', { force: true });
    cy.get('*[data-cy^="login-pass"]').type('Dankotuwa@123', { force: true });
    cy.get('*[data-cy^="login-submitBtn"]').click();
    cy.get('*[data-cy^="navbar-logo"]').contains('TWIN-SHIELD');
    cy.get('*[data-cy^="navbar-logout"]').click();
    cy.get('*[data-cy^="navbar-logo"]').contains('TWIN-SHIELD');
  });
});

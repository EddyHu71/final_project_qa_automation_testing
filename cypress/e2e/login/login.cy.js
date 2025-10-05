import LoginPage from '../../pages/login/LoginPage';
import credentials from '../../fixtures/example.json';

describe('Login Feature', () => {

  it('Berhasil login dengan kredensial valid', () => {
    cy.intercept('POST', '**/auth/validate').as('loginRequest');

    LoginPage.visit();
    LoginPage.login(credentials.validUser.username, credentials.validUser.password);

    cy.wait('@loginRequest').its('response.statusCode').should('eq', 302);
    cy.url().should('include', '/dashboard');
  });

  it('Gagal login dengan kredensial salah', () => {
    LoginPage.visit();
    LoginPage.login(credentials.invalidUser.username, credentials.invalidUser.password);
    LoginPage.getErrorMessage().should('contain', 'Invalid credentials');
  });

});

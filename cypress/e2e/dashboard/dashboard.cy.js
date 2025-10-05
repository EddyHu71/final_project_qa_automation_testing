import LoginPage from '../../pages/login/LoginPage';
import DashboardPage from '../../pages/dashboard/DashboardPage';
import credentials from '../../fixtures/example.json';

describe('Dashboard - Directory Menu', () => {

  beforeEach(() => {
    cy.intercept('POST', '**/auth/validate').as('loginRequest');

    // login terlebih dahulu
    LoginPage.visit();
    LoginPage.login(credentials.validUser.username, credentials.validUser.password);
    cy.wait('@loginRequest');
    cy.url().should('include', '/dashboard');
  });

  it('Membuka menu Directory dan melakukan pencarian', () => {
    cy.intercept('GET', '**/api/v2/directory/employees?*').as('searchDirectory');

    DashboardPage.openDirectory();
    cy.url().should('include', '/directory');

    DashboardPage.searchEmployee('Linda');
    cy.wait('@searchDirectory').its('response.statusCode').should('eq', 200);
  });

});

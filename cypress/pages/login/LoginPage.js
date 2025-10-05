class LoginPage {
  visit() {
    cy.visit(Cypress.env('uiUrl'));
  }

  getUsernameInput() {
    return cy.get("input[name='username']", { timeout: 10000 });
  }

  getPasswordInput() {
    return cy.get("input[name='password']", { timeout: 10000 });
  }

  getLoginButton() {
    return cy.get("button[type='submit']");
  }

  getErrorMessage() {
    return cy.get('.oxd-alert-content-text');
  }

  login(username, password) {
    this.getUsernameInput().should('be.visible').type(username);
    this.getPasswordInput().should('be.visible').type(password);
    this.getLoginButton().click();
  }
}

export default new LoginPage();

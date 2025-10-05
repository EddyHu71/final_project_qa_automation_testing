class ForgotPasswordPage {
  visit() {
    cy.visit(Cypress.env('uiUrl') + 'web/index.php/auth/requestPasswordResetCode');
  }

  getUsernameInput() {
    return cy.get("input[name='username']", { timeout: 10000 });
  }

  getResetButton() {
    return cy.get("button[type='submit']");
  }

  getSuccessMessage() {
    return cy.get('.oxd-text--h6');
  }

  resetPassword(username) {
    this.getUsernameInput().type(username);
    this.getResetButton().click();
  }
}

export default new ForgotPasswordPage();

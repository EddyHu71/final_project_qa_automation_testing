import ForgotPasswordPage from '../../pages/forget_password/ForgetPasswordPage';

describe('Forgot Password Feature', () => {

  it('Mengirim permintaan reset password', () => {
    cy.intercept('POST', '**/auth/requestResetPassword').as('resetRequest');

    ForgotPasswordPage.visit();
    ForgotPasswordPage.resetPassword('Admin');
    
    cy.wait('@resetRequest').its('response.statusCode').should('eq', 302);
    ForgotPasswordPage.getSuccessMessage().should('contain', 'Reset Password link sent successfully');
  });

});

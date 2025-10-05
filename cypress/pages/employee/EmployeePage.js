class EmployeePage {

  navigateToAddEmployee() {
    cy.contains('a.oxd-main-menu-item', 'PIM').click();
    cy.contains('button', 'Add').click();
  }

  navigateToListEmployee() {
    cy.contains('a.oxd-main-menu-item', 'PIM').click();
    cy.contains('h5', 'Employee Information');
  }

  getFirstNameInput() {
    return cy.get('input[name="firstName"]');
  }

  getMiddleNameInput() {
    return cy.get('input[name="middleName"]');
  }

  getLastNameInput() {
    return cy.get('input[name="lastName"]');
  }

  getSaveButton() {
    return cy.get('button[type="submit"]');
  }

  searchEmployee(name) {
    cy.get('input[placeholder="Type for hints..."]').clear().type(name);
    cy.contains('button', 'Search').click();
  }

  addEmployee(firstName, middleName, lastName) {
    this.getFirstNameInput().type(firstName);
    this.getMiddleNameInput().type(middleName);
    this.getLastNameInput().type(lastName);
    this.getSaveButton().click();
  }

  verifyEmployeeVisible(name) {
    cy.get('.oxd-table-card').should('contain.text', name);
  }

  interceptEmployeeList() {
    cy.intercept('GET', '**/api/v2/pim/employees?**').as('getEmployees');
  }
}

export default new EmployeePage();

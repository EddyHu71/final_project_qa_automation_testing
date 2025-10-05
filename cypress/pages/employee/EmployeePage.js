class EmployeePage {

  navigateToAddEmployee() {
    cy.contains('a.oxd-main-menu-item', 'PIM', { timeout: 10000 }).click();
    cy.contains('button', 'Add', { timeout: 10000 }).click();
  }

  navigateToListEmployee() {
    cy.contains('a.oxd-main-menu-item', 'PIM').click();
    cy.contains('h5', 'Employee Information', { timeout: 10000 });
  }

  getFirstNameInput() {
    return cy.get('input[name="firstName"]', { timeout: 10000 });
  }

  getMiddleNameInput() {
    return cy.get('input[name="middleName"]', { timeout: 10000 });
  }

  getLastNameInput() {
    return cy.get('input[name="lastName"]', { timeout: 10000 });
  }

  getSaveButton() {
    return cy.get('button[type="submit"]', { timeout: 10000 });
  }

  searchEmployee(name) {
    cy.get("input[placeholder='Type for hints...']", { timeout: 10000 }).clear().type(name);
    cy.contains('button', 'Search').click();
  }

  addEmployee(firstName, middleName, lastName) {
    this.getFirstNameInput().type(firstName);
    this.getMiddleNameInput().type(middleName);
    this.getLastNameInput().type(lastName);
    this.getSaveButton().click();
  }

  interceptEmployeeList() {
    cy.intercept('GET', '**/api/v2/pim/employees?**').as('getEmployees');
  }
}

export default new EmployeePage();

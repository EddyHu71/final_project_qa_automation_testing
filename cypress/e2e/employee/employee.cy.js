import LoginPage from '../../pages/login/LoginPage';
import EmployeePage from '../../pages/employee/EmployeePage';
import employeeData from '../../fixtures/employee.json';
import searchEmployee from '../../fixtures/search_employee.json';

describe('Employee Page', () => {

  beforeEach(() => {
    // intercept login API
    cy.intercept('POST', '**/auth/validate').as('loginRequest');

    // login dulu
    LoginPage.visit();
    LoginPage.login('Admin', 'admin123');
    cy.wait('@loginRequest');
    cy.url().should('include', '/dashboard');
  });

  it('Menambahkan karyawan baru', () => {
    cy.intercept('POST', '**/api/v2/pim/employees').as('addEmployee');

    // buka menu PIM -> Add Employee
    EmployeePage.navigateToAddEmployee();

    // isi data karyawan dari fixture
    EmployeePage.addEmployee(
      employeeData.firstName,
      employeeData.middleName,
      employeeData.lastName
    );

    // tunggu request add employee selesai
    cy.wait('@addEmployee').its('response.statusCode').should('eq', 200);

    // verifikasi redirect ke halaman personal details
    cy.url().should('include', '/pim/viewPersonalDetails');
    cy.contains(employeeData.firstName).should('be.visible');
  });


it('Mencari karyawan di Employee List', () => {
    cy.intercept('POST', '**/api/v2/pim/employees').as('viewEmployeeList');

    EmployeePage.interceptEmployeeList();

    EmployeePage.navigateToListEmployee();
    EmployeePage.searchEmployee(searchEmployee.employeeName);

    cy.wait('@getEmployees').its('response.statusCode').should('eq', 200);

    EmployeePage.verifyEmployeeVisible(searchEmployee.employeeName);

  });

});

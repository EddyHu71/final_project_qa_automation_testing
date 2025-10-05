class DashboardPage {
  getDirectoryMenu() {
    return cy.contains('a.oxd-main-menu-item', 'Directory');
  }

  getSearchInput() {
    return cy.get("input[placeholder='Type for hints...']");
  }

  getSearchButton() {
    return cy.contains('button', 'Search');
  }

  openDirectory() {
    this.getDirectoryMenu().click();
  }

  searchEmployee(name) {
    this.getSearchInput().type(name);
    this.getSearchButton().click();
  }
}

export default new DashboardPage();

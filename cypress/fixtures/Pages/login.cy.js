class Login {
    elements = {
      myAccount: () => cy.get('a[href="https://musclemeat.nl/my-account/ "]'),
      myUsername: () => cy.get('input[id="username"]'),
      myPassword: () => cy.get('input[id="password"]'),
      login: () => cy.get('button[value="Inloggen"]'),
      verification: () => cy.get('strong'),
    };
  
    clickMyAccount() {
      this.elements.myAccount().click();
    }
  
    fillInCredentials() {
      const emailAddress = Cypress.env('EMAIL_ADDRESS');
      const mmPassword = Cypress.env('MM_PASSWORD');
  
      this.elements.myUsername().type(emailAddress);
      this.elements.myPassword().type(mmPassword);
    }
  
    loginToMuscleMeat() {
      this.elements.login().click();
    }
  
    verifyUser(strVerificationText) {
      this.elements.verification().contains(strVerificationText);
    }
  }
  
  export default new Login();
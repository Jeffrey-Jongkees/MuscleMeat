import Login from '../fixtures/Pages/login.cy.js'
import Logout from '../fixtures/Pages/logout.cy.js'

describe('Login', () => {
    it('Inloggen', () => {
        cy.viewport(1624, 1000);
        cy.visit('https://musclemeat.nl'); 
        Login.clickMyAccount();        
        Login.fillInCredentials();
        Login.loginToMuscleMeat();  
        Login.verifyUser('Jeffrey Jongkees');
    })
  })

  describe('Logout', () => {
    it('Uitloggen', () => {
        cy.viewport(1624, 1000);
        cy.visit('https://musclemeat.nl'); 
        Login.clickMyAccount();
        Login.fillInCredentials();
        Login.loginToMuscleMeat();  
        Login.verifyUser('Jeffrey Jongkees');
        Logout.logoutMyAccount();
        Logout.verifyLogout('Inloggen');
    })
  })
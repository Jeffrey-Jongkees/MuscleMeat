import Login from '../fixtures/Pages/login.cy.js'
// import 'jquery';

describe('Muscle Meat', () => {
    it('Inloggen', () => {
        cy.viewport(1624, 1000)
        cy.visit('https://musclemeat.nl') 
        Login.clickMyAccount();
        Login.fillInCredentials('jeffreyjongkees@gmail.com', 'Mm_123smok3y');
        Login.loginToMuscleMeat();  
        Login.verifyUser('Jeffrey Jongkees')
    })
  })
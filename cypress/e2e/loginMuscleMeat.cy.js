import Login from '../fixtures/Pages/login.cy.js'
// import 'jquery';

describe('Muscle Meat', () => {
    it('Inloggen', () => {
        cy.visit('https://musclemeat.nl') 
        Login.clickMyAccount();
        Login.fillInCredentials('jeffreyjongkees@gmail.com', 'Mm_123smok3y');
        Login.loginToMuscleMeat();  
    })
  })
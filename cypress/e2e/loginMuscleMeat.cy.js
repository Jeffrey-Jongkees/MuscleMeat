import Login from '../fixtures/Pages/login.cy.js'
// import 'jquery';

describe('Muscle Meat', () => {
    it('Inloggen', () => {
<<<<<<< HEAD
        //cy.viewport(1624, 1000)
=======
        cy.viewport(1624, 1000)
>>>>>>> a0fa443ea5462b65738d3a0791580e3ef6facd73
        cy.visit('https://musclemeat.nl') 
        Login.clickMyAccount();
        Login.fillInCredentials('jeffreyjongkees@gmail.com', 'Mm_123smok3y');
        Login.loginToMuscleMeat();  
        Login.verifyUser('Jeffrey Jongkees')
    })
  })
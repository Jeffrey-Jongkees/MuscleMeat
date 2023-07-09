import Login from '../fixtures/Pages/login.cy.js'
import Overview from '../fixtures/Pages/order.cy.js'

describe('Ordering groceries', () => {
    it('Bestelling plaatsen', () => {
        cy.viewport(1624, 1000);
        cy.visit('https://musclemeat.nl'); 
        Login.clickMyAccount();
        Login.fillInCredentials('jeffreyjongkees@gmail.com', 'Mm_123smok3y');
        Login.loginToMuscleMeat();  
        Login.verifyUser('Jeffrey Jongkees');
        Overview.clickFoodButton();
        Overview.clickmeatAndChicken();
    })
  })
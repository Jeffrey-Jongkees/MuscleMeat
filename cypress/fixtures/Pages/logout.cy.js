class Logout{
    
    elements ={


        logout : () => cy.get('[class$="customer-logout"]').find('[href*="https://musclemeat.nl/my-account/customer-logout"]'),
        verify : () => cy.get('h2')
        }

        logoutMyAccount(){
            this.elements.logout().click();
        }

        verifyLogout(strVerification){
            this.elements.verify(strVerification);
        }
}

export default new Logout(); 
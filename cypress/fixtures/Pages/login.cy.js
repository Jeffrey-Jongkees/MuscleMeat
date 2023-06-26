class Login{
    
    elements ={


        myAccount : () => cy.get('a[href="https://musclemeat.nl/my-account/ "]'),
        myUsername : () => cy.get('input[id="username"]'),
        myPassword : () => cy.get('input[id="password"]'),
        login : () => cy.get('button[value="Inloggen"]'),
        }

        clickMyAccount(){
            this.elements.myAccount().click();
        }

        fillInCredentials(strUsername, strPassword){
            this.elements.myUsername().type(strUsername);
            this.elements.myUsername().type(strPassword);
        }

        loginToMuscleMeat(){
            this.elements.login().click();
        }
}

export default new Login(); 

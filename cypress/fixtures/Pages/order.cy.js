class Overview{
    
    elements ={


        foodButton : () => cy.contains('Voeding'),
        
                                // cy.get('li[id="menu-item-451410"]')
                                // .find('[href="https://musclemeat.nl/voeding/"]'),
        meatAndChicken : () => cy.get('[href="https://musclemeat.nl/voeding/vlees-kip/"]')
        }

        clickFoodButton(){
            this.elements.foodButton().click();
        }

        clickmeatAndChicken(){
            this.elements.meatAndChicken().click();
        }
}

export default new Overview(); 
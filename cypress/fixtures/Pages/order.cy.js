class Overview{
    
    elements ={


        foodButton : () => cy.get('[href="https://musclemeat.nl/voeding/"][class*="nav-link  dropdown"]'),
        meatAndChicken : () => cy.get('[href="https://musclemeat.nl/voeding/vlees-kip/"]')
        }

        clickFoodButton(){
            this.elements.foodButton().trigger('mouseover')
            this.elements.foodButton('.popover').should('be.visible')
            this.elements.foodButton().click();
            
        }

        clickmeatAndChicken(){
            this.elements.meatAndChicken().click();
        }
        
}


export default new Overview(); 



describe('dapp test', function () {
    before(function () {
    cy.SignIn()
    })
    
  
    it('favorites',function(){
        cy.get('app-menu-section').contains('Favorites').click()
        cy.url().should('include','/favorites')

        //this selects the first episode of the favorites page
        cy.get(':nth-child(1) > episode-card > .card > .card-img-top')

        //click on the episode name to open
        //cy.get('[ng-reflect-router-link="/episodes/495"] > .card-title').click()

        //clicking on the play button
        cy.get(':nth-child(1) > episode-card > .card > app-play-button > .btn > .ion-md-play').click()

       //this open the the three dots option from top right of the episode
        cy.get(':nth-child(1) > episode-card > .card > .custom-card--info > .dropdown > [aria-expanded="false"] > .ion-md-more').click()
       
        //click on heart shape button to remove it from favorite
        cy.get(':nth-child(1) > episode-card > .card > .custom-card--info > .dropdown > .dropdown-menu > :nth-child(1) > app-favorite-button > .dropdown-link > .la').click()

        //this open the the three dots option from top right of the episode
       cy.get(':nth-child(1) > episode-card > .card > .custom-card--info > .dropdown > [aria-expanded="false"] > .ion-md-more').click()

       //to add episode to play list
        cy.get(':nth-child(1) > episode-card > .card > .custom-card--info > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-link > .la').click()
        
    })
})
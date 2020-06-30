


describe('dapp test', function () {
    before(function () {
    cy.SignIn()
    })
    
  
    it('favorites',function(){
        cy.get('app-menu-section').contains('Favorites').click()
        cy.url().should('include','/favorites')
        cy.get(':nth-child(1) > episode-card > .card > app-play-button > .btn > .ion-md-play').click()
    })
})
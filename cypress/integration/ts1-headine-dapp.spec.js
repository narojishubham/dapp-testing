


describe('dapp test', function () {
    before(function () {
    cy.SignIn()
    })
    
    it('headline',function(){
        cy.url().should('include','home')
        cy.contains('Headlines').should('be.visible')
        cy.get('app-headline-slide-card').contains(`Why Chennai's going under lockdown again, a cheaper COVID-19 test, a unique scam in UP`)
        cy.get('app-headline-slide-card').contains(`Pilot`)
        cy.get('app-headline-slide-card').contains(`Football, chess and occasional cricket - England in Sri Lanka`)
        cy.get('.carousel-control-prev-icon').click()
        cy.get('.carousel-control-prev-icon').click()
        cy.get('.carousel-control-next-icon').click()
    })
    it('topic section',function(){
        cy.get('h2').contains('Topics')
    })
    it('navigation bar',function(){

        //the nav open and close test
        cy.get('app-aside-left-header > :nth-child(1) > .toggle-menu').click()
        cy.get('app-aside-left-header > :nth-child(1) > .toggle-menu').click()

        //the podricko image
        cy.get(':nth-child(2) > a > img').should('be.visible')

        //the version 
        cy.get('.brand > img').should('be.visible')

    })
    it('small fetures',function(){

    
        //search bar
        cy.get('#searchInput').should('be.visible')

        //user profile
        cy.get('#userMenu').click()

        //profile
        //cy.get('[ng-reflect-router-link="/profile"]').click()
       // cy.go('back')

        //setting
        
     //   cy.get('#userMenu').click()
     //   cy.get('[ng-reflect-router-link="/settings"]').click()
      //  cy.go('back')


      //player plays
      cy.get('#audioPlayer').should('be.visible')
      cy.get('.mr-4').should('be.visible')
    })
})




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
        
        
       
    })
    it('topic section',function(){
        cy.get('h2').contains('Topics')
     
    })
})

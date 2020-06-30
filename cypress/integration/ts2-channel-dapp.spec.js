describe('dapp test', function () {
    before(function () {
    cy.SignIn()
    })

    it('channels',function(){
        //navigation
        cy.get('app-menu-section').contains('Channels').should('be.visible').click()
        cy.url('channels')
        //channel 1
        cy.contains('channels').should('be.visible')
        cy.get('.card-body:first-of-type').contains('News')
        cy.get('.btn:first-of-type').contains('View').click()

        //after click view
        cy.url().should('include','channels/1')
        cy.get(':nth-child(1) > .card > .card-body').contains('#1').should('be.visible')
        cy.get('.btn').contains('View').click()
        //after clicking the view button on edition
        cy.url().should('include','/pods/1')
        cy.contains('Headlines').should('be.visible')
        cy.go('back')

        //channel edition 2
        cy.url().should('include','/channels/1')
        cy.get(':nth-child(2) > .card > .card-body').contains('#2').should('be.visible')
        cy.get(':nth-child(2) > .card > .card-body > .btn').contains('View').click()
        cy.url().should('include','/pods/2')
        cy.go('back')
        cy.go(-1)

        //new channel
        cy.contains('podricko news line').should('be.visible')
        cy.get(':nth-child(2) > .card > .card-body > .btn').contains('View').click()
        cy.url().should('include','/channels/2')
        cy.get('.card-body').contains('#1')
        cy.get('.card-body > .btn').contains('View').should('be.visible').click()
        cy.get(':nth-child(2) > app-menu-section > .nav-link > span').contains('Home').click()
    })
})
/// <reference types="cypress"/>

describe('landing page test',() => {
    beforeEach(() => {
        cy.visit('http://localhost:4201/landing')
    })
    it('testing the landing page',() => {
        cy.get('[alt="Podricko App"]').should('be.visible').click()
        cy.go(-1)
        cy.contains('THE DECENTRALIZED PODCAST PLATFORM').should('be.visible')
        cy.get('.font-lg').contains('Privacy-first listening through community powered podcast channels!').should('be.visible')
       
    })
    it('what is Podricko',() => {
        cy.get('.col-lg-8').contains('What is Podricko?')
        cy.get('.font-md').contains('Podricko is a podcast distribution platform - it’s a revolutionary new way for publishing and consuming podcasts. The platform will consist of web and mobile applications for podcast listeners and a SaaS platform for podcast publishers that would include publishing, content curation, marketing and content subscription services.')
        cy.get('.row > :nth-child(1) > .btn').click()
        cy.go(-1)
        cy.get(':nth-child(2) > .btn').contains('FOR LISTENERS').click()
        cy.go(-1)
        cy.get(':nth-child(3) > .btn').click()
        cy.go(-1)
        cy.get(':nth-child(4) > .btn').click()
        cy.go(-1)
    })
})
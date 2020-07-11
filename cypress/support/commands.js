import 'cypress-file-upload';

Cypress.Commands.add("SignIn", () => {
  
    cy.visit('http://localhost:4201/login')
    cy.contains("Sign in with email").should('be.visible')
    cy.get('input[id="ui-sign-in-email-input"]').type('shubham.naroji@gmail.com')
    cy.contains('Next').should('be.visible').click()
    cy.contains('Sign in').should('be.visible')
    cy.get('input[type="password"]').type('shubham1822')
    cy.contains('Sign In').should('be.visible').click()

  
   
})
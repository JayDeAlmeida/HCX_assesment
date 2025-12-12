import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

Given('the user is on login page', () => {
  cy.visit('https://www.saucedemo.com/')
})

When('the user provides a valid user name', () => {
  cy.get('[id=user-name]').type('standard_user')
})

When('the user provides a valid password', () => {
   cy.get('[id="password"]').type('secret_sauce')
})

When('the user clicks on the login button', () => {
    cy.get('[id="login-button"]').click()
})

Then('the user should be redirected to their logged in page', () => {
  cy.url().should('include', '/inventory.html')
})

When('the user provides a valid email', () => {
  cy.get('[id=user-name]').type('standard_user')
})

When('the user provides an invalid password', () => {
  cy.get('[id="password"]').type('wrong_password')
})

Then('an error message should appear', () => {
  cy.get('[data-test="error"]').should('be.visible')
})

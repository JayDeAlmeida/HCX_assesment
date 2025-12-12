import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

When('the user adds {string} to the cart', (productName) => {
  cy.contains('.inventory_item', productName)
    .find('button')
    .contains('Add to cart')
    .click()
})

When('the user removes {string} from the cart', (productName) => {
  cy.contains('.inventory_item', productName)
    .find('button')
    .contains('Remove')
    .click()
})

When('the user clicks on the cart icon', () => {
  cy.get('.shopping_cart_link').click()
})

Then('the cart badge should show {string} item', (count) => {
  cy.get('.shopping_cart_badge').should('have.text', count)
})

Then('the cart badge should show {string} items', (count) => {
  cy.get('.shopping_cart_badge').should('have.text', count)
})

Then('the cart badge should not be visible', () => {
  cy.get('.shopping_cart_badge').should('not.exist')
})

Then('the product {string} button should change to {string}', (productName, buttonText) => {
  cy.contains('.inventory_item', productName)
    .find('button')
    .should('have.text', buttonText)
})

Then('the user should be on the cart page', () => {
  cy.url().should('include', '/cart.html')
})

Then('the product {string} should be in the cart', (productName) => {
  cy.contains('.cart_item', productName).should('be.visible')
})

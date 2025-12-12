import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

Given('the user is logged in', () => {
  cy.visit('https://www.saucedemo.com/')
  cy.get('[id=user-name]').type('standard_user')
  cy.get('[id="password"]').type('secret_sauce')
  cy.get('[id="login-button"]').click()
  cy.url().should('include', '/inventory.html')
})

When('the user selects {string} from the sort dropdown', (sortOption) => {
  cy.get('[data-test="product-sort-container"]').select(sortOption)
})

Then('products should be displayed in alphabetical order A to Z', () => {
  cy.get('.inventory_item_name').then($items => {
    const names = [...$items].map(item => item.innerText)
    const sorted = [...names].sort()
    expect(names).to.deep.equal(sorted)
  })
})

Then('products should be displayed in alphabetical order Z to A', () => {
  cy.get('.inventory_item_name').then($items => {
    const names = [...$items].map(item => item.innerText)
    const sorted = [...names].sort().reverse()
    expect(names).to.deep.equal(sorted)
  })
})

Then('products should be displayed with lowest price first', () => {
  cy.get('.inventory_item_price').then($items => {
    const prices = [...$items].map(item => parseFloat(item.innerText.replace('$', '')))
    const sorted = [...prices].sort((a, b) => a - b)
    expect(prices).to.deep.equal(sorted)
  })
})

Then('products should be displayed with highest price first', () => {
  cy.get('.inventory_item_price').then($items => {
    const prices = [...$items].map(item => parseFloat(item.innerText.replace('$', '')))
    const sorted = [...prices].sort((a, b) => b - a)
    expect(prices).to.deep.equal(sorted)
  })
})

When('the user looks for {string}', (productName) => {
  cy.get('.inventory_list').should('be.visible')
})

Then('the product {string} should be visible', (productName) => {
  cy.contains('.inventory_item_name', productName).should('be.visible')
})

Then('the product {string} should not be visible', (productName) => {
  cy.contains('.inventory_item_name', productName).should('not.exist')
})

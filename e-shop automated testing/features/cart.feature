Feature: Add Product to Cart
As a user, I want to be able to add products to my cart and verify they are added.

Background:
Given the user is logged in

Scenario: Successfully add a product to the cart
When the user adds "Sauce Labs Backpack" to the cart
Then the cart badge should show "1" item
And the product "Sauce Labs Backpack" button should change to "Remove"

Scenario: Verify product appears in cart page
When the user adds "Sauce Labs Backpack" to the cart
And the user clicks on the cart icon
Then the user should be on the cart page
And the product "Sauce Labs Backpack" should be in the cart

Scenario: Add multiple products to cart
When the user adds "Sauce Labs Backpack" to the cart
And the user adds "Sauce Labs Bike Light" to the cart
Then the cart badge should show "2" items

Scenario: Remove product from cart
When the user adds "Sauce Labs Backpack" to the cart
And the user removes "Sauce Labs Backpack" from the cart
Then the cart badge should not be visible

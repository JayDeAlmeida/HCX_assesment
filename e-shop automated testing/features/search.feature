Feature: Search for Product
As a user, I want to be able to search and filter products.

Background:
Given the user is logged in

Scenario: Successfully filter products by name (A to Z)
When the user selects "Name (A to Z)" from the sort dropdown
Then products should be displayed in alphabetical order A to Z

Scenario: Successfully filter products by name (Z to A)
When the user selects "Name (Z to A)" from the sort dropdown
Then products should be displayed in alphabetical order Z to A

Scenario: Successfully filter products by price (low to high)
When the user selects "Price (low to high)" from the sort dropdown
Then products should be displayed with lowest price first

Scenario: Successfully filter products by price (high to low)
When the user selects "Price (high to low)" from the sort dropdown
Then products should be displayed with highest price first

Scenario: Verify product exists on the page
When the user looks for "Sauce Labs Backpack"
Then the product "Sauce Labs Backpack" should be visible

Scenario: Verify product does not exist
When the user looks for "Non Existent Product XYZ"
Then the product "Non Existent Product XYZ" should not be visible

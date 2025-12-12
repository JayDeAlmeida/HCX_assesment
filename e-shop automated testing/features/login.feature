Feature: Login
As an user, I want to be able to sccessful access my account.

Scenario: Successfully Login
Given the user is on login page
When the user provides a valid user name
And the user provides a valid password
And the user clicks on the login button
Then the user should be redirected to their logged in page

Scenario: Invalid Credentials
Given the user is on login page
When the user provides a valid email
And the user provides an invalid password 
And the user clicks on the login button 
Then an error message should appear
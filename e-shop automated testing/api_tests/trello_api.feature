Feature: Trello API Testing
As a tester, I want to validate Trello API responses and generate a report.

Scenario: Retrieve action details and generate report
When I send a GET request to the Trello actions endpoint
Then I should receive a successful response
And I should extract the list name and status code for the report

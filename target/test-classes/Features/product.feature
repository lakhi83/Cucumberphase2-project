Feature: This feature Lin feature scenario

  Background: open swag lab application
    When I click on the Login link
    And I enter the username "standard_user"
    And I enter the password "secret_sauce"
    And I click on the login Button
    Then I should be Landed on the home page

  Scenario: validate the product prices
    When user is on product page
    Then user compare the following product price
      | Sauce Labs Backpack   | $29.99 |
      | Sauce Labs Bike Light | $9.99  |

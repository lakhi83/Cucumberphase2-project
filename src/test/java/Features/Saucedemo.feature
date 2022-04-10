Feature: This feature Login feature scenario


Scenario Outline: Validate the successful login using  multiple test data
 
    When I click on the Login link
    And I enter the username "<UserName>"
    And I enter the password "<Password>"
    And I click on the login Button
    Then I should be Landed on the home page
    
     Examples: 
      | UserName    | Password |
      | standard_user| secret_sauce |
      | problem_user | secret_sauce |
    
    
    
    
    Scenario Outline: Verify the error message we give incorrect  multiple test data

    When I click on the Login link
    And I enter the username "<UserName>"
    And I enter the password "<Password>"
    And I click on the login Button
    Then I should get error message as "Epic sadface: Username and password do not match any user in this service"

     Examples: 
      | UserName    | Password |
      | standard_user | pqr@1234 |
     
#Author:asel@syntaxtechs.com
Feature: LoginFeature

  Scenario: Valid Login
    Validating valid login

    Given I open browser
    And I navigate to the FreeCrm
    When I enter "SyntaxTechnologies" and "Syntax2017"
    And I click login button
    Then I successfully logged in
    And I close browser

  Scenario Outline: Invalid Login
    Validating invalid login with invalid username and invalid password

    Given I open browser
    And I navigate to the FreeCrm
    When I enter "<username>" and "<password>"
    And I click login button
    Then I still see sign up link
    And I close browser

    Examples: 
      | username | password |
      | Messy    | Messy123 |
      | Jessy    | Jessy123 |

  

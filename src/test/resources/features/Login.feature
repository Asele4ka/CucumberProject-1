#Author:asel@syntaxtechs.com
Feature: LoginFeature

  #Smoke
  Scenario: Valid Login
    Validating valid login

    Given I open browser
    And I navigate to the FreeCrm
    When I enter username "SyntaxTechnologies" and password "Syntax2017"
    And I click login button
    Then I successfully logged in
    And I close browser

  #Regression
  Scenario Outline: Invalid Login
    Validating invalid login with invalid username and invalid password

    Given I open browser
    And I navigate to the FreeCrm
    When I enter username "<username>" and password "<password>"
    And I click login button
    Then I still see sign up link
    And I close browser

    Examples: 
      | username | password |
      | Messy    | Messy123 |
      | Jessy    | Jessy123 |

#@Smoke
  Scenario: Valid Login and happy
    Given I open browser
    And I navigate to the FreeCrm
    When I enter username "SyntaxTechnologies" and password "Syntax2017"
    And I click login button
    Then I successfully logged in
    And I am happy
    And I close browser
#@Regression
  Scenario:  Valid Login and sad
    Given I open browser
    And I navigate to the FreeCrm
    When I enter username "SyntaxTechnologies" and password "Syntax2017"
    And I click login button
    Then I successfully logged in
    And I am sad
    And I close browser

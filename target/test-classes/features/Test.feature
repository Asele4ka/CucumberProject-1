@Sprint1
Feature: Test

@Smoke
Scenario:  Valid Login and sad
    Given I open browser
    And I navigate to the FreeCrm
    When I enter username "SyntaxTechnologies" and password "Syntax2017"
    And I click login button
    Then I successfully logged in
    And I am "sad"
    And I close browser

@Regression  
    Scenario:  Valid Login and happy
    Given I open browser
    And I navigate to the FreeCrm
    When I enter username "SyntaxTechnologies" and password "Syntax2017"
    And I click login button
    Then I successfully logged in
    And I am "happy"
    And I close browser
 
 @Smoke @Regression   
    Scenario:  Valid Login and hungry
    Given I open browser
    And I navigate to the FreeCrm
    When I enter username "SyntaxTechnologies" and password "Syntax2017"
    And I click login button
    Then I successfully logged in
    And I am "hungry"
    And I close browser

@Smoke @End2End    
    Scenario:  Valid Login and healthy
    Given I open browser
    And I navigate to the FreeCrm
    When I enter username "SyntaxTechnologies" and password "Syntax2017"
    And I click login button
    Then I successfully logged in
    And I am "healthy"
    And I close browser
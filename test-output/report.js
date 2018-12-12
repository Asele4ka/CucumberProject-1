$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "LoginFeature",
  "description": "",
  "id": "loginfeature",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#Comment"
    }
  ],
  "line": 4,
  "name": "Valid Login",
  "description": "",
  "id": "loginfeature;valid-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to the FreeCrm",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter \"SyntaxTechnologies\" and \"Syntax2017\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I successfully logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_open_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.i_navigate_to_the_FreeCrm()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SyntaxTechnologies",
      "offset": 9
    },
    {
      "val": "Syntax2017",
      "offset": 34
    }
  ],
  "location": "LoginSteps.i_enter_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.i_click_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.i_successfully_logged_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.i_close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 12,
  "name": "Invalid Login",
  "description": "",
  "id": "loginfeature;invalid-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I navigate to the FreeCrm",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter \"Messy\" and \"Madrid\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I still see sign up link",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_open_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.i_navigate_to_the_FreeCrm()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Messy",
      "offset": 9
    },
    {
      "val": "Madrid",
      "offset": 21
    }
  ],
  "location": "LoginSteps.i_enter_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.i_click_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.i_still_see_sign_up_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.i_close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 20,
  "name": "Invalid Login",
  "description": "\t\t\tValidating invalid login with valid username and password",
  "id": "loginfeature;invalid-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "I open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I navigate to the FreeCrm",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter \"SyntaxTechnologies\" and \"Madrid\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I still see sign up link",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_open_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.i_navigate_to_the_FreeCrm()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SyntaxTechnologies",
      "offset": 9
    },
    {
      "val": "Madrid",
      "offset": 34
    }
  ],
  "location": "LoginSteps.i_enter_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.i_click_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.i_still_see_sign_up_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.i_close_browser()"
});
formatter.result({
  "status": "skipped"
});
});
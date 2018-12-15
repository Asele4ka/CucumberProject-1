$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Test.feature");
formatter.feature({
  "line": 1,
  "name": "Test",
  "description": "",
  "id": "test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 14,
  "name": "Valid Login and happy",
  "description": "",
  "id": "test;valid-login-and-happy",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I navigate to the FreeCrm",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter username \"SyntaxTechnologies\" and password \"Syntax2017\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I successfully logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I am \"happy\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_open_browser()"
});
formatter.result({
  "duration": 3214279340,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_navigate_to_the_FreeCrm()"
});
formatter.result({
  "duration": 2317766238,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SyntaxTechnologies",
      "offset": 18
    },
    {
      "val": "Syntax2017",
      "offset": 52
    }
  ],
  "location": "LoginSteps.i_enter_and(String,String)"
});
formatter.result({
  "duration": 375301095,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_click_login_button()"
});
formatter.result({
  "duration": 6429004867,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_successfully_logged_in()"
});
formatter.result({
  "duration": 1061553480,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "happy",
      "offset": 6
    }
  ],
  "location": "LoginSteps.i_am_happy(String)"
});
formatter.result({
  "duration": 186728,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_close_browser()"
});
formatter.result({
  "duration": 351616409,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Valid Login and hungry",
  "description": "",
  "id": "test;valid-login-and-hungry",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@Smoke"
    },
    {
      "line": 23,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I navigate to the FreeCrm",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter username \"SyntaxTechnologies\" and password \"Syntax2017\"",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I successfully logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I am \"hungry\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_open_browser()"
});
formatter.result({
  "duration": 1616742118,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_navigate_to_the_FreeCrm()"
});
formatter.result({
  "duration": 2128948423,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SyntaxTechnologies",
      "offset": 18
    },
    {
      "val": "Syntax2017",
      "offset": 52
    }
  ],
  "location": "LoginSteps.i_enter_and(String,String)"
});
formatter.result({
  "duration": 425937486,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_click_login_button()"
});
formatter.result({
  "duration": 6976728633,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_successfully_logged_in()"
});
formatter.result({
  "duration": 1056576137,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hungry",
      "offset": 6
    }
  ],
  "location": "LoginSteps.i_am_happy(String)"
});
formatter.result({
  "duration": 117107,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_close_browser()"
});
formatter.result({
  "duration": 262774073,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Valid Login and healthy",
  "description": "",
  "id": "test;valid-login-and-healthy",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@Smoke"
    },
    {
      "line": 33,
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "I open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "I navigate to the FreeCrm",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter username \"SyntaxTechnologies\" and password \"Syntax2017\"",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I successfully logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "I am \"healthy\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_open_browser()"
});
formatter.result({
  "duration": 1565465858,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_navigate_to_the_FreeCrm()"
});
formatter.result({
  "duration": 1980566721,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SyntaxTechnologies",
      "offset": 18
    },
    {
      "val": "Syntax2017",
      "offset": 52
    }
  ],
  "location": "LoginSteps.i_enter_and(String,String)"
});
formatter.result({
  "duration": 466348902,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_click_login_button()"
});
formatter.result({
  "duration": 5792642173,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_successfully_logged_in()"
});
formatter.result({
  "duration": 1065250317,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "healthy",
      "offset": 6
    }
  ],
  "location": "LoginSteps.i_am_happy(String)"
});
formatter.result({
  "duration": 154838,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_close_browser()"
});
formatter.result({
  "duration": 205402250,
  "status": "passed"
});
});
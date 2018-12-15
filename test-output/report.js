$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/SighUpWithDT.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: asel@syntaxtechs.com"
    }
  ],
  "line": 2,
  "name": "SighUpWithDT",
  "description": "",
  "id": "sighupwithdt",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Sign Up to the FreeCRM",
  "description": "",
  "id": "sighupwithdt;sign-up-to-the-freecrm",
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
  "name": "I Provide the following details",
  "rows": [
    {
      "cells": [
        "Edition",
        "FirstName",
        "LastName",
        "Email",
        "ConfirmEmail",
        "UserName",
        "Password",
        "ConfirmPassword",
        "Company",
        "Phone"
      ],
      "line": 8
    },
    {
      "cells": [
        "Free Edition",
        "John",
        "Doe",
        "jdoe@test.com",
        "jdoe@test.com",
        "johndoe122",
        "test123",
        "test123",
        "Syntax",
        "1234567890"
      ],
      "line": 9
    },
    {
      "cells": [
        "Free Edition",
        "James",
        "Doe",
        "jdoe@test.com",
        "jdoe@test.com",
        "jamesdoe1234567",
        "test123",
        "test123",
        "Syntax",
        "1234567890"
      ],
      "line": 10
    },
    {
      "cells": [
        "Free Edition",
        "Jane",
        "Doe",
        "jdoe@test.com",
        "jdoe@test.com",
        "janedoe1234567",
        "test123",
        "test123",
        "Syntax",
        "1234567890"
      ],
      "line": 11
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_open_browser()"
});
formatter.result({
  "duration": 4060820754,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_navigate_to_the_FreeCrm()"
});
formatter.result({
  "duration": 2233924817,
  "status": "passed"
});
formatter.match({
  "location": "SignUpSteps.i_Provide_the_following_details(DataTable)"
});
formatter.result({
  "duration": 45526867186,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_close_browser()"
});
formatter.result({
  "duration": 200153584,
  "status": "passed"
});
});
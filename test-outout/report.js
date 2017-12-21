$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/features/loginnewtour.feature");
formatter.feature({
  "line": 1,
  "name": "mercury Tours Login Test",
  "description": "",
  "id": "mercury-tours-login-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Valid Login testing",
  "description": "",
  "id": "mercury-tours-login-test;valid-login-testing",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "user is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "login page title is Welcome: Mercury Tours",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "fill user as \"mercury\" and pwd as \"mercury\" and click on sign-in button",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user should be on Find a Flight page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Loginstepdefnewtour.user_is_on_Login_Page()"
});
formatter.result({
  "duration": 6660481052,
  "status": "passed"
});
formatter.match({
  "location": "Loginstepdefnewtour.title_of_login_page()"
});
formatter.result({
  "duration": 12569271,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mercury",
      "offset": 14
    },
    {
      "val": "mercury",
      "offset": 35
    }
  ],
  "location": "Loginstepdefnewtour.user_enters_invalid(String,String)"
});
formatter.result({
  "duration": 3478582976,
  "status": "passed"
});
formatter.match({
  "location": "Loginstepdefnewtour.user_should_be_on_Find_a_Flight_page()"
});
formatter.result({
  "duration": 29443348,
  "status": "passed"
});
formatter.match({
  "location": "Loginstepdefnewtour.closethebrowser()"
});
formatter.result({
  "duration": 2765490172,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Invalid Login testing",
  "description": "",
  "id": "mercury-tours-login-test;invalid-login-testing",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "user is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "login page title is Welcome: Mercury Tours",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "fill user as \"\u003cusername\u003e\" and pwd as \"\u003cpassword\u003e\" and click on sign-in button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user should be on Sign-on page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 16,
  "name": "Invalid data",
  "description": "",
  "id": "mercury-tours-login-test;invalid-login-testing;invalid-data",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 17,
      "id": "mercury-tours-login-test;invalid-login-testing;invalid-data;1"
    },
    {
      "cells": [
        "mercury",
        "mercury123"
      ],
      "line": 18,
      "id": "mercury-tours-login-test;invalid-login-testing;invalid-data;2"
    },
    {
      "cells": [
        "s123@#$",
        "s123"
      ],
      "line": 19,
      "id": "mercury-tours-login-test;invalid-login-testing;invalid-data;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "Invalid Login testing",
  "description": "",
  "id": "mercury-tours-login-test;invalid-login-testing;invalid-data;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "user is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "login page title is Welcome: Mercury Tours",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "fill user as \"mercury\" and pwd as \"mercury123\" and click on sign-in button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user should be on Sign-on page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Loginstepdefnewtour.user_is_on_Login_Page()"
});
formatter.result({
  "duration": 6316748145,
  "status": "passed"
});
formatter.match({
  "location": "Loginstepdefnewtour.title_of_login_page()"
});
formatter.result({
  "duration": 9953698,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mercury",
      "offset": 14
    },
    {
      "val": "mercury123",
      "offset": 35
    }
  ],
  "location": "Loginstepdefnewtour.user_enters_invalid(String,String)"
});
formatter.result({
  "duration": 1542272808,
  "status": "passed"
});
formatter.match({
  "location": "Loginstepdefnewtour.user_should_be_on_Sign_on_page()"
});
formatter.result({
  "duration": 10474836,
  "status": "passed"
});
formatter.match({
  "location": "Loginstepdefnewtour.closethebrowser()"
});
formatter.result({
  "duration": 835872694,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Invalid Login testing",
  "description": "",
  "id": "mercury-tours-login-test;invalid-login-testing;invalid-data;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "user is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "login page title is Welcome: Mercury Tours",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "fill user as \"s123@#$\" and pwd as \"s123\" and click on sign-in button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user should be on Sign-on page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Loginstepdefnewtour.user_is_on_Login_Page()"
});
formatter.result({
  "duration": 8509298569,
  "status": "passed"
});
formatter.match({
  "location": "Loginstepdefnewtour.title_of_login_page()"
});
formatter.result({
  "duration": 11617842,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "s123@#$",
      "offset": 14
    },
    {
      "val": "s123",
      "offset": 35
    }
  ],
  "location": "Loginstepdefnewtour.user_enters_invalid(String,String)"
});
formatter.result({
  "duration": 1564984315,
  "status": "passed"
});
formatter.match({
  "location": "Loginstepdefnewtour.user_should_be_on_Sign_on_page()"
});
formatter.result({
  "duration": 12435471,
  "status": "passed"
});
formatter.match({
  "location": "Loginstepdefnewtour.closethebrowser()"
});
formatter.result({
  "duration": 999051612,
  "status": "passed"
});
});
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("myProfile.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Pratyush"
    }
  ],
  "line": 3,
  "name": "Wordpress Profile validation",
  "description": "",
  "id": "wordpress-profile-validation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 23,
  "name": "To Validate the values accepted in different fields in My Profile Links",
  "description": "",
  "id": "wordpress-profile-validation;to-validate-the-values-accepted-in-different-fields-in-my-profile-links",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@Sanity_01"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I entered the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I login with credentials",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I am redirected to the my Profile page of wordpress",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I entered different values for \"\u003cURL\u003e\" , \"\u003cURLDescription\u003e\" in profile Links",
  "keyword": "And "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "wordpress-profile-validation;to-validate-the-values-accepted-in-different-fields-in-my-profile-links;",
  "rows": [
    {
      "cells": [
        "URL",
        "URLDescription"
      ],
      "line": 30,
      "id": "wordpress-profile-validation;to-validate-the-values-accepted-in-different-fields-in-my-profile-links;;1"
    },
    {
      "cells": [
        "www.abc.com",
        "testsite abc"
      ],
      "line": 31,
      "id": "wordpress-profile-validation;to-validate-the-values-accepted-in-different-fields-in-my-profile-links;;2"
    },
    {
      "cells": [
        "www.abcd.com",
        "dummy site"
      ],
      "line": 32,
      "id": "wordpress-profile-validation;to-validate-the-values-accepted-in-different-fields-in-my-profile-links;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 128500,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "To Validate the values accepted in different fields in My Profile Links",
  "description": "",
  "id": "wordpress-profile-validation;to-validate-the-values-accepted-in-different-fields-in-my-profile-links;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@Sanity_01"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I entered the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I login with credentials",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I am redirected to the my Profile page of wordpress",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I entered different values for \"www.abc.com\" , \"testsite abc\" in profile Links",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.i_entered_the_url()"
});
formatter.result({
  "duration": 11149729900,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.i_login_with_credentials()"
});
formatter.result({
  "duration": 2540563300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.i_am_redirected_to_the_homepage_of_wordpress()"
});
formatter.result({
  "duration": 9121507400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "www.abc.com",
      "offset": 32
    },
    {
      "val": "testsite abc",
      "offset": 48
    }
  ],
  "location": "stepDefinition.i_entered_different_values_for_in_profile_Links(String,String)"
});
formatter.result({
  "duration": 2042277400,
  "status": "passed"
});
formatter.after({
  "duration": 249334000,
  "status": "passed"
});
formatter.before({
  "duration": 118300,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "To Validate the values accepted in different fields in My Profile Links",
  "description": "",
  "id": "wordpress-profile-validation;to-validate-the-values-accepted-in-different-fields-in-my-profile-links;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@Sanity_01"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I entered the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I login with credentials",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I am redirected to the my Profile page of wordpress",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I entered different values for \"www.abcd.com\" , \"dummy site\" in profile Links",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.i_entered_the_url()"
});
formatter.result({
  "duration": 8173355100,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.i_login_with_credentials()"
});
formatter.result({
  "duration": 2221879400,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.i_am_redirected_to_the_homepage_of_wordpress()"
});
formatter.result({
  "duration": 11957673800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "www.abcd.com",
      "offset": 32
    },
    {
      "val": "dummy site",
      "offset": 49
    }
  ],
  "location": "stepDefinition.i_entered_different_values_for_in_profile_Links(String,String)"
});
formatter.result({
  "duration": 1963343900,
  "status": "passed"
});
formatter.after({
  "duration": 4198190900,
  "status": "passed"
});
});
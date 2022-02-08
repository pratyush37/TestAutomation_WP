$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("myProfile.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Pratyush"
    }
  ],
  "line": 4,
  "name": "Wordpress Profile validation",
  "description": "",
  "id": "wordpress-profile-validation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 3,
      "name": "@Regression_MyProfile"
    }
  ]
});
formatter.scenarioOutline({
  "line": 71,
  "name": "To verify all the links present below the My Profile Link",
  "description": "",
  "id": "wordpress-profile-validation;to-verify-all-the-links-present-below-the-my-profile-link",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 70,
      "name": "@Reg_TC06"
    }
  ]
});
formatter.step({
  "line": 72,
  "name": "I entered the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 73,
  "name": "I login with credentials",
  "keyword": "When "
});
formatter.step({
  "line": 74,
  "name": "I am redirected to the my Profile page of wordpress",
  "keyword": "Then "
});
formatter.step({
  "line": 75,
  "name": "I validate that the required \"\u003cOptions\"\u003e are present on the webpage",
  "keyword": "And "
});
formatter.examples({
  "line": 77,
  "name": "",
  "description": "",
  "id": "wordpress-profile-validation;to-verify-all-the-links-present-below-the-my-profile-link;",
  "rows": [
    {
      "cells": [
        "Options"
      ],
      "line": 78,
      "id": "wordpress-profile-validation;to-verify-all-the-links-present-below-the-my-profile-link;;1"
    },
    {
      "cells": [
        "My Profile1"
      ],
      "line": 79,
      "id": "wordpress-profile-validation;to-verify-all-the-links-present-below-the-my-profile-link;;2"
    },
    {
      "cells": [
        "Account Settings"
      ],
      "line": 80,
      "id": "wordpress-profile-validation;to-verify-all-the-links-present-below-the-my-profile-link;;3"
    },
    {
      "cells": [
        "Purchases"
      ],
      "line": 81,
      "id": "wordpress-profile-validation;to-verify-all-the-links-present-below-the-my-profile-link;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 79301,
  "status": "passed"
});
formatter.scenario({
  "line": 79,
  "name": "To verify all the links present below the My Profile Link",
  "description": "",
  "id": "wordpress-profile-validation;to-verify-all-the-links-present-below-the-my-profile-link;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 70,
      "name": "@Reg_TC06"
    },
    {
      "line": 3,
      "name": "@Regression_MyProfile"
    }
  ]
});
formatter.step({
  "line": 72,
  "name": "I entered the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 73,
  "name": "I login with credentials",
  "keyword": "When "
});
formatter.step({
  "line": 74,
  "name": "I am redirected to the my Profile page of wordpress",
  "keyword": "Then "
});
formatter.step({
  "line": 75,
  "name": "I validate that the required \"\u003cOptions\"\u003e are present on the webpage",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.i_entered_the_url()"
});
formatter.result({
  "duration": 7357274500,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.i_login_with_credentials()"
});
formatter.result({
  "duration": 1769640599,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.i_am_redirected_to_the_homepage_of_wordpress()"
});
formatter.result({
  "duration": 8622213599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cOptions",
      "offset": 30
    }
  ],
  "location": "stepDefinition.i_validate_that_the_required_are_present_on_the_webpage(String)"
});
formatter.result({
  "duration": 161567700,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat Automation.StepDef.stepDefinition.i_validate_that_the_required_are_present_on_the_webpage(stepDefinition.java:133)\r\n\tat ✽.And I validate that the required \"\u003cOptions\"\u003e are present on the webpage(myProfile.feature:75)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 4453983700,
  "status": "passed"
});
formatter.before({
  "duration": 39099,
  "status": "passed"
});
formatter.scenario({
  "line": 80,
  "name": "To verify all the links present below the My Profile Link",
  "description": "",
  "id": "wordpress-profile-validation;to-verify-all-the-links-present-below-the-my-profile-link;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 70,
      "name": "@Reg_TC06"
    },
    {
      "line": 3,
      "name": "@Regression_MyProfile"
    }
  ]
});
formatter.step({
  "line": 72,
  "name": "I entered the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 73,
  "name": "I login with credentials",
  "keyword": "When "
});
formatter.step({
  "line": 74,
  "name": "I am redirected to the my Profile page of wordpress",
  "keyword": "Then "
});
formatter.step({
  "line": 75,
  "name": "I validate that the required \"\u003cOptions\"\u003e are present on the webpage",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.i_entered_the_url()"
});
formatter.result({
  "duration": 6555014001,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.i_login_with_credentials()"
});
formatter.result({
  "duration": 1725202099,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.i_am_redirected_to_the_homepage_of_wordpress()"
});
formatter.result({
  "duration": 8153046100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cOptions",
      "offset": 30
    }
  ],
  "location": "stepDefinition.i_validate_that_the_required_are_present_on_the_webpage(String)"
});
formatter.result({
  "duration": 127676401,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat Automation.StepDef.stepDefinition.i_validate_that_the_required_are_present_on_the_webpage(stepDefinition.java:133)\r\n\tat ✽.And I validate that the required \"\u003cOptions\"\u003e are present on the webpage(myProfile.feature:75)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 4420401999,
  "status": "passed"
});
formatter.before({
  "duration": 71300,
  "status": "passed"
});
formatter.scenario({
  "line": 81,
  "name": "To verify all the links present below the My Profile Link",
  "description": "",
  "id": "wordpress-profile-validation;to-verify-all-the-links-present-below-the-my-profile-link;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 70,
      "name": "@Reg_TC06"
    },
    {
      "line": 3,
      "name": "@Regression_MyProfile"
    }
  ]
});
formatter.step({
  "line": 72,
  "name": "I entered the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 73,
  "name": "I login with credentials",
  "keyword": "When "
});
formatter.step({
  "line": 74,
  "name": "I am redirected to the my Profile page of wordpress",
  "keyword": "Then "
});
formatter.step({
  "line": 75,
  "name": "I validate that the required \"\u003cOptions\"\u003e are present on the webpage",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.i_entered_the_url()"
});
formatter.result({
  "duration": 6506525600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.i_login_with_credentials()"
});
formatter.result({
  "duration": 1819756299,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.i_am_redirected_to_the_homepage_of_wordpress()"
});
formatter.result({
  "duration": 7935895599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cOptions",
      "offset": 30
    }
  ],
  "location": "stepDefinition.i_validate_that_the_required_are_present_on_the_webpage(String)"
});
formatter.result({
  "duration": 130208300,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat Automation.StepDef.stepDefinition.i_validate_that_the_required_are_present_on_the_webpage(stepDefinition.java:133)\r\n\tat ✽.And I validate that the required \"\u003cOptions\"\u003e are present on the webpage(myProfile.feature:75)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded2.png");

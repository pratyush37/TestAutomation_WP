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
  "line": 45,
  "name": "To Validate the delete functionality in My Profile - Links Section",
  "description": "",
  "id": "wordpress-profile-validation;to-validate-the-delete-functionality-in-my-profile---links-section",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 44,
      "name": "@Reg_TC03_01"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "I entered the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "I login with credentials",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "I am redirected to the my Profile page of wordpress",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "I clicked on Add button on Profile Links",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "I clicked on Add URL button",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I entered different values for \"\u003cURL\u003e\" , \"\u003cURLDescription\u003e\" in profile Links",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I clicked on Add Site",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I validate that Site is added successfully with \"\u003cURL\u003e\" , \"\u003cURLDescription\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "I clicked of delete \"\u003cURL\u003e\" on the links section",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "I validate that \"\u003cURL\u003e\" with \"\u003cDescription\u003e\"is deleted successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 57,
  "name": "",
  "description": "",
  "id": "wordpress-profile-validation;to-validate-the-delete-functionality-in-my-profile---links-section;",
  "rows": [
    {
      "cells": [
        "URL",
        "URLDescription"
      ],
      "line": 58,
      "id": "wordpress-profile-validation;to-validate-the-delete-functionality-in-my-profile---links-section;;1"
    },
    {
      "cells": [
        "www.abc.com",
        "testsite abc"
      ],
      "line": 59,
      "id": "wordpress-profile-validation;to-validate-the-delete-functionality-in-my-profile---links-section;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 94800,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "To Validate the delete functionality in My Profile - Links Section",
  "description": "",
  "id": "wordpress-profile-validation;to-validate-the-delete-functionality-in-my-profile---links-section;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Regression_MyProfile"
    },
    {
      "line": 44,
      "name": "@Reg_TC03_01"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "I entered the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "I login with credentials",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "I am redirected to the my Profile page of wordpress",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "I clicked on Add button on Profile Links",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "I clicked on Add URL button",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I entered different values for \"www.abc.com\" , \"testsite abc\" in profile Links",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I clicked on Add Site",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I validate that Site is added successfully with \"www.abc.com\" , \"testsite abc\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "I clicked of delete \"www.abc.com\" on the links section",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "I validate that \"www.abc.com\" with \"\u003cDescription\u003e\"is deleted successfully",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.i_entered_the_url()"
});
formatter.result({
  "duration": 7369066000,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.i_login_with_credentials()"
});
formatter.result({
  "duration": 1431374601,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.i_am_redirected_to_the_homepage_of_wordpress()"
});
formatter.result({
  "duration": 8569360601,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.i_clicked_on_Add_button_on_Profile_Links()"
});
formatter.result({
  "duration": 130738301,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.i_clicked_on_Add_URL_button()"
});
formatter.result({
  "duration": 129637299,
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
  "duration": 410248900,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.i_clicked_on_Add_Site()"
});
formatter.result({
  "duration": 10127537600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "www.abc.com",
      "offset": 49
    },
    {
      "val": "testsite abc",
      "offset": 65
    }
  ],
  "location": "stepDefinition.i_validate_that_Site_is_added_successfully_with(String,String)"
});
formatter.result({
  "duration": 2057661701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "www.abc.com",
      "offset": 21
    }
  ],
  "location": "stepDefinition.i_clicked_of_delete_on_the_links_section(String)"
});
formatter.result({
  "duration": 78052600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "www.abc.com",
      "offset": 17
    },
    {
      "val": "\u003cDescription\u003e",
      "offset": 36
    }
  ],
  "location": "stepDefinition.i_validate_that_with_is_deleted_successfully(String,String)"
});
formatter.result({
  "duration": 5180517100,
  "status": "passed"
});
formatter.after({
  "duration": 52041600,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d98.0.4758.82)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-FIF06I2G\u0027, ip: \u0027172.20.10.13\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.12\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 98.0.4758.82, chrome: {chromedriverVersion: 97.0.4692.71 (adefa7837d02a..., userDataDir: C:\\Users\\91956\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64043}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: d341b53b7c78c217e108f5022bced9fd\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:442)\r\n\tat Automation.DriverBase.SuiteBase.closeWebBrowser(SuiteBase.java:60)\r\n\tat Automation.Runner.Hooks.afterScenario(Hooks.java:40)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
});
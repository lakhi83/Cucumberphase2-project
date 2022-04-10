$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Saucedemo.feature");
formatter.feature({
  "name": "This feature Login feature scenario",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Validate the successful login using  multiple test data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I click on the Login link",
  "keyword": "When "
});
formatter.step({
  "name": "I enter the username \"\u003cUserName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click on the login Button",
  "keyword": "And "
});
formatter.step({
  "name": "I should be Landed on the home page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ]
    },
    {
      "cells": [
        "problem_user",
        "secret_sauce"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate the successful login using  multiple test data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Login link",
  "keyword": "When "
});
formatter.match({
  "location": "Loginstep.i_click_on_the_Login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the username \"standard_user\"",
  "keyword": "And "
});
formatter.match({
  "location": "Loginstep.i_enter_the_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the password \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "Loginstep.i_enter_the_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the login Button",
  "keyword": "And "
});
formatter.match({
  "location": "Loginstep.i_click_on_the_login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be Landed on the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginstep.i_should_be_Landed_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the successful login using  multiple test data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Login link",
  "keyword": "When "
});
formatter.match({
  "location": "Loginstep.i_click_on_the_Login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the username \"problem_user\"",
  "keyword": "And "
});
formatter.match({
  "location": "Loginstep.i_enter_the_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the password \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "Loginstep.i_enter_the_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the login Button",
  "keyword": "And "
});
formatter.match({
  "location": "Loginstep.i_click_on_the_login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be Landed on the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginstep.i_should_be_Landed_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify the error message we give incorrect  multiple test data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I click on the Login link",
  "keyword": "When "
});
formatter.step({
  "name": "I enter the username \"\u003cUserName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click on the login Button",
  "keyword": "And "
});
formatter.step({
  "name": "I should get error message as \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ]
    },
    {
      "cells": [
        "standard_user",
        "pqr@1234"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify the error message we give incorrect  multiple test data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Login link",
  "keyword": "When "
});
formatter.match({
  "location": "Loginstep.i_click_on_the_Login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the username \"standard_user\"",
  "keyword": "And "
});
formatter.match({
  "location": "Loginstep.i_enter_the_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the password \"pqr@1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "Loginstep.i_enter_the_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the login Button",
  "keyword": "And "
});
formatter.match({
  "location": "Loginstep.i_click_on_the_login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get error message as \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginstep.i_should_get_error_message_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/product.feature");
formatter.feature({
  "name": "This feature Lin feature scenario",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "open swag lab application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Login link",
  "keyword": "When "
});
formatter.match({
  "location": "Loginstep.i_click_on_the_Login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the username \"standard_user\"",
  "keyword": "And "
});
formatter.match({
  "location": "Loginstep.i_enter_the_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the password \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "Loginstep.i_enter_the_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the login Button",
  "keyword": "And "
});
formatter.match({
  "location": "Loginstep.i_click_on_the_login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be Landed on the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginstep.i_should_be_Landed_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "validate the product prices",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is on product page",
  "keyword": "When "
});
formatter.match({
  "location": "Productstep.user_is_on_product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user compare the following product price",
  "rows": [
    {
      "cells": [
        "Sauce Labs Backpack",
        "$29.99"
      ]
    },
    {
      "cells": [
        "Sauce Labs Bike Light",
        "$9.99"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Productstep.user_compare_the_following_product_price(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
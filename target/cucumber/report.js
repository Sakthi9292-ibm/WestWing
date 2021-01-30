$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Product_search.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: sakthivel.ts.9292@gmail.com"
    }
  ],
  "line": 2,
  "name": "WestWing product search Userstory",
  "description": "",
  "id": "westwing-product-search-userstory",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Search product",
  "description": "",
  "id": "westwing-product-search-userstory;search-product",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@SmokeTest"
    },
    {
      "line": 9,
      "name": "@ProductSearch"
    },
    {
      "line": 9,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I search for \u003cproduct\u003e in home page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I should see product listing page showing \u003cnumber of items\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "westwing-product-search-userstory;search-product;",
  "rows": [
    {
      "cells": [
        "product",
        "number of items"
      ],
      "line": 15,
      "id": "westwing-product-search-userstory;search-product;;1"
    },
    {
      "cells": [
        "\"Mobel\"",
        "2308"
      ],
      "line": 16,
      "id": "westwing-product-search-userstory;search-product;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6833266200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on the WestWing page",
  "rows": [
    {
      "cells": [
        "page"
      ],
      "line": 6
    },
    {
      "cells": [
        "HomePage"
      ],
      "line": 7
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "Common_Step_Definitions.i_am_on_the_WestWing_page(DataTable)"
});
formatter.result({
  "duration": 8155989500,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Search product",
  "description": "",
  "id": "westwing-product-search-userstory;search-product;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@ProductSearch"
    },
    {
      "line": 9,
      "name": "@SmokeTest"
    },
    {
      "line": 9,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I search for \"Mobel\" in home page",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I should see product listing page showing 2308",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Mobel",
      "offset": 14
    }
  ],
  "location": "Product_Search_Stepdefinitions.i_search_for_in_home_page(String)"
});
formatter.result({
  "duration": 17316280500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2308",
      "offset": 42
    }
  ],
  "location": "Product_Search_Stepdefinitions.i_should_see_product_listing_page_showing(int)"
});
formatter.result({
  "duration": 15091340000,
  "error_message": "junit.framework.AssertionFailedError: expected:\u003c2308\u003e but was:\u003c2311\u003e\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.failNotEquals(Assert.java:329)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:78)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:234)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:241)\r\n\tat testAutomation.StepDefinitions.Product_Search_Stepdefinitions.i_should_see_product_listing_page_showing(Product_Search_Stepdefinitions.java:50)\r\n\tat ✽.Then I should see product listing page showing 2308(Product_search.feature:12)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "Search product and login to add",
  "description": "",
  "id": "westwing-product-search-userstory;search-product-and-login-to-add",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@SmokeTest"
    },
    {
      "line": 18,
      "name": "@productSearch"
    },
    {
      "line": 18,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I search for \u003cproduct\u003e in home page",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click on the wishlist icon of the \u003cproduct_number\u003est/nd/rd found product",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I should see the login form of overlay",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "westwing-product-search-userstory;search-product-and-login-to-add;",
  "rows": [
    {
      "cells": [
        "product",
        "product_number"
      ],
      "line": 25,
      "id": "westwing-product-search-userstory;search-product-and-login-to-add;;1"
    },
    {
      "cells": [
        "\"Mobel\"",
        "1"
      ],
      "line": 26,
      "id": "westwing-product-search-userstory;search-product-and-login-to-add;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1820265900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on the WestWing page",
  "rows": [
    {
      "cells": [
        "page"
      ],
      "line": 6
    },
    {
      "cells": [
        "HomePage"
      ],
      "line": 7
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "Common_Step_Definitions.i_am_on_the_WestWing_page(DataTable)"
});
formatter.result({
  "duration": 8720198300,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Search product and login to add",
  "description": "",
  "id": "westwing-product-search-userstory;search-product-and-login-to-add;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@productSearch"
    },
    {
      "line": 18,
      "name": "@SmokeTest"
    },
    {
      "line": 18,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I search for \"Mobel\" in home page",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click on the wishlist icon of the 1st/nd/rd found product",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I should see the login form of overlay",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Mobel",
      "offset": 14
    }
  ],
  "location": "Product_Search_Stepdefinitions.i_search_for_in_home_page(String)"
});
formatter.result({
  "duration": 16985784900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 36
    }
  ],
  "location": "Product_Search_Stepdefinitions.i_click_on_the_wishlist_icon_of_the_st_nd_rd_found_product(int)"
});
formatter.result({
  "duration": 42599784100,
  "status": "passed"
});
formatter.match({
  "location": "Product_Search_Stepdefinitions.i_should_see_the_login_form_of_overlay()"
});
formatter.result({
  "duration": 556176400,
  "status": "passed"
});
formatter.uri("adding_to_wishlist.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: sakthivel.ts.9292@gmail.com"
    }
  ],
  "line": 2,
  "name": "WestWing wishlist Userstory",
  "description": "",
  "id": "westwing-wishlist-userstory",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "deleting from wishlist after login",
  "description": "",
  "id": "westwing-wishlist-userstory;deleting-from-wishlist-after-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@Login"
    },
    {
      "line": 9,
      "name": "@Wishlist"
    },
    {
      "line": 9,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I search for \u003cproduct\u003e in home page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on the wishlist icon of the \u003cproduct_number\u003est/nd/rd found product",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see the login form of overlay",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I log in with First Name Last Name and Email",
  "rows": [
    {
      "cells": [
        "field",
        "value"
      ],
      "line": 15
    },
    {
      "cells": [
        "First Name",
        "UserFname"
      ],
      "line": 16
    },
    {
      "cells": [
        "Password",
        "UserPassword"
      ],
      "line": 17
    },
    {
      "cells": [
        "Email",
        "UserEmail"
      ],
      "line": 18
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I go to the worklist",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I should be able to delete product from wishlist",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "westwing-wishlist-userstory;deleting-from-wishlist-after-login;",
  "rows": [
    {
      "cells": [
        "product",
        "product_number"
      ],
      "line": 23,
      "id": "westwing-wishlist-userstory;deleting-from-wishlist-after-login;;1"
    },
    {
      "cells": [
        "\"Mobel\"",
        "1"
      ],
      "line": 24,
      "id": "westwing-wishlist-userstory;deleting-from-wishlist-after-login;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1462167500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on the WestWing page",
  "rows": [
    {
      "cells": [
        "page"
      ],
      "line": 6
    },
    {
      "cells": [
        "HomePage"
      ],
      "line": 7
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "Common_Step_Definitions.i_am_on_the_WestWing_page(DataTable)"
});
formatter.result({
  "duration": 8230166400,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "deleting from wishlist after login",
  "description": "",
  "id": "westwing-wishlist-userstory;deleting-from-wishlist-after-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@Login"
    },
    {
      "line": 9,
      "name": "@Wishlist"
    },
    {
      "line": 9,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I search for \"Mobel\" in home page",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on the wishlist icon of the 1st/nd/rd found product",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see the login form of overlay",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I log in with First Name Last Name and Email",
  "rows": [
    {
      "cells": [
        "field",
        "value"
      ],
      "line": 15
    },
    {
      "cells": [
        "First Name",
        "UserFname"
      ],
      "line": 16
    },
    {
      "cells": [
        "Password",
        "UserPassword"
      ],
      "line": 17
    },
    {
      "cells": [
        "Email",
        "UserEmail"
      ],
      "line": 18
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I go to the worklist",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I should be able to delete product from wishlist",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Mobel",
      "offset": 14
    }
  ],
  "location": "Product_Search_Stepdefinitions.i_search_for_in_home_page(String)"
});
formatter.result({
  "duration": 17299483500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 36
    }
  ],
  "location": "Product_Search_Stepdefinitions.i_click_on_the_wishlist_icon_of_the_st_nd_rd_found_product(int)"
});
formatter.result({
  "duration": 43553976200,
  "status": "passed"
});
formatter.match({
  "location": "Product_Search_Stepdefinitions.i_should_see_the_login_form_of_overlay()"
});
formatter.result({
  "duration": 553546100,
  "status": "passed"
});
formatter.match({
  "location": "Wishlist_and_Login_Stepdefinitions.i_log_in_with_First_Name_Last_Name_and_Email(DataTable)"
});
formatter.result({
  "duration": 6596976900,
  "status": "passed"
});
formatter.match({
  "location": "Wishlist_and_Login_Stepdefinitions.i_go_to_the_worklist()"
});
formatter.result({
  "duration": 8667571600,
  "status": "passed"
});
formatter.match({
  "location": "Wishlist_and_Login_Stepdefinitions.i_should_be_able_to_delete_product_from_wishlist()"
});
formatter.result({
  "duration": 353698400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 27,
  "name": "add to wishlist after login",
  "description": "",
  "id": "westwing-wishlist-userstory;add-to-wishlist-after-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@Login"
    },
    {
      "line": 26,
      "name": "@Wishlist"
    },
    {
      "line": 26,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I search for \u003cproduct\u003e in home page",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I click on the wishlist icon of the \u003cproduct_number\u003est/nd/rd found product",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should see the login form of overlay",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I log in with First Name Last Name and Email",
  "rows": [
    {
      "cells": [
        "field",
        "value"
      ],
      "line": 32
    },
    {
      "cells": [
        "First Name",
        "UserFname"
      ],
      "line": 33
    },
    {
      "cells": [
        "Password",
        "UserPassword"
      ],
      "line": 34
    },
    {
      "cells": [
        "Email",
        "UserEmail"
      ],
      "line": 35
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "product should be visible on the wishlist",
  "keyword": "Then "
});
formatter.examples({
  "line": 39,
  "name": "",
  "description": "",
  "id": "westwing-wishlist-userstory;add-to-wishlist-after-login;",
  "rows": [
    {
      "cells": [
        "product",
        "product_number"
      ],
      "line": 40,
      "id": "westwing-wishlist-userstory;add-to-wishlist-after-login;;1"
    },
    {
      "cells": [
        "\"Mobel\"",
        "1"
      ],
      "line": 41,
      "id": "westwing-wishlist-userstory;add-to-wishlist-after-login;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1972338200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on the WestWing page",
  "rows": [
    {
      "cells": [
        "page"
      ],
      "line": 6
    },
    {
      "cells": [
        "HomePage"
      ],
      "line": 7
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "Common_Step_Definitions.i_am_on_the_WestWing_page(DataTable)"
});
formatter.result({
  "duration": 8678011400,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "add to wishlist after login",
  "description": "",
  "id": "westwing-wishlist-userstory;add-to-wishlist-after-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@Login"
    },
    {
      "line": 26,
      "name": "@Wishlist"
    },
    {
      "line": 26,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I search for \"Mobel\" in home page",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I click on the wishlist icon of the 1st/nd/rd found product",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should see the login form of overlay",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I log in with First Name Last Name and Email",
  "rows": [
    {
      "cells": [
        "field",
        "value"
      ],
      "line": 32
    },
    {
      "cells": [
        "First Name",
        "UserFname"
      ],
      "line": 33
    },
    {
      "cells": [
        "Password",
        "UserPassword"
      ],
      "line": 34
    },
    {
      "cells": [
        "Email",
        "UserEmail"
      ],
      "line": 35
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "product should be visible on the wishlist",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Mobel",
      "offset": 14
    }
  ],
  "location": "Product_Search_Stepdefinitions.i_search_for_in_home_page(String)"
});
formatter.result({
  "duration": 17614448500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 36
    }
  ],
  "location": "Product_Search_Stepdefinitions.i_click_on_the_wishlist_icon_of_the_st_nd_rd_found_product(int)"
});
formatter.result({
  "duration": 43315035100,
  "status": "passed"
});
formatter.match({
  "location": "Product_Search_Stepdefinitions.i_should_see_the_login_form_of_overlay()"
});
formatter.result({
  "duration": 606387900,
  "status": "passed"
});
formatter.match({
  "location": "Wishlist_and_Login_Stepdefinitions.i_log_in_with_First_Name_Last_Name_and_Email(DataTable)"
});
formatter.result({
  "duration": 7016727100,
  "status": "passed"
});
formatter.match({
  "location": "Wishlist_and_Login_Stepdefinitions.product_should_be_visible_on_the_wishlist()"
});
formatter.result({
  "duration": 11762202100,
  "status": "passed"
});
});
#Author: Pratyush

Feature: Wordpress Profile validation
  
    Scenario:  To validate the navigation to my profile page of word press
    Given I entered the URL
    And I login with credentials
    Then I am redirected to the my Profile page of wordpress


    Scenario Outline: To Validate the values accepted in different fields in My Profile page
    Given I entered the URL
    And I login with credentials
    Then I am redirected to the my Profile page of wordpress
    And I entered different values for "<FirstName>" , "<LastName>" ,"<DisplayName>","<AboutMe>"
    
    Examples:
    |FirstName|LastName|DisplayName|AboutMe|
    |    11111|  12132 | Prats | I am a tester|
    | First123| Last123| dsfsd | Dummy11232312|

    @Sanity_01
    Scenario Outline: To Validate the values accepted in different fields in My Profile Links
    Given I entered the URL
    And I login with credentials
    Then I am redirected to the my Profile page of wordpress
    And I entered different values for "<URL>" , "<URLDescription>" in profile Links
    
    Examples:
    |URL|URLDescription|
    |www.abc.com| testsite abc | 
    |www.abcd.com| dummy site|

    
    
#Author: Pratyush

@Regression_MyProfile
Feature: Wordpress Profile validation
  
	@Reg_TC01
    Scenario:  To validate the successful navigation to my profile page of word press
    Given I entered the URL
    When I login with credentials
    Then I am redirected to the my Profile page of wordpress


	@Reg_TC02
    Scenario Outline: To Validate the values accepted in different fields in My Profile - Profile Section
    Given I entered the URL
    When I login with credentials
    Then I am redirected to the my Profile page of wordpress
    When I entered different values for "<FirstName>" , "<LastName>" ,"<DisplayName>","<AboutMe>"
    And I click on Save Profile Details
    Then I validate that values are saved and confirmation message "Settings saved successfully!" is populated  
    
    Examples:
    |FirstName|LastName|DisplayName|AboutMe|
    |    1211|  12232 | Prats | I am a tester|
    | Fi2t123| Last123| dsfsd | Dum2y11232312|


	@Reg_TC03
    Scenario Outline: To Validate the values accepted in My Profile - Links Add URL Section
    Given I entered the URL
    When I login with credentials
    Then I am redirected to the my Profile page of wordpress
    When I clicked on Add button on Profile Links
    And I clicked on Add URL button 
    And  I entered different values for "<URL>" , "<URLDescription>" in profile Links
    And I clicked on Add Site
    Then I validate that Site is added successfully with "<URL>" , "<URLDescription>"
    
    Examples:
    |URL|URLDescription|
    |www.abc.com| testsite abc | 
    |www.abcd.com| dummy site|

	@Reg_TC04
    Scenario Outline: To Validate the delete functionality in My Profile - Links Section
    Given I entered the URL
    When I login with credentials
    Then I am redirected to the my Profile page of wordpress
    When I clicked on Add button on Profile Links
    And I clicked on Add URL button 
    And  I entered different values for "<URL>" , "<URLDescription>" in profile Links
    And I clicked on Add Site
    Then I validate that Site is added successfully with "<URL>" , "<URLDescription>"
    When I clicked of delete "<URL>" on the links section
    Then I validate that "<URL>" with "<Description>"is deleted successfully
    
    Examples:
		|URL|URLDescription|
    |www.abc.com| testsite abc | 
    |www.abcd.com| dummy site|

    
	@Reg_TC05
    Scenario: To Validate the Toggle of Hide my Gravatar Profile
    Given I entered the URL
    When I login with credentials
    Then I am redirected to the my Profile page of wordpress
    When I clicked on Toggle button of Gravatar Profile
    Then  I checked that Save Profile Details is enabled
    When I click on Save Profile Details
    Then I validate that values are saved and confirmation message "Settings saved successfully!" is populated  
    
    
	@Reg_TC06
    Scenario: To Validate the values accepted in  in My Profile - Links Add Wordpress Section
    Given I entered the URL
    When I login with credentials
    Then I am redirected to the my Profile page of wordpress
    When I clicked on Add button on Profile Links to add "myauttest101.wordpress.com"
    And I clicked on Add WordPress Site button 
    And  I checked the default website of "myauttest101.wordpress.com"
    And I clicked on Add wordpress Site
    Then I validate that Site is added successfully with URL "myauttest101.wordpress.com" and description "Testing Website"
    
	@Reg_TC07
    Scenario Outline: To verify all the links present below the My Profile Link
    Given I entered the URL
    When I login with credentials
    Then I am redirected to the my Profile page of wordpress
    And I validate that the required "<Options"> are present on the webpage
    
    Examples:
    |Options|
    |My Profile|
    |Account Settings|
    |Purchases|
    |Security|
    |Privacy|
    |Manage Blogs|
    |Notification Settings|
    |Blocked Sites|
    |Get Apps|

    
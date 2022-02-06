package Automation.StepDef;

import static org.junit.Assert.*;
import java.io.IOException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import Automation.Actions.myprofile_Actions;
import Automation.DriverBase.SuiteBase;
import Automation.PageObjects.LoginPage_PageObjects;
import Automation.PageObjects.MyProfile_PageObjects;
import Automation.Utilities.Common_Functions;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;


public class stepDefinition extends SuiteBase {
	@Given("I entered the URL")
	public void i_entered_the_url() throws InterruptedException, IOException {
		SuiteBase.loadURL();
	}

	@Given("^I login with credentials$")
	public void i_login_with_credentials() throws Throwable {
		PageFactory.initElements(SuiteBase.driver, LoginPage_PageObjects.class);
		myprofile_Actions.EnterValueinEditBox(LoginPage_PageObjects.UserIDBox,SuiteBase.getValueFromProperty("EmailID"));
		myprofile_Actions.ClickOnButton(LoginPage_PageObjects.ContinueBtn);
		myprofile_Actions.EnterValueinEditBox(LoginPage_PageObjects.PasswordBox,Common_Functions.decryptPassword(SuiteBase.getValueFromProperty("EncryptedPassword")));
		myprofile_Actions.ClickOnButton(LoginPage_PageObjects.LogInBtn);
		//Thread.sleep(10000);
	}

	@Then("I am redirected to the my Profile page of wordpress")
	public void i_am_redirected_to_the_homepage_of_wordpress() {
		PageFactory.initElements(SuiteBase.driver, MyProfile_PageObjects.class);
		myprofile_Actions.waitForPageLoad(MyProfile_PageObjects.HeaderMyProfile);
		assertEquals(driver.getTitle(),"My Profile — WordPress.com");
	}
	
	@Then("^I entered different values for \"([^\"]*)\" , \"([^\"]*)\" ,\"([^\"]*)\",\"([^\"]*)\"$")
	public void i_entered_different_values_for(String firstName, String lastName, String displayName, String aboutMe) throws Throwable {
		PageFactory.initElements(SuiteBase.driver, MyProfile_PageObjects.class);
		myprofile_Actions.EnterValueinEditBox(MyProfile_PageObjects.firstNameBox , firstName);
		myprofile_Actions.EnterValueinEditBox(MyProfile_PageObjects.lastNameBox , lastName);
		myprofile_Actions.EnterValueinEditBox(MyProfile_PageObjects.displayNameBox , displayName);
		myprofile_Actions.EnterValueinEditBox(MyProfile_PageObjects.aboutMeBox , aboutMe);
		myprofile_Actions.ClickOnButton(MyProfile_PageObjects.submitMyProfile);
		assertEquals(MyProfile_PageObjects.successMessage.getText(),"Settings saved successfully!");
	}
	
	@Then("^I entered different values for \"([^\"]*)\" , \"([^\"]*)\" in profile Links$")
	public void i_entered_different_values_for_in_profile_Links(String URL, String Description) throws Throwable {
		PageFactory.initElements(SuiteBase.driver, MyProfile_PageObjects.class);
		myprofile_Actions.ClickOnButton(MyProfile_PageObjects.addBtn);
		myprofile_Actions.ClickOnButton(MyProfile_PageObjects.addURLBtn);
		myprofile_Actions.EnterValueinEditBox(MyProfile_PageObjects.addURLBox ,URL);
		myprofile_Actions.EnterValueinEditBox(MyProfile_PageObjects.addDescriptionBox ,Description);
		myprofile_Actions.ClickOnButton(MyProfile_PageObjects.addSiteBtn);
	}
}

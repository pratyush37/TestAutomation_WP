package Automation.StepDef;

import static org.junit.Assert.*;
import java.io.IOException;
import org.openqa.selenium.support.PageFactory;
import Automation.Actions.myprofile_Actions;
import Automation.DriverBase.SuiteBase;
import Automation.PageObjects.LoginPage_PageObjects;
import Automation.PageObjects.MyProfile_PageObjects;
import Automation.Utilities.Common_Functions;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class stepDefinition extends SuiteBase {
	@Given("I entered the URL")
	public void i_entered_the_url() throws InterruptedException, IOException {
		SuiteBase.loadURL();
	}

	@Given("^I login with credentials$")
	public void i_login_with_credentials() throws Throwable {
		PageFactory.initElements(SuiteBase.driver, LoginPage_PageObjects.class);
		myprofile_Actions.EnterValueinEditBox(LoginPage_PageObjects.UserIDBox,
				SuiteBase.getValueFromProperty("EmailID"));
		myprofile_Actions.ClickOnButton(LoginPage_PageObjects.ContinueBtn);
		myprofile_Actions.EnterValueinEditBox(LoginPage_PageObjects.PasswordBox,
				Common_Functions.decryptPassword(SuiteBase.getValueFromProperty("EncryptedPassword")));
		myprofile_Actions.ClickOnButton(LoginPage_PageObjects.LogInBtn);
	}

	@Then("I am redirected to the my Profile page of wordpress")
	public void i_am_redirected_to_the_homepage_of_wordpress() {
		PageFactory.initElements(SuiteBase.driver, MyProfile_PageObjects.class);
		myprofile_Actions.waitForPageLoad(MyProfile_PageObjects.HeaderMyProfile);
		assertEquals(driver.getTitle(), "My Profile — WordPress.com");
	}

	@Then("^I entered different values for \"([^\"]*)\" , \"([^\"]*)\" ,\"([^\"]*)\",\"([^\"]*)\"$")
	public void i_entered_different_values_for(String firstName, String lastName, String displayName, String aboutMe)
			throws Throwable {
		PageFactory.initElements(SuiteBase.driver, MyProfile_PageObjects.class);
		myprofile_Actions.EnterValueinEditBox(MyProfile_PageObjects.firstNameBox, firstName);
		myprofile_Actions.EnterValueinEditBox(MyProfile_PageObjects.lastNameBox, lastName);
		myprofile_Actions.EnterValueinEditBox(MyProfile_PageObjects.displayNameBox, displayName);
		myprofile_Actions.EnterValueinEditBox(MyProfile_PageObjects.aboutMeBox, aboutMe);
	}

	@Then("^I entered different values for \"([^\"]*)\" , \"([^\"]*)\" in profile Links$")
	public void i_entered_different_values_for_in_profile_Links(String URL, String Description) throws Throwable {
		PageFactory.initElements(SuiteBase.driver, MyProfile_PageObjects.class);

		myprofile_Actions.EnterValueinEditBox(MyProfile_PageObjects.addURLBox, URL);
		myprofile_Actions.EnterValueinEditBox(MyProfile_PageObjects.addDescriptionBox, Description);
	}

	@When("^I click on Save Profile Details$")
	public void i_click_on_Save_Profile_Details() throws Throwable {
		myprofile_Actions.ClickOnButton(MyProfile_PageObjects.submitMyProfile);
	}

	@Then("^I validate that values are saved and confirmation message \"([^\"]*)\" is populated$")
	public void i_validate_that_values_are_saved_and_confirmation_message_is_populated(String Message)
			throws Throwable {
		PageFactory.initElements(SuiteBase.driver, MyProfile_PageObjects.class);
		assertEquals(MyProfile_PageObjects.successMessage.getText(), Message);
	}

	@When("^I clicked on Add button on Profile Links$")
	public void i_clicked_on_Add_button_on_Profile_Links() throws Throwable {
		myprofile_Actions.ClickOnButton(MyProfile_PageObjects.addBtn);
	}

	@When("^I clicked on Add URL button$")
	public void i_clicked_on_Add_URL_button() throws Throwable {
		myprofile_Actions.ClickOnButton(MyProfile_PageObjects.addURLBtn);
	}

	@When("^I clicked on Add Site$")
	public void i_clicked_on_Add_Site() throws Throwable {
		myprofile_Actions.ClickOnButton(MyProfile_PageObjects.addSiteBtn);
		Thread.sleep(10000);
	}

	@Then("^I validate that Site is added successfully with \"([^\"]*)\" , \"([^\"]*)\"$")
	public void i_validate_that_Site_is_added_successfully_with(String URL, String Description) throws Throwable {
		assertTrue(myprofile_Actions.presenceOfURLonLinks(URL, Description));
	}

	@When("^I clicked on Toggle button of Gravatar Profile$")
	public void i_clicked_on_Toggle_button_of_Gravatar_Profile() throws Throwable {
		myprofile_Actions.flipToggle();
	}

	@Then("^I checked that Save Profile Details is enabled$")
	public void i_checked_that_Save_Profile_Details_is_enabled() throws Throwable {
		assertTrue(myprofile_Actions.isButtonEnabled(MyProfile_PageObjects.submitMyProfile));
	}

	@When("^I checked the default website of \"([^\"]*)\"$")
	public void i_checked_the_default_website_of(String defaultweb) throws Throwable {
		myprofile_Actions.ClickOnButton(MyProfile_PageObjects.wordpressCheckbox);
	}

	@When("^I clicked on Add WordPress Site button$")
	public void i_clicked_on_Add_WordPress_Site_button() throws Throwable {
		myprofile_Actions.ClickOnButton(MyProfile_PageObjects.addWordPressBtn);
	}

	@Then("^I validate that Site is added successfully with URL \"([^\"]*)\" and description \"([^\"]*)\"$")
	public void i_validate_that_Site_is_added_successfully_with_URL_and_description(String URL, String Description)
			throws Throwable {
		assertTrue(myprofile_Actions.presenceOfURLonLinks(URL, Description));
	}

	@When("^I clicked on Add wordpress Site$")
	public void i_clicked_on_Add_wordpress_Site() throws Throwable {
		PageFactory.initElements(SuiteBase.driver, MyProfile_PageObjects.class);
		MyProfile_PageObjects.addwordpressSite.click();
	}

	@When("^I clicked on Add button on Profile Links to add \"([^\"]*)\"$")
	public void i_clicked_on_Add_button_on_Profile_Links_to_add(String URL) throws Throwable {
		myprofile_Actions.deleteURLonLinks(URL);
		myprofile_Actions.ClickOnButton(MyProfile_PageObjects.addBtn);
	}

	@Then("^I validate that the required \"([^\"]*)\"> are present on the webpage$")
	public void i_validate_that_the_required_are_present_on_the_webpage(String Option) throws Throwable {
		assertTrue(myprofile_Actions.optionPresentonmyProfile(Option));
	}

	@When("^I clicked of delete \"([^\"]*)\" on the links section$")
	public void i_clicked_of_delete_on_the_links_section(String URL) throws Throwable {
		myprofile_Actions.deleteURLonLinks(URL);
	}

	@Then("^I validate that \"([^\"]*)\" with \"([^\"]*)\"is deleted successfully$")
	public void i_validate_that_with_is_deleted_successfully(String URL, String Description) throws Throwable {
		assertFalse(myprofile_Actions.presenceOfURLonLinks(URL, Description));
	}

}

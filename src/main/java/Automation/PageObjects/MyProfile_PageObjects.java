package Automation.PageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.*;

public class MyProfile_PageObjects {

	@FindBy(how = How.XPATH, using = "//*[@class='formatted-header__title wp-brand-font']")
	public static WebElement HeaderMyProfile;
	
	@FindBy(how = How.XPATH, using = "//*[@id='first_name']")
	public static WebElement firstNameBox;
	
	@FindBy(how = How.XPATH, using = "//*[@id='last_name']")
	public static WebElement lastNameBox;
	
	@FindBy(how = How.XPATH, using = "//*[@id='display_name']")
	public static WebElement displayNameBox;
	
	@FindBy(how = How.XPATH, using = "//*[@id='description']")
	public static WebElement aboutMeBox;
	
	@FindBy(how = How.XPATH, using = "//*[@type='submit']")
	public static WebElement submitMyProfile;
	
	@FindBy(how = How.XPATH, using = "//*[@class='button is-compact']")
	public static WebElement addBtn;
	
	@FindBy(how = How.XPATH, using = "//button[contains(text(),'Add URL')]")
	public static WebElement addURLBtn;
	
	
	@FindBy(how = How.XPATH, using = "//*[@class='form-text-input profile-links-add-other__value']")
	public static WebElement addURLBox;
	
	@FindBy(how = How.XPATH, using = "//*[@class='form-text-input profile-links-add-other__title']")
	public static WebElement addDescriptionBox;
	
	@FindBy(how = How.XPATH, using = "//*[@class='button profile-links-add-other__add form-button is-primary']")
	public static WebElement addSiteBtn;
	
	@FindBy(how = How.XPATH, using = "//*[@class='button profile-links-add-other__cancel form-button']")
	public static WebElement cancelSiteBtn;
	
	@FindBy(how = How.XPATH, using = "//*[@class='notice__text']")
	public static WebElement successMessage;
	
	
}

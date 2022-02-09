package Automation.PageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import Automation.DriverBase.SuiteBase;

public class LoginPage_PageObjects {
	public static WebDriver driver = SuiteBase.driver;
	@FindBy(how = How.XPATH, using = "//*[@id='usernameOrEmail']")
	public static WebElement UserIDBox;

	@FindBy(how = How.XPATH, using = "//*[@class='button form-button is-primary']")
	public static WebElement ContinueBtn;

	@FindBy(how = How.XPATH, using = "//*[@id='password']")
	public static WebElement PasswordBox;

	@FindBy(how = How.XPATH, using = "//button[@class='button form-button is-primary']")
	public static WebElement LogInBtn;

}

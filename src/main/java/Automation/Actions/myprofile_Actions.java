package Automation.Actions;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.google.common.base.Predicate;

import Automation.DriverBase.SuiteBase;

public class myprofile_Actions extends SuiteBase {
	static WebDriverWait wait = new WebDriverWait(driver,100);
	
	public static void ClickOnButton(WebElement element) {
		wait.until(ExpectedConditions.elementToBeClickable(element));
		element.click();
	}
	
	
	public static void EnterValueinEditBox(WebElement element , String Value) throws InterruptedException {
		wait.until(ExpectedConditions.refreshed(ExpectedConditions.elementToBeClickable(element)));
		element.click();
		element.clear();
		element.sendKeys(Value);
	}
	
	public static void waitForPageLoad(WebElement element) {
		wait.until(ExpectedConditions.visibilityOf(element));
	}


}

package Automation.Actions;

import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.google.common.base.Predicate;

import Automation.DriverBase.SuiteBase;
import Automation.PageObjects.MyProfile_PageObjects;

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

	public static boolean presenceOfURLonLinks(String URL , String Description) {
		List<WebElement> listOfURL= driver.findElements(By.xpath("//*[@class='profile-links__list']/li"));
		for(WebElement element : listOfURL) {
			if(element.getText().contains(URL) && element.getText().contains(Description)) {
				break;
			}
			continue;
		}
		return true;
	}
	
	public static void flipToggle() {
		MyProfile_PageObjects.toggleChecker.click();;
	}
	
	public static boolean isButtonEnabled(WebElement element) {
		return element.isEnabled();
	}
	
	public static boolean deleteURLonLinks(String URL) {
		List<WebElement> listOfURL= driver.findElements(By.xpath("//*[@class='profile-links__list']/li"));
		int counter = 1;
		for(WebElement element : listOfURL) {
			if(element.getText().contains(URL)) {
				element.findElement(By.xpath("//*[@class='profile-links__list']//following::*[@class='gridicon gridicons-cross']["+ counter +"]")).click();
				break;
			}
			counter++;
			continue;
		}
		return true;
	}
	
	public static boolean optionPresentonmyProfile(String Option) {
		boolean b = false;
		List<WebElement> listOfURL= driver.findElements(By.xpath("//*[@class='sidebar__menu']//span"));
		for(WebElement element : listOfURL) {
			System.out.println(element.getText());
			if(element.getText().contains(Option)) {

				b = true;
				break;
			}
			continue;
		}
		return b;
	}
	
}

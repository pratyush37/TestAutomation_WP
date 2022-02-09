package Automation.DriverBase;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.cucumber.listener.Reporter;

public class SuiteBase {
	public static Properties Parameter = null;
	public static WebDriver driver = null;
	public static Logger Add_Log = null;

	public static void init() throws IOException {

		// PropertyReader
		Parameter = new Properties();
		FileInputStream FIS = new FileInputStream(
				System.getProperty("user.dir") + "//src//main//java//Automation//Properties//parameter.properties");
		Parameter = new Properties();
		Parameter.load(FIS);

		// Logger
		String log4jConfigPath = System.getProperty("user.dir")
				+ "//src//main//java//Automation//Properties//log4j.properties";
		PropertyConfigurator.configure(log4jConfigPath);
		Add_Log = Logger.getLogger("rootLogger");
		Add_Log.info("Logger configured Successfully");
		Reporter.addStepLog("Logger configured Successfully");
	}

	public static void loadWebBrowser() {
		if(Parameter.getProperty("BrowserName").equalsIgnoreCase("Chrome")) {
			System.setProperty("webdriver.chrome.driver",
					System.getProperty("user.dir") + "//src//test//Resources//Drivers//chromedriver.exe");
			driver = new ChromeDriver();
			Add_Log.info("Chrome Driver Loaded Successfully");
			Reporter.addStepLog("Chrome Driver configured Successfully");
		}
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.manage().window().fullscreen();
	}

	public static void loadURL() throws IOException {
		init();
		loadWebBrowser();
		driver.get(Parameter.getProperty("URL"));
		Add_Log.info("URL Loaded successfully" + Parameter.getProperty("URL"));
	}

	public static void closeWebBrowser() {
		driver.close();
	}

	public static String getValueFromProperty(String inputvalue) {
		return Parameter.getProperty(inputvalue);

	}

}

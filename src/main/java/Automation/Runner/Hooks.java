package Automation.Runner;

import java.io.File;
import java.io.IOException;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import com.cucumber.listener.Reporter;

import Automation.DriverBase.SuiteBase;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.apache.commons.io.FileUtils;

public class Hooks {

	@Before
	public void beforeScenario(Scenario scenario) {
	}

	@After
	public void afterScenario(Scenario scenario) throws IOException {
		if (scenario.isFailed()) {
			TakesScreenshot screenshot = ((TakesScreenshot) SuiteBase.driver);
			File SrcFile = screenshot.getScreenshotAs(OutputType.FILE);
			File DestFile = new File(
					System.getProperty("user.dir") + "/target/cucumber/" + scenario.getName() + ".png");
			try {
				FileUtils.copyFile(SrcFile, DestFile);
			} catch (IOException e) {
				e.printStackTrace();
			}
			final byte[] screenshotReport = ((TakesScreenshot) SuiteBase.driver).getScreenshotAs(OutputType.BYTES);
			scenario.embed(screenshotReport, "image/png");
			Reporter.addScreenCaptureFromPath(
					System.getProperty("user.dir") + "/target/cucumber/" + scenario.getName() + ".png",
					"Failed Screenshot");
		}
		SuiteBase.closeWebBrowser();
	}
}

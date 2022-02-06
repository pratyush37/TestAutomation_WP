package Automation.Runner;



import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/Resources/FeatureFiles"
		,glue={"Automation"}
		,monochrome = true
				,tags = {"@Sanity_01"}
				,dryRun = false
				,format = { "pretty","html:cucumber-html-reports",
                "json:cucumber-html-reports/cucumber.json" ,
                "com.cucumber.listener.ExtentCucumberFormatter:cucumber-html-reports/report.html"}
		)
public class TestRunner {
    

}


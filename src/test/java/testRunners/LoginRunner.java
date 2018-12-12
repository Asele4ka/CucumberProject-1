package testRunners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = {"src/test/resources/feature"}
	, glue = {"stepDefinition"}
	, monochrome =true
	, plugin = {"pretty", "html:test-output"}
	, dryRun=true)

public class LoginRunner {

}

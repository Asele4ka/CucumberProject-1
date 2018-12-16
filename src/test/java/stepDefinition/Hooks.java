package stepDefinition;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {

	@Before
	public void start(Scenario scenario) {
		System.out.println("Starting execution");
		System.out.println(scenario.getName());
	}

	@After
	public void stop(Scenario scenario) {
		System.out.println("Ending execution");
		System.out.println(scenario.getName());
		System.out.println(scenario.getStatus());
	}
}

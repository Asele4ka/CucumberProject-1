package com.syntax.cucumberproject.test.stepDefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginSteps {
	WebDriver driver;

	@Given("^I open browser$")
	public void i_open_browser() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "src/test/resources/drivers/chromedriver");
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.manage().window().fullscreen();// for windows use .maximize
	}

	@Given("^I navigate to the FreeCrm$")
	public void i_navigate_to_the_FreeCrm() throws Throwable {
		driver.get("");
	}

	@When("^I enter valid username and password$")
	public void i_enter_valid_username_and_password() throws Throwable {
		driver.findElement(By.name("username")).sendKeys("");
		driver.findElement(By.name("password")).sendKeys("");
	}

	@When("^I click login button$")
	public void i_click_login_button() throws Throwable {
		System.out.println("clicked on login");
	}

	@Then("^I successfully logged in$")
	public void i_successfully_logged_in() throws Throwable {
		System.out.println("Successful login");
	}

	@When("^I enter invalid username and password$")
	public void i_enter_invalid_username_and_password() throws Throwable {
		System.out.println("Entered invalid username and password");
	}

	public void i_still_see_sign_up_link() throws Throwable {
		System.out.println("Sign up link is displayed");
	}
}

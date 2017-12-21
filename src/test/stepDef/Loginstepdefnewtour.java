package test.stepDef;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;
import test.Util.Base;

import static test.PageObjects.LoginPage.login;

public class Loginstepdefnewtour extends Base{

    @Given("^user is on Login Page$")
    public void user_is_on_Login_Page() {
        openBrowser("http://newtours.demoaut.com/");
    }

    @When("^login page title is Welcome: Mercury Tours$")
    public void title_of_login_page(){
        System.out.println(PageTitle());
        Assert.assertTrue(PageTitle().contains("Welcome:"));
    }

    @Then("^fill user as \"([^\"]*)\" and pwd as \"([^\"]*)\" and click on sign-in button$")
    public void user_enters_invalid(String username, String password) {
        login(username, password);
    }

    @Then("^user should be on Find a Flight page$")
    public void user_should_be_on_Find_a_Flight_page(){
        System.out.println(PageTitle());
        Assert.assertTrue(PageTitle().contains("Find a Flight:"));
    }

    @Then("^user should be on Sign-on page$")
    public void user_should_be_on_Sign_on_page(){
        System.out.println(PageTitle());
        Assert.assertTrue(PageTitle().contains("Sign-on:"));
    }

    @Then("^close the browser$")
    public void closethebrowser(){
        quitBrowser();
    }

}

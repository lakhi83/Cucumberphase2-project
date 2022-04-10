package stepDefs;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Loginstep {
	
	 WebDriver driver =BaseclassBasedemo.driver;

@When("I click on the Login link")
public void i_click_on_the_Login_link() {
	
	System.out.println("Landed on saucedemo");
  
}

@When("I enter the username {string}")
public void i_enter_the_username(String UserName1 ) {
	WebElement UserName = driver.findElement(By.name("user-name"));
	UserName.sendKeys(UserName1);
	
}

@When("I enter the password {string}")
public void i_enter_the_password(String password1) {
	
	WebElement Password = driver.findElement(By.id("password"));
	 Password.sendKeys( password1);
	
   
}

@When("I click on the login Button")
public void i_click_on_the_login_Button() {
	WebElement LoginBtn = driver.findElement(By.name("login-button"));
	LoginBtn.click();
	
}

@Then("I should be Landed on the home page")
public void i_should_be_Landed_on_the_home_page() {
	
	System.out.println("Succesufull login");
   
}

@Then("I should get error message as {string}")
public void i_should_get_error_message_as(String string) {
    
	WebElement ErrorMsg=driver.findElement(By.xpath("//h3[@data-test='error']"));
	
	String ActualMsg = ErrorMsg.getText();
	String ExpMsg = "Epic sadface: Username and password do not match any user in this service";
	
	Assert.assertEquals(ActualMsg, ExpMsg);
	
}

}

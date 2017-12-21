package test.PageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import test.Util.Base;

public class LoginPage extends Base {
    static WebElement element = null;

    public static WebElement txt_username(){
        try{
            return driver.findElement(By.name("userName"));
        }catch(Exception e){return null;}
    }

    public static WebElement txt_password(){
        try{
            return driver.findElement(By.name("password"));
        }catch(Exception e){return null;}
    }

    public static WebElement btn_signin(){
        try{
            return driver.findElement(By.name("login"));
        }catch(Exception e){return null;}
    }

    public static void login(String username, String password){
        txt_username().sendKeys(username);
        txt_password().sendKeys(password);
        btn_signin().click();
    }


}

package test.Util;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Base {

    public static WebDriver driver;

    public static void openBrowser(String url){
        System.setProperty("webdriver.chrome.driver","c:\\Grid\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.get(url);
        driver.manage().window().maximize();
        //return driver;
    }

    protected static void quitBrowser() {
        for (String winHandle : driver.getWindowHandles()) {
            try {
                driver.switchTo().window(winHandle);
                driver.close();
                driver.quit();
            } catch (Exception e) {
            }
        }
    }

    public String PageTitle(){
        return driver.getTitle();
    }

    public void click(String text) {
        click(By.linkText(text));
    }

    public void click(By by) {
        driver.findElement(by).click();
    }


}

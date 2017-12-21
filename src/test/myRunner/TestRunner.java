package test.myRunner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

//@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/features/loginnewtour.feature", //the path of the feature files
        glue={"test.stepDef"}, //the path of the step definition files
        plugin= {"pretty","html:test-outout"}, //to generate different types of reporting
        monochrome = true, //display the console output in a proper readable format
        strict = true, //it will check if any step is not defined in step definition file
        dryRun = false //to check the mapping is proper between feature file and step def file
)

public class TestRunner extends AbstractTestNGCucumberTests{

}




//https://www.youtube.com/watch?v=I3Ga5jICTHw&index=3&list=PLFGoYjJG_fqoBFPevCDZDCufDX5h-o3yO
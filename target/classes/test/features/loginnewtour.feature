Feature: mercury Tours Login Test
  Scenario: Valid Login testing
    Given user is on Login Page
    When login page title is Welcome: Mercury Tours
    Then fill user as "mercury" and pwd as "mercury" and click on sign-in button
    Then user should be on Find a Flight page
    And close the browser

  Scenario Outline: Invalid Login testing
    Given user is on Login Page
    When login page title is Welcome: Mercury Tours
    Then fill user as "<username>" and pwd as "<password>" and click on sign-in button
    Then user should be on Sign-on page
    And close the browser

    Examples: Invalid data
    |username |password |
    |mercury |mercury123 |
    |s123@#$ |s123 |






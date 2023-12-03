Feature: Creacion de un nuevo tag

@user1 @web
Scenario: Como usuario quiero crear un nuevo tag en la aplicacion
  Given I navigate to page "http://137.184.28.168/ghost/#/signin"
  And I wait for 1 seconds and take a screenshot
  When I log in with email "<USERNAME>" and password "<PASSWORD>"
  And I wait for 1 seconds and take a screenshot
  And I click changeConfiguration
  And I wait for 1 seconds and take a screenshot
  And I click option integrations
  And I wait for 1 seconds and take a screenshot
  And I click Add custom integration
  And I wait for 1 seconds and take a screenshot
  And I enter name add integration "Duolingo"
  And I wait for 1 seconds and take a screenshot
  And I click save integration
  And I wait for 1 seconds and take a screenshot
  And I click save and close integration
  And I wait for 1 seconds and take a screenshot
  Then I should see the text "Doulingo"
  And I wait for 2 seconds and take a screenshot

Feature: Validar integraciones con Duolingo


@user1 @web
Scenario: Como usuario quiero validar si existe la integracion don Duolingo
  Given I navigate to page "<URL>"
  When I log in with email "<USERNAME>" and password "<PASSWORD>"
  And I click changeConfiguration
  And I click option integrations
  And I click Add custom integration
  And I enter name add integration "Duolingo"
  And I click save integration
  And I click save and close integration
  Then I should see the text "Doulingo"
  
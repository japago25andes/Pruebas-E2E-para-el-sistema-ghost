Feature: Validar integraciones random


@user1 @web
Scenario: Como usuario quiero modificar las integraciones
  Given I navigate to page "<URL>"
  When I log in with email "<USERNAME>" and password "<PASSWORD>"
  And I click changeConfiguration
  And I click option integrations
  And I click Add custom integration
  When I add integration ramdom
  And I click save integration
  And I click save and close integration
  
  
Feature: Validar numero de configuraciones disponibles


@user1 @web
Scenario: Como usuario quiero validar si existe la integracion don Duolingo
  Given I navigate to page "<URL>"
  When I log in with email "<USERNAME>" and password "<PASSWORD>"
  And I click changeConfiguration
  Then I spect this number settings "12"
  And I wait for 10 seconds


  
  
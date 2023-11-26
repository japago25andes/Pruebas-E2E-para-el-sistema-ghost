Feature: Cambiar la zona configurada para el sitio

@user1 @web
Scenario: Como usuario quiero poder editar la configuracion GMC del sitio
  Given I navigate to page "<URL>"
  And I wait for 2 seconds
  When I log in with email "<USERNAME>" and password "<PASSWORD>"
  And I wait for 2 seconds
  When I click changeConfiguration
  And I click generalConfiguration
  And I click Site timezone Expand
  When I select GMT "(GMC) UTC"
  And I click save
  And I wait for 2 seconds

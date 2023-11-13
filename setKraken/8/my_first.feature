Feature: Cambiar titulo y descripcion del sitio

@user1 @web
Scenario: Como usuario quiero poder editar el nombre del sitio y descripcion
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 2 seconds
  When I enter email "<USERNAME>"
  And I enter password "<PASSWORD>"
  And I click next
  
  And I wait for 2 seconds
  When I click changeConfiguration
  And I click generalConfiguration
  And I click siteConfigurationExpand

  When I enter siteConfigurationTittle "MISO 3"
  And I click save
  And I wait for 2 seconds

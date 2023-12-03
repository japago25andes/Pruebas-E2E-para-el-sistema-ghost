Feature: Cambiar titulo y descripcion del sitio

@user1 @web
Scenario: Como usuario quiero poder editar el nombre del sitio y descripcion
  Given I navigate to page "<URL>"
  And I wait for 2 seconds
  When I log in with email "<USERNAME>" and password "<PASSWORD>"
  
  And I wait for 2 seconds
  When I click changeConfiguration
  And I click generalConfiguration
  And I click siteConfigurationExpand

  When I enter siteConfigurationTittle "MISO 3"
  And I click save
  And I wait for 2 seconds

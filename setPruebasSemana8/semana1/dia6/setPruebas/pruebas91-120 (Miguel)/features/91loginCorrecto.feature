Feature: Ingreso correcto 

@user1 @web
Scenario: Como usuario quiero validar el acceso correcto al sitio
  Given I navigate to page "<URL>"
  And I wait for 2 seconds
  When I enter email "<USERNAME>"
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 2 seconds
  Then I should main "Settings"
  
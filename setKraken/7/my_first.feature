Feature: Modo oscuro

@user1 @web
Scenario: Como usuario quiero validar si el modo oscuro funciona
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 2 seconds
  When I enter email "<USERNAME>"
  And I enter password "<PASSWORD>"
  And I click next
  And I wait for 2 seconds
  Then I click darkModeN
  And I wait for 1 seconds
  Then I click darkModeD
  And I wait for 2 seconds

Feature: Cambio de nombre de perfil

@user3 @web
Scenario: Como usuario quiero cambiar mi nombre de perfil
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 2 seconds
  When I enter email "<USERNAME>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 2 seconds
  Then I click user
  And I wait for 2 seconds
  Then I click profile
  And I wait for 2 seconds
  When I clear and enter name profile "Carlos Campos"
  And I wait for 2 seconds
  And I click save profile
  And I wait for 1 seconds

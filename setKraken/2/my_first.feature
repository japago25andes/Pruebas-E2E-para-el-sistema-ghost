Feature: Creacion de un nuevo draft

@user2 @web
Scenario: Como usuario quiero crear un nuevo draft en la aplicacion
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 2 seconds
  When I enter email "<USERNAME>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 2 seconds
  Then I click drafts
  And I wait for 2 seconds
  And I click new drafts
  And I wait for 2 seconds
  Then I enter title "Nuevo draft"
  And I wait for 2 seconds
  Then I enter post "<LOREM>"
  And I wait for 2 seconds
  And I click publish
  And I wait for 2 seconds
  And I click continue
  And I wait for 2 seconds
  And I click confirmation
  And I wait for 1 seconds

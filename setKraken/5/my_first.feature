Feature: Creacion nuevo member

@user1 @web
Scenario: Como usuario quiero crear un nuevo usuario
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 2 seconds
  When I enter email "<USERNAME>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 2 seconds
  Then I select the option members
  And I wait for 2 seconds
  And I click new member
  And I wait for 2 seconds
  When I enter name member "Andres Casillas"
  And I wait for 2 seconds
  And I enter email member "andres@yahoo.es"
  And I wait for 2 seconds
  And I enter note "<LOREM>"
  And I wait for 2 seconds
  And I click save member
  And I wait for 1 seconds
Feature: Creacion de un nuevo miembro

@user1 @web
Scenario: Como usuario quiero crear un nuevo miembro en la aplicacion
  Given I navigate to page "<URL>"
  And I wait for 1 seconds and take a screenshot
  When I log in with email "<USERNAME>" and password "<PASSWORD>"
  And I wait for 1 seconds and take a screenshot
  Then I select the option members
  And I wait for 1 seconds and take a screenshot
  And I click new member
  And I wait for 1 seconds and take a screenshot
  When I enter name member "Andres Casillas"
  And I wait for 1 seconds and take a screenshot
  And I enter email member "andreSS@yahoo.es"
  And I wait for 1 seconds and take a screenshot
  And I enter note "<LOREM>"
  And I wait for 1 seconds and take a screenshot
  And I click save member
  And I wait for 1 seconds and take a screenshot
  Then I should see the button with class "gh-btn gh-btn-primary gh-btn-icon gh-btn-green ember-view"
  And I wait for 1 seconds and take a screenshot

Feature: Creacion de un nuevo tag

@user1 @web
Scenario: Como usuario quiero crear un nuevo tag en la aplicacion
  Given I navigate to page "http://137.184.28.168/ghost/#/signin"
  And I wait for 1 seconds and take a screenshot
  When I log in with email "<USERNAME>" and password "<PASSWORD>"
  And I wait for 1 seconds and take a screenshot
  Then I click tags
  And I wait for 1 seconds and take a screenshot
  And I click new tag
  And I wait for 1 seconds and take a screenshot
  Then I enter name "Camiones"
  And I wait for 1 seconds and take a screenshot
  And I enter color "38C52D"
  And I wait for 1 seconds and take a screenshot
  And I enter description "<LOREM>"
  And I wait for 1 seconds and take a screenshot
  And I click save
  And I wait for 1 seconds and take a screenshot
  Then I should see the button with class "gh-btn gh-btn-primary gh-btn-icon gh-btn-green ember-view"
  And I wait for 1 seconds and take a screenshot

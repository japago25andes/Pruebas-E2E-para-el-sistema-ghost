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
  Then I enter a random name for the tag
  And I wait for 1 seconds and take a screenshot
  And I enter a random color for the tag
  And I wait for 1 seconds and take a screenshot
  And I enter a random description for the tag
  And I wait for 1 seconds and take a screenshot
  And I click save
  And I wait for 1 seconds and take a screenshot
  Then I should see the button with class "gh-btn gh-btn-primary gh-btn-icon gh-btn-green ember-view"
  And I wait for 1 seconds and take a screenshot
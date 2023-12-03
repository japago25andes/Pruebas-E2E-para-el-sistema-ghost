Feature: Modificacion de tag

@user1 @web
Scenario: Como usuario quiero poder modificar un tag
  Given I navigate to page "http://137.184.28.168/ghost/#/signin"
  And I wait for 1 seconds and take a screenshot
  When I log in with email "<USERNAME>" and password "<PASSWORD>"
  And I wait for 1 seconds and take a screenshot
  Then I click tags
  And I wait for 1 seconds and take a screenshot
  And I click ContenidoX...
  And I wait for 1 seconds and take a screenshot
  Then I enter name "Motores V12"
  And I wait for 1 seconds and take a screenshot
  And I click save
  And I wait for 1 seconds and take a screenshot
  Then I should see the button with class "gh-btn gh-btn-primary gh-btn-icon gh-btn-green ember-view"
  And I wait for 1 seconds and take a screenshot


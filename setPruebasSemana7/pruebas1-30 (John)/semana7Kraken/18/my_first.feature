Feature: Edicion de un nuevo tag

@user1 @web
Scenario: Como usuario quiero editar un nuevo tag en la aplicacion
  Given I navigate to page "http://137.184.28.168/ghost/#/signin"
  And I wait for 1 seconds and take a screenshot
  When I log in with email "<USERNAME>" and password "<PASSWORD>"
  And I wait for 1 seconds and take a screenshot
  Then I click tags
  And I wait for 1 seconds and take a screenshot
  And I selected the tag edition
  And I wait for 1 seconds and take a screenshot
  Then I enter name "Aviones"
  And I wait for 1 seconds and take a screenshot
  And I enter color "c32c8c"
  And I wait for 1 seconds and take a screenshot
  And I enter description "<LOREM>"
  And I wait for 1 seconds and take a screenshot
  And I click save
  And I wait for 1 seconds and take a screenshot
  Then I should see the button with class "gh-btn gh-btn-primary gh-btn-icon gh-btn-green ember-view"
  And I wait for 1 seconds and take a screenshot

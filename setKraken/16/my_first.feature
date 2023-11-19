Feature: Creacion de un nuevo draft

@user1 @web
Scenario: Como usuario quiero crear un nuevo draft
  Given I navigate to page "http://137.184.28.168/ghost/#/signin"
  And I wait for 1 seconds and take a screenshot
  When I log in with email "<USERNAME>" and password "<PASSWORD>"
  And I wait for 1 seconds and take a screenshot
  Then I click drafts
  And I wait for 1 seconds and take a screenshot
  And I click new drafts
  And I wait for 1 seconds and take a screenshot
  Then I enter title "Nuevo draft"
  And I wait for 1 seconds and take a screenshot
  Then I enter post "<LOREM>"
  And I wait for 1 seconds and take a screenshot
  And I click publish
  And I wait for 1 seconds and take a screenshot
  And I click continue
  And I wait for 1 seconds and take a screenshot
  And I click confirmation
  And I wait for 1 seconds and take a screenshot
  Then I should see the text "Boom."
  And I wait for 1 seconds and take a screenshot


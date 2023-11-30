Feature: Cambio de nombre de perfil

@user1 @web
Scenario: Como usuario quiero cambiar mi nombre de perfil
  Given I navigate to page "http://137.184.28.168/ghost/#/signin"
  And I wait for 1 seconds and take a screenshot
  When I log in with email "<USERNAME>" and password "<PASSWORD>"
  And I wait for 1 seconds and take a screenshot
  Then I click user
  And I wait for 1 seconds and take a screenshot
  Then I click profile
  And I wait for 1 seconds and take a screenshot
  When I clear and enter name profile "Carlos Campos"
  And I wait for 1 seconds and take a screenshot
  And I click save profile
  And I wait for 1 seconds and take a screenshot
  Then the element with class "flex flex-col" should contain the text "Campos"
  And I wait for 1 seconds and take a screenshot


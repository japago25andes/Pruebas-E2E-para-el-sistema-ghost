Feature: Listar los tags existentes

@user1 @web
Scenario: Como usuario quiero listar los tags existentes en la aplicacion
  Given I navigate to page "http://137.184.28.168/ghost/#/signin"
  And I wait for 1 seconds and take a screenshot
  When I log in with email "<USERNAME>" and password "<PASSWORD>"
  And I wait for 1 seconds and take a screenshot
  Then I click tags
  And I wait for 1 seconds and take a screenshot
  Then I should see the text "Tags"
  And I wait for 1 seconds and take a screenshot

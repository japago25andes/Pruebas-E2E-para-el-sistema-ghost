Feature: Listar publicaciones

@user1 @web
Scenario: Como usuario quiero listar las publicaciones
  Given I navigate to page "http://137.184.28.168/ghost/#/signin"
  And I wait for 1 seconds and take a screenshot
  When I log in with email "<USERNAME>" and password "<PASSWORD>"
  And I wait for 1 seconds and take a screenshot
  And I click options post
  And I wait for 1 seconds and take a screenshot
  And I should see the text "Post"
  And I wait for 1 seconds and take a screenshot
  
  
Feature: Cambiar el nombre de l sitio

@user1 @web
Scenario: Como usuario quiero poder cambiar el nombre de sitio
  Given I navigate to page "http://137.184.28.168/ghost/#/signin"
  And I wait for 1 seconds and take a screenshot
  When I log in with email "<USERNAME>" and password "<PASSWORD>"
  And I wait for 1 seconds and take a screenshot
  When I click changeConfiguration
  And I wait for 1 seconds and take a screenshot
  And I click generalConfiguration
  And I wait for 1 seconds and take a screenshot
  And I clear and enter name site "MISO 333"
  And I wait for 1 seconds and take a screenshot
  And I click save tittle
  And I wait for 1 seconds and take a screenshot
  Then the element with class "flex items-center mt-1" should contain the text "MISO"
  And I wait for 1 seconds and take a screenshot



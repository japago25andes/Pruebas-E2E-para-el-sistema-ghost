Feature: Cambio de estilo de la pagina

@user1 @web
Scenario: Como usuario quiero cambiar el estilo de uso de la pagina
  Given I navigate to page "http://137.184.28.168/ghost/#/signin"
  And I wait for 1 seconds and take a screenshot
  When I log in with email "<USERNAME>" and password "<PASSWORD>"
  And I wait for 1 seconds and take a screenshot
  Then I click darkModeN
  And I wait for 1 seconds and take a screenshot
  Then I click darkModeD
  And I wait for 1 seconds and take a screenshot
  


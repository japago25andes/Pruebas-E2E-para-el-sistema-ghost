Feature: Edicion de un tag existente

@user1 @web
Scenario: Como usuario quiero editar un tag existente
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 2 seconds
  When I enter email "<USERNAME>"
  And I enter password "<PASSWORD>"
  And I click next
  And I wait for 2 seconds
  Then I click tags
  And I wait for 2 seconds
  And I click ContenidoX...
  And I wait for 2 seconds
  Then I enter name "Motores V12"
  And I wait for 2 seconds
  And I click save
  And I wait for 1 seconds
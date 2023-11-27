Feature: Edicion de un tag existente con datos random

@user1 @web
Scenario: Como usuario quiero editar un tag existente
  Given I navigate to page "<URL>"
  And I wait for 2 seconds
  When I log in with email "<USERNAME>" and password "<PASSWORD>"
  And I wait for 2 seconds
  Then I click tags
  And I wait for 2 seconds
  And I click ContenidoX...
  And I wait for 2 seconds
  When I change content tag random
  And I wait for 2 seconds
  And I click save
  And I wait for 1 seconds
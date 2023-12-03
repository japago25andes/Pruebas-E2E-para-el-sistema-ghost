Feature: Creacion de un nuevo tag

@user1 @web
Scenario: Como usuario quiero crear un nuevo tag en la aplicacion
  Given I navigate to page "<URL>"
  And I wait for 2 seconds
  When I enter email "<USERNAME>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 2 seconds
  Then I click tags
  And I wait for 2 seconds
  And I click new tag
  And I wait for 2 seconds
  Then I enter name "Motores"
  And I wait for 2 seconds
  And I enter color "38C52D"
  And I wait for 2 seconds
  And I enter description "<CONTENIDO>"
  And I wait for 2 seconds
  And I click save
  And I wait for 1 seconds


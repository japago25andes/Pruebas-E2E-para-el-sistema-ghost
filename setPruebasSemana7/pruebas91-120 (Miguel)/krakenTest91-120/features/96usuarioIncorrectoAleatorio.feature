Feature: Validacion de ingreso usuario incorrecto

@user1 @web
Scenario: Como usuario quiero saber que se valida el acceso incorrecto
  Given I navigate to page "<URL>"
  And I wait for 2 seconds
  
  And I login random
  
  And I wait for 2 seconds
  And I click next
  And I wait for 2 seconds
  Then I spect to "There is no user with that email address."
  And I wait for 700 seconds
Feature: Validacion de ingreso exceso de intentos

@user1 @web
Scenario: Como usuario quiero crear un nuevo tag en la aplicacion
  Given I navigate to page "<URL>"
  And I wait for 2 seconds
  And I generate Member
  And I wait for 2 seconds
  And I click next
  And I wait for 2 seconds
  And I generate Member
  And I wait for 2 seconds
  And I generate Member
  Then I spect to "Too many login attempts"
  And I wait for 50000 seconds
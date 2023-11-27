Feature: Validacion de ingreso con datos de frontera

@user1 @web
Scenario: Como usuario quiero validar el limite del ingreso del login
   Given I navigate to page "<URL>"
  And I wait for 2 seconds
  Then I log in with random frontera
  And I wait for 2 seconds
  And I click next
  And I wait for 2 seconds
  Then I spect to login frontera "Please fill out the form to sign in."
  And I wait for 10 seconds

  
  
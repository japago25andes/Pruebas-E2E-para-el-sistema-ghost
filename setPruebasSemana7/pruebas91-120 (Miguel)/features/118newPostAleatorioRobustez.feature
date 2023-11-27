Feature: Creacion de un nuevo post - prueba de robustez

@user1 @web
Scenario: Como usuario quiero crear un nuevo post ingresando datos de frontera
  Given I navigate to page "<URL>"
  And I wait for 1 seconds
  When I log in with email "<USERNAME>" and password "<PASSWORD>"
  And I wait for 2 seconds
  And I click post
  And I wait for 2 seconds
  And I click new post
  And I wait for 2 seconds
  And I enter name post content random
  And I wait for 2 seconds
  When I click save post ramdom
  Then I spect to "Validation failed: Title cannot be longer than 255 characters."
  And I wait for 10 seconds

  




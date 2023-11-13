Feature: Creacion de un nuevo post

@user4 @web
Scenario: Como usuario quiero cambiar mi nombre de perfil
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 2 seconds
  When I enter email "<USERNAME>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 2 seconds
  Then I select the option to create a new post
  And I wait for 2 seconds
  When I enter title "Nuevo post"
  And I wait for 2 seconds
  And I enter post "<LOREM>"
  And I wait for 2 seconds
  And I click publish
  And I wait for 2 seconds
  And I click continue
  And I wait for 2 seconds
  And I click confirmation
  And I wait for 1 seconds


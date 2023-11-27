Feature: Creacion de un nuevo tag datos de frontera

@user1 @web
Scenario: Como usuario quiero crear un nuevo tag en la aplicacion
  Given I navigate to page "<URL>"
  And I wait for 2 seconds
  When I log in with email "<USERNAME>" and password "<PASSWORD>"
  And I wait for 2 seconds
  Then I click tags
  And I wait for 2 seconds
  And I click new tag
  And I wait for 2 seconds
  
  When I create tag blank
  And I wait for 2 seconds
  And I click save
  And I wait for 1 seconds
  Then I spect to new tag "You must specify a name for the tag."

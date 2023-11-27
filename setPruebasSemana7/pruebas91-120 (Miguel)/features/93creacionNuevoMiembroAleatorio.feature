Feature: Creacion de un nuevo miembro aleatorio

@user1 @web
Scenario: Como usuario quiero crear un nuevo miembro en la aplicacion
  Given I navigate to page "<URL>"
  When I log in with email "<USERNAME>" and password "<PASSWORD>"
  And I select the option members
  And I click new member
  And I generate Member
  And I enter note "<LOREM>"
  And I click save member
  
  

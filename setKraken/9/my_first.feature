Feature: Invite person to staff Contributor

@user1 @web
Scenario: Como usuario poder enviar la invitacion a una persona para colaborar
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 2 seconds
  When I enter email "<USERNAME>"
  And I enter password "<PASSWORD>"
  And I click next
  
  And I wait for 2 seconds
  When I click changeConfiguration
  And I click staff
  And I click invite people

  Then I enter email invite staff "invitado@uniandes.edu.co"
  And I click Contributor staff
  And Send invitation staff
  And I wait for 15 seconds
  

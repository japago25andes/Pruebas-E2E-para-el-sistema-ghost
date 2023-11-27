Feature: Invite person to staff Contributor ramdom

@user1 @web
Scenario: Como usuario poder enviar la invitacion a una persona para colaborar
  Given I navigate to page "<URL>"
  And I wait for 2 seconds
  When I log in with email "<USERNAME>" and password "<PASSWORD>"
  
  And I wait for 2 seconds
  When I click changeConfiguration
  And I click staff
  And I click invite people

  Then I enter email invite staff random
  And I click Contributor staff
  And Send invitation staff
  And I wait for 15 seconds
  

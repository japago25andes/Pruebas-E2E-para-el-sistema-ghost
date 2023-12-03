Feature: Revoke person to staff Contributor

@user1 @web
Scenario: Como usuario poder cancelar la invitacion para contribuir
  Given I navigate to page "<URL>"
  And I wait for 2 seconds
  When I enter email "<USERNAME>"
  And I enter password "<PASSWORD>"
  And I click next
  
  And I wait for 2 seconds
  When I click changeConfiguration
  And I click staff
  And Revoke people invitation

Feature: Revocar invitacion a un colaborador

@user1 @web
Scenario: Como usuario quiero revocar la invicion a un nuevo colaborador
  Given I navigate to page "http://137.184.28.168/ghost/#/signin"
  And I wait for 1 seconds and take a screenshot
  When I log in with email "<USERNAME>" and password "<PASSWORD>"
  And I wait for 1 seconds and take a screenshot
  When I click changeConfiguration
  And I wait for 1 seconds and take a screenshot
  And I click staff
  And I wait for 1 seconds and take a screenshot
  And I revoke people invitation
  And I wait for 1 seconds and take a screenshot
  
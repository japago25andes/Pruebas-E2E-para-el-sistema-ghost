Feature: Invitar a un nuevo colaborador

@user1 @web
Scenario: Como usuario quiero inivitar a un nuevo colaborador
  Given I navigate to page "http://137.184.28.168/ghost/#/signin"
  And I wait for 1 seconds and take a screenshot
  When I log in with email "<USERNAME>" and password "<PASSWORD>"
  And I wait for 1 seconds and take a screenshot
  When I click changeConfiguration
  And I wait for 1 seconds and take a screenshot
  And I click staff
  And I wait for 1 seconds and take a screenshot
  And I invite people
  And I wait for 1 seconds and take a screenshot
  And I click email invite
  And I wait for 1 seconds and take a screenshot
  And I clear and enter name profile "controles@gmail.com"
  And I wait for 1 seconds and take a screenshot
  And I click send invitation
  When I wait for 1 seconds and take a screenshot
  

Feature: Edicion de un tag existente con datos random

@user1 @web
Scenario: Como usuario quiero editar un tag existente
  Given I navigate to page "<URL>"
  And I wait for 2 seconds
  When I log in with email "<USERNAME>" and password "<PASSWORD>"
  And I wait for 2 seconds
  And I click post
  And I wait for 2 seconds
  And I select first item post
  And I enter name post content random ok
  When I click save post ramdom
  Then I spect to new tag ok "Ready, set, publish."
  And I wait for 10 seconds
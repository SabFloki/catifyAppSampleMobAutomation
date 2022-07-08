Feature: List of cats

    Background:
        Given I launch the app
        And I want to see a cats list page

    @androidApp
    Scenario: Launch app and verify the list of cats
        Then I should see name and image for list of cats
        And errors should be seen if API is down
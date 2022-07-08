Feature: Cat Detail

    Background:
        Given I launch the app
        And I want to see a cats list page

    @androidApp,@androidBSP
    Scenario: Launch app and tap on a cat from the list to see more detailed information
        When I tap on "<cat>" from the list
        Then I should see the detailed information of that cat
        When I tap on back button
        Then I should see the list of cats page
        And errors should be seen if API is down
        Examples:
            | cat    |
            | Cymric |
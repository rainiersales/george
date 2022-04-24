Feature: Search feature sample scenario

Scenario Template: As an authenticated user, I should be able to search a transaction by "<brand>"
    Given I go the George demo page and login
    When I search for "<brand>"
    Then I should be able to see "<results>" for that brand

    Examples:
        | brand   | results           |
        | liftago | liftago           |
        |         | no transactions   |
        | fake    | no search results |
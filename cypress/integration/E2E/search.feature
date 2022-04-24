Feature: Search feature sample

Scenario Template: As an authenticated user, I should be able to search a transaction by "<brand>"
    Given I go the George demo page and login
    When I search for "<brand>"
    Then I should be able to see "<results>" for that brand

    Examples:
        | brand   | results |
        | liftago | liftago |
        | dm      | dm      |

Scenario: As an authenticated user, I should be able to see no search results
    Given I go the George demo page and login
    When I search for "fake brand"
    Then I should be able to see no search results

Scenario: As an authenticated user, I should be able to search and see no transactions in my results
    Given I go the George demo page and login
    When I search for ""
    Then I should be able to no transactions in my results
    
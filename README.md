# Overview
In this project we provide the tests for the search functionality* in george App.

## fixtures:
Fixtures are used to store test data which can then be used throughout the tests. Usually, the data is stored in [JSON format](https://www.w3schools.com/js/js_json_intro.asp).

## integration:
Test files are located in cypress/integration by default. 

## plugins:
This folder includes index.ts file. This file will be automatically imported every time before the execution of every spec(test) file. Plugins enable you to tap into, modify, or extend the internal behavior of Cypress. You can check out the use cases for plugins from the cypress official docs.

## support:
This folder contains index.ts and reusable methods available to help in the implementation of the scenarios.

Our support folder is a great place to put reusable behavior such as custom commands or global overrides that you want to be applied and available to all your test files.


# Scenarios for search feature:

* Scenario: As an authenticated user, I should be able to search a transaction by "brand"
* Scenario: As an authenticated user, I should be able to search a transaction by "Category"
* Scenario: As an authenticated user, I should be able to search a transaction by "user" acount
* Scenario: As an authenticated user, I should be able to filter my search by date
* Scenario: As an authenticated user, I should be able to filter my search by search by amount
* Scenario: As an authenticated user, I should be able to filter my search by highlighted transactions
* Scenario: As an authenticated user, I should be able to filter my search by incoming transacations
* Scenario: As an authenticated user, I should be able to filter my search by outgoing transactions
* Scenario: As an authenticated user, I should be able to filter my search by card
* Scenario: As an authenticated user, I should be able to print my search
* Scenario: As an authenticated user, I should be able to snapshot my search
* Scenario: As an authenticated user, I should be able view the details of a transaction in my search
* Scenarios: As an authenticated user, I should be able to clean my search

## Questions

### 1. Related to scenarios:

- User should be able to search by partial words?
- User should be able to search by status?
- User should be able to search by Account Number?
- User should be able to search with special characters?
- User should be able to search without case sensitive?
- User should have a limit of characters in the search?

### 2. Non-functional tests
- [SQL Injection](https://www.w3schools.com/sql/sql_injection.asp#:~:text=SQL%20injection%20usually%20occurs%20when,unknowingly%20run%20on%20your%20database.)
- Load testing
- Search response time
- Endurance testing

# Setup the environment
To setup the environment after the checkout your have to run

```shell
yarn install
```

# Run scenarios
To run the scenarios you have to execute the command bellow:

```shell
yarn run e2e
```

# License
[MIT](https://choosealicense.com/licenses/mit/)


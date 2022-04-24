import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import transactions from '../../../fixtures/transactions.json'
import users from '../../../fixtures/users.json'

Given('I go the George demo page and login', () => {
  cy.login(users.default, Cypress.env('region'))
})

When('I search for {string}',(brand) => {
  cy.searchTansaction(brand)
})

Then('I should be able to see {string} for that brand',(results) => {
  
  switch (results){
      case 'no transaction':
        cy.dataCy(transactions['no transactions'].items[0])        
        break

      case 'no search results':  
        cy.dataCy(transactions['no search results'].items[0])        
        break

      deafult:
        cy.validateArrayItems('transaction-list-item-', transactions[results].items)
      break

  }
})
  
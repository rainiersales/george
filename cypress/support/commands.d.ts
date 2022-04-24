declare namespace Cypress {
      interface Chainable {
        /**
         * Custom command to select DOM element by data-cy attribute.
         * @param selector
         * @example cy.dataCy('public-login-submit')
         */
         dataCy(selector: string): Chainable<string>

        /**
         * Custom command to find all elements for a specific brand after search
         * @param SelectorPrefix
         * @param chars
         * @example cy.validateArrayItems('transaction-list-item-', transactions[results].items)
         */
         validateArrayItems(SelectorPrefix: string, chars: Array <string>): Chainable<string>

        /**
         * Custom command login into geroge application with user
         * @param user
         * @param region
         * @example cy.login(users.default, region)
         */
         login(user: string, region: string): Chainable<string>

         /**
         * Custom command search transactions for a specific brand
         * @param brand
         * @example cy.login(users.default)
         */
          searchTansaction(brand: string): Chainable<string>
      }
    }

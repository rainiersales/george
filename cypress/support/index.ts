import { dataCy, validateArrayItems } from './commands/selectors';
import { login } from './commands/navigation';
import { searchTansaction } from './commands/actions';

Cypress.Commands.add('dataCy', dataCy);
Cypress.Commands.add('validateArrayItems', validateArrayItems);
Cypress.Commands.add('login', login);
Cypress.Commands.add('searchTansaction', searchTansaction);


// We added this function to ignore uncaught exceptions from george app
Cypress.on('uncaught:exception', (err) => {
    return false
  })
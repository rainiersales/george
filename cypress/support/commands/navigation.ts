import paths from '../../fixtures/paths.json'
import users from '../../fixtures/users.json'
import pageContent from '../../fixtures/pageContent.json'

export const login = (user: string, region: string) => {
  cy.visit(paths.login + users.default)
  cy.contains(pageContent[region].loginPage.loginButton).click()
  cy.get('#readBtn', {timeout:50000}).click()

}
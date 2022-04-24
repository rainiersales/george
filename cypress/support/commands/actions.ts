export const searchTansaction = (brand: string) => {
  if(brand){
    cy.dataCy('search-keyword').type(brand)
  }
  cy.dataCy('search-trigger-button').click()
}
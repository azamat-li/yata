
context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://yata.test')
  })

  // https://on.cypress.io/interacting-with-elements

  it('Has some meaningful text', () => {
    // https://on.cypress.io/type
    cy.contains('Now you may')
	})
})

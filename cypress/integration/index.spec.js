
context('Index', () => {
  beforeEach(() => {
    cy.visit('http://yata.test')
  })

  it('Has some meaningful text', () => {
    cy.contains('Now you may')

	})


  it('Can navigate to login page', () => {
    cy.get('[data-cy=login]').click()
		cy.contains('Email')
		cy.contains('Password')
	})

  it('Can navigate to register page', () => {
    cy.get('[data-cy=register]').click()
		cy.contains('Name')
		cy.contains('Email')
		cy.contains('Password')
		cy.contains('Confirm Password')
	})

  it('Can navigate to dashboard', () => {
    cy.get('[data-cy=dashboard]').click()
		cy.contains('All tables')
		cy.contains('All')
	})

})

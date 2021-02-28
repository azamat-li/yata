
context('Index', () => {
  beforeEach(() => {
    cy.visit('')
  })

  it('Has some meaningful text', () => {
    cy.contains('Now you may')

	})


  it('Can navigate to login page', () => {
    cy.get('[data-cy=login]').click()
		cy.contains('Email')
		cy.contains('Password')
	})

  it('can login', () => {
    cy.get('[data-cy=login]').click()
    cy.get('[data-cy=email]').type('aa@aa.com')
    cy.get('[data-cy=password]').type('uaoeuaoeuoeu')
    cy.get('[data-cy=loginbutton]').click()
    cy.contains('Dashboard')
  })

  it('Can navigate to register page', () => {
    cy.get('[data-cy=register]').click()
		cy.contains('Name')
		cy.contains('Email')
		cy.contains('Password')
		cy.contains('Confirm Password')
	})

  it.only('Can navigate to dashboard', () => {
    cy.get('[data-cy=login]').click()
    cy.get('[data-cy=email]').type('aa@aa.com')
    cy.get('[data-cy=password]').type('uaoeuaoeuoeu')
    cy.get('[data-cy=loginbutton]').click()
    cy.visit('')
    cy.get('[data-cy=dashboard]').click()
    cy.contains('Dashboard')
		cy.contains('All spreadsheets')
	})

})

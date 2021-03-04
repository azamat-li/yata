
context('Dashboard', () => {
  beforeEach(() => {
    cy.visit('/login')
    cy.get('[data-cy=email]').type('aa@aa.com')
    cy.get('[data-cy=password]').type('uaoeuaoeuoeu')
    cy.get('[data-cy=loginbutton]').click()
  })

  it('Has some meaningful text', () => {
    cy.contains('Dashboard')
    cy.contains('See your data, organizer!')
  })

  it.skip('see spreadsheets', () => {
		cy.contains('Your spreadsheets,')
  })

  it.skip('can login', () => {
    cy.get('[data-cy=login]').click()
    cy.get('[data-cy=email]').type('aa@aa.com')
    cy.get('[data-cy=password]').type('uaoeuaoeuoeu')
    cy.get('[data-cy=loginbutton]').click()
    cy.contains('Dashboard')
  })

  it.skip('Can navigate to register page', () => {
    cy.get('[data-cy=register]').click()
		cy.contains('Name')
		cy.contains('Email')
		cy.contains('Password')
		cy.contains('Confirm Password')
	})

  it.skip('Can navigate to dashboard', () => {
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

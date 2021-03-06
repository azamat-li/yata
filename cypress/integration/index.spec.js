
context('Index', () => {
  beforeEach(() => {
    cy.visit('')
  })

  it('Has some meaningful text', () => {
    cy.contains('Yata is Yet Another Trello App')
    cy.contains('Organize your workflow, planner')

  })


  it('Can navigate to login page', () => {
    cy.get('[data-cy=login]').click()
    cy.contains('Email')
    cy.contains('Password')
    cy.contains('Forgot your password?')
  })

  it.only('can login and access dashboard', () => {
    cy.requestLogin()
    cy.visit('')
    cy.get('[data-cy=dashboard]').click()
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

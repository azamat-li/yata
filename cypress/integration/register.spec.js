
context('Register', () => {

  beforeEach(() => {
	  cy.visit('register')
  })

  it('register and login manually', () => {

    // register
    cy.get('[data-cy=name]').type('testuser')
    cy.get('[data-cy=email]').type('aa@aa.com')
    cy.get('[data-cy=password]').type('uaoeuaoeuoeu')
    cy.get('[data-cy=password_confirmation]').type('uaoeuaoeuoeu')     
    cy.get('[data-cy=submit]').click()

    // login
    cy.visit('login')
    cy.get('[data-cy=email]').type('aa@aa.com')
    cy.get('[data-cy=password]').type('uaoeuaoeuoeu')
    cy.get('[data-cy=loginbutton]').click()
    cy.contains('Dashboard')
  })


  it.only('register and login by form', () => {
      cy.visit('')
      cy.requestLogin()
      cy.visit('dashboard')
      cy.contains('Dashboard')
  })


  it.skip('Can logout', () => {
	  cy.visit('')
    cy.get('[data-cy=logout]').click()
		cy.contains('You have successfully logged out')
	})

  it.skip('Can add a spreadsheet', () => {
    cy.get('[data-cy=add_spreadsheet]').type('sp #0')
    cy.get('[data-cy=add_spreadsheet_button]').click()
    cy.get('[data-cy=add_spreadsheet]').type('sp #2')
    cy.get('[data-cy=add_spreadsheet_button]').click()
		cy.contains('sp #0')
		cy.contains('sp #2')
	})

  it.skip('Can navigate to spreadsheet', () => {
    cy.get('[type=input]').click()
		cy.contains('Spreadsheet')
	})

})



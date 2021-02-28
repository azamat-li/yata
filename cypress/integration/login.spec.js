
context('login', () => {

  beforeEach(() => {
	  cy.visit('login')
  })

  it('login manually', () => {
    cy.get('[data-cy=email]').type('aa@aa.com')
    cy.get('[data-cy=password]').type('uaoeuaoeuoeu')
    cy.get('[data-cy=loginbutton]').click()
    cy.contains('Dashboard')
  })


//  it.only('login by form', () => {
//    cy.loginByForm()
//	})


  it('Can logout', () => {
    cy.get('[data-cy=logout]').click()
		cy.contains('You have successfully logged out')
	})

  it('Can add a spreadsheet', () => {
    cy.get('[data-cy=add_spreadsheet]').type('sp #0')
    cy.get('[data-cy=add_spreadsheet_button]').click()
    cy.get('[data-cy=add_spreadsheet]').type('sp #2')
    cy.get('[data-cy=add_spreadsheet_button]').click()
		cy.contains('sp #0')
		cy.contains('sp #2')
	})

  it('Can navigate to spreadsheet', () => {
    cy.get('[type=input]').click()
		cy.contains('Spreadsheet')
	})

})



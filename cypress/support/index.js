// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')


Cypress.env({
		user: { 
  		"name":"test user",
  		"email":"testuser@gmail.com",
  		"password":"Fuzkim-samgu9-xyqsaj",
  		"password_confirmation":"Fuzkim-samgu9-xyqsaj",
  		"terms":true
		}
})


Cypress.Commands.add('registerUserIfNeeded', () => {
		cy.request({
				method: 'POST',
				url: 'http://yata.test/register',
				body: {
					 ...Cypress.env('user'),
				},
		    failOnStatusCode: false
		})
})


Cypress.Commands.add('loginByForm', () => {
    cy.request({
        method: 'POST',
        url: 'http://yata.test/login',
        form: true,
        body: {
            "email":"aa@aa.com",
            "password":"uaoeuaoeuoeu",
            "remember": ""
        }
    })
})


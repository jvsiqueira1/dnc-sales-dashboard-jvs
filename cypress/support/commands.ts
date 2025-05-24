/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="./cypress.d.ts" />
/// <reference types="cypress" />

Cypress.Commands.add('login', (email: string, password: string) => {
  cy.session([email, password], () => {
    cy.visit('http://localhost:5173/')
    cy.get('input[type="email"]').type(email)
    cy.get('input[type="password"]').type(password)
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/home')
  })
})

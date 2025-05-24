describe('Login flow correct credentials', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('shoul display login form', () => {
    cy.get('form').should('be.visible')
  })

  it('shoul login with valid credentials', () => {
    cy.get('input[type="email"]').type('joaovitorsc@joaovitorsc.com.br')
    cy.get('input[type="password"]').type('@DNCReact199#')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/home')
    cy.get('header').should('be.visible')
  })
})

describe('Login flow correct credentials', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('shoul display login form', () => {
    cy.get('form').should('be.visible')
  })

  it('shoul login invalid credentials', () => {
    cy.get('input[type="email"]').type('zero@joaovitorsc.com.br')
    cy.get('input[type="password"]').type('@DNCReact199#')
    cy.get('button[type="submit"]').click()
    cy.contains(
      'Não foi possivel realizar a operação. Entre em contato com nosso suporte.'
    ).should('be.visible')
  })
})

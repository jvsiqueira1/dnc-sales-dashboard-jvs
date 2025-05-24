describe('Check if create profile page renders the correct components', () => {
  beforeEach(() => {
    cy.login('joaovitorsc@joaovitorsc.com.br', '@DNCReact199#')
    cy.visit('http://localhost:5173/leads')
  })

  it('shoul display leads form', () => {
    cy.get('form').should('be.visible')
    cy.get('input[type="text"]').should('be.visible')
    cy.get('input[type="email"]').should('be.visible')
    cy.get('input[type="tel"]').should('be.visible')
    cy.get('button[type="submit"]').should('be.visible')
  })

  it('shoul display leads title', () => {
    cy.get('#leads-title').should('be.visible')
  })
})

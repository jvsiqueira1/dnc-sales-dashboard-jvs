describe('Check if create profile page renders the correct components', () => {
  beforeEach(() => {
    cy.login('joaovitorsc@joaovitorsc.com.br', '@DNCReact199#')
    cy.visit('http://localhost:5173/home')
  })

  it('shoul display total sales', () => {
    cy.get('#total-sales').should('be.visible')
  })

  it('shoul display month goals', () => {
    cy.get('#month-goals').should('be.visible')
  })

  it('shoul display total leads', () => {
    cy.get('#total-leads').should('be.visible')
  })

  it('shoul display month sales chart', () => {
    cy.get('#month-sales-chart').should('be.visible')
  })

  it('shoul display  sales stars', () => {
    cy.get('#sales-stars').should('be.visible')
  })

  it('shoul display news', () => {
    cy.get('#news').should('be.visible')
  })

  it('shoul display year sales chart', () => {
    cy.get('#year-sales-chart').should('be.visible')
  })
})

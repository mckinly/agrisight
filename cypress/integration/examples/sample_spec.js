describe('My First Test', () => {
  it('Does not do much!', () => {
    cy.visit('localhost:8000/#/login')

    cy.get('[test-id="username"]').should('be.visible')
  })
})

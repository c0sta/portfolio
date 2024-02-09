describe('Greetings interactions', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display Greetings', () => {
    cy.get('[data-cy="greetings"]').should('be.visible')
  })

  it('should display buttons', () => {
    cy.get('[data-cy="greetings-contacts"]').should('be.visible')
  })

  it('should open GitHub', () => {
    cy.get('button').eq(1).click()
  })

  it('should open LinkedIn', () => {
    cy.get('button').eq(1).click()
  })

  it('should open "Get in touch"', () => {
    cy.get('button').eq(3).should('have.text', 'Get in touch').click()
  })

  it('should click on scroll down button', () => {
    cy.get('button').eq(4).click()
    cy.get('h2').contains('About me').should('be.visible')
  })
})

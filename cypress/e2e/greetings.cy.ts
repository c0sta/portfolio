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

  it.skip('should open GitHub', () => {
    cy.get('a').invoke('removeAttr', 'target').eq(1).click()
  })

  it.skip('should open LinkedIn', () => {
    cy.get('a').eq(1).click()
  })

  it.skip('should open "Get in touch"', () => {
    cy.get('a').eq(3).should('have.text', 'Get in touch').click()
  })

  it.skip('should click on scroll down button', () => {
    cy.get('a').eq(3).click()
    cy.get('h2').contains('About me').should('be.visible')
  })
})

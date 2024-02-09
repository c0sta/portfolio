describe('Sidebar interactions', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('button').eq(4).click()
    cy.clearAllLocalStorage()
  })

  it(
    'should be visible on large displays',
    { viewportHeight: 720, viewportWidth: 1280 },
    () => {
      cy.get('[data-cy="sidebar"]').should('be.visible')
    }
  )
  it(
    'should be hidden on medium/small displays',
    { viewportHeight: 896, viewportWidth: 414 }, // iPhone XR dimensions
    () => {
      cy.get('[data-cy="sidebar"]').should('not.be.visible')
    }
  )
  it('should scroll to "About" section', () => {
    cy.get('button').contains('About').click()
  })
  it('should scroll to "Projects" section', () => {
    cy.get('button').contains('Projects').click()
  })
  it('should scroll to "Experiences" section', () => {
    cy.get('button').contains('Experiences').click()
  })
  it('should scroll to "Contacts" section', () => {
    cy.get('button').contains('Contacts').click()
  })

  it('should switch theme to Light', () => {
    cy.get('[data-cy="sidebar"] > [data-cy="sidebar-contacts"] > button')
      .eq(0)
      .dblclick()
    cy.get('.dark').should('not.exist')
  })
  it('should switch theme to Dark', () => {
    cy.get('[data-cy="sidebar"] > [data-cy="sidebar-contacts"] > button')
      .eq(0)
      .click()
    cy.get('.dark').should('exist')
  })
  it('should open e-mail', () => {
    cy.get('[data-cy="sidebar-contacts"] > .flex > :nth-child(1)').click()
  })
  it('should open GitHub', () => {
    cy.get('[data-cy="sidebar-contacts"] > .flex > :nth-child(2)').click()
  })
  it('should open LinkedIn', () => {
    cy.get('[data-cy="sidebar-contacts"] > .flex > :nth-child(3)').click()
  })
})

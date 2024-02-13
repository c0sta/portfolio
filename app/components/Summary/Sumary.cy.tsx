import Summary from './Summary'

describe.skip('<Summary />', () => {
  it('renders', async () => {
    // see: https://on.cypress.io/mounting-react
    // spying and response stubbing

    cy.intercept('GET', '/api/summaries?populate=*', {
      fixture: 'summaries.json'
    }).as('getSummaries')

    const render = await Summary()

    cy.mount(render)
  })
})

import Projects from './Projects'

describe.skip('<Projects />', () => {
  it('renders', async () => {
    // see: https://on.cypress.io/mounting-react
    // spying and response stubbing

    cy.intercept('GET', '/api/projects?populate=*', {
      fixture: 'projects.json'
    }).as('getProjects')

    const render = await Projects()

    cy.mount(render)
  })
})

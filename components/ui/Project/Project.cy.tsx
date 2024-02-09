import React from 'react'
import { Project } from './Project'

describe('<Project />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <Project
        imageAlt=""
        imageSrc=""
        description="Description"
        title="Title"
        seeLiveUrl=""
        seeCodeUrl=""
        skills={['React']}
      />
    )
  })
})

import React from 'react'
import { Typography } from './Typography'

describe('<Typography />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Typography>Text</Typography>)
  })
})

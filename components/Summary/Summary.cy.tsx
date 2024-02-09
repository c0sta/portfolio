import React from 'react'
import { Summary } from './Summary'

describe('<Summary />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Summary />)
  })
})
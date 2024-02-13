import React from 'react'
import Experiences from './Experiences'

describe.skip('<Experiences />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Experiences />)
  })
})

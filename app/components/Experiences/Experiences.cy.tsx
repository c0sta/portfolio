import React from 'react'
import Experiences from './Experiences'

describe('<Experiences />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Experiences />)
  })
})

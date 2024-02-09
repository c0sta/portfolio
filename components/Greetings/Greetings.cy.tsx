import React from 'react'
import { Greetings } from './Greetings'

describe('<Greetings />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Greetings />)
  })
})
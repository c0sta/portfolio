import React from 'react'
import { Tags } from './Tags'

describe('<Tags />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Tags labels={['Test 1', 'Test 2']} />)
  })
})

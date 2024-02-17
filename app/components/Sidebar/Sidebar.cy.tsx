import React from 'react'
import { Sidebar } from './Sidebar'

describe.skip('<Sidebar />', () => {
  it('renders', { viewportHeight: 720, viewportWidth: 1280 }, () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Sidebar />)
  })
})

import React from 'react'
import { Button } from './Button'

describe('<Button />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <Button href="" color="primary" label="Click here" variant="text" />
    )
  })

  it.skip('redirect', () => {
    cy.mount(
      <Button color="primary" href="" label="Click here" variant="text" />
    )

    cy.get('a').click()
  })
})

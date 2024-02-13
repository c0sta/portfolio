import React from 'react'
import { Button } from './Button'
import { ButtonClient } from './ButtonClient'

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

describe('<ButtonClient />', () => {
  it('renders', () => {
    cy.mount(<ButtonClient color="primary" label="Click here" variant="text" />)
  })

  it('click', () => {
    const onClick = cy.stub()
    cy.mount(
      <ButtonClient
        color="primary"
        onClick={onClick}
        label="Click here"
        variant="text"
      />
    )

    cy.get('button')
      .click()
      .then(() => expect(onClick).to.have.been.called)
  })
})

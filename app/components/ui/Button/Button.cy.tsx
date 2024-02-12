import React from 'react'
import { Button } from './Button'

describe('<Button />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <Button
        isLink={false}
        href=""
        color="primary"
        label="Click here"
        variant="text"
      />
    )
  })

  it('click', () => {
    const onClick = cy.stub()
    cy.mount(
      <Button
        isLink={false}
        href=""
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

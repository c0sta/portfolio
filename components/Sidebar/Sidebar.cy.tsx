import React from 'react'
import { Sidebar } from './Sidebar'
import { useSidebar } from './useSidebar'

const SidebarWrapper = () => {
  const { navOptions } = useSidebar()

  return <Sidebar navOptions={navOptions} />
}

describe('<Sidebar />', () => {
  it('renders', { viewportHeight: 720, viewportWidth: 1280 }, () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SidebarWrapper />)
  })
})

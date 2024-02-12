import { SidebarProps } from './Sidebar'

export const useSidebar = () => {
  const navOptions: SidebarProps['navOptions'] = [
    {
      key: 'summary',
      label: 'About'
    },
    {
      key: 'projects',
      label: 'Projects'
    },
    {
      key: 'experiences',
      label: 'Experiences'
    },
    {
      key: 'contacts',
      label: 'Contacts'
    }
  ]

  return {
    navOptions
  }
}

import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'

type SidebarAnchors =
  | 'home'
  | 'summary'
  | 'projects'
  | 'experiences'
  | 'contacts'

export interface SidebarProps {
  navOptions: Array<{
    key: SidebarAnchors
    label: string
  }>
}
export const useSidebar = () => {
  const [activeAnchor, setActiveAnchor] = useState<SidebarAnchors>()
  const router = useRouter()

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

  const handleActiveAnchor = useCallback(() => {
    setActiveAnchor(window.location.hash.split('#')[1] as SidebarAnchors)
  }, [])

  useEffect(() => {
    if (window.location.hash) {
      handleActiveAnchor()
      router.push(window.location.hash)
    }

    window.addEventListener('hashchange', handleActiveAnchor)

    return () => {
      window.removeEventListener('hashchange', handleActiveAnchor)
    }
  }, [activeAnchor, handleActiveAnchor, router])

  return {
    navOptions,
    activeAnchor
  }
}

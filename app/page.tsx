import React from 'react'
import { Home, Content } from '@/app/pages'

export default function Page() {
  return (
    <main className="h-full overflow-y-auto overflow-x-hidden px-5 md:px-20">
      <Home />
      <Content />
    </main>
  )
}

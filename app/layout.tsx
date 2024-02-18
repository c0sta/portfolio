import type { Metadata } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gabriel Costa M. | Frontend Dev',
  description: 'Gabriel Costa M. | Frontend Dev'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID ? (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
      ) : null}
      <body
        className={`text-slate-800 transition-colors duration-300 ease-in-out dark:bg-blackBackground dark:text-slate-50 ${inter.className}`}
      >
        {children}
      </body>
    </html>
  )
}

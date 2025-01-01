import './globals.css'
import { Inter } from 'next/font/google'
import { AuroraBackground } from '@/components/ui/aurora-background'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'idleShubh - Personal Portfolio',
  description: 'Personal portfolio website of Shubh Srivastava',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}


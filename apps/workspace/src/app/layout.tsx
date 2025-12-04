// src/app/layout.tsx
import type { Metadata } from 'next'
import { Sidebar } from '@/components/Shell/Sidebar'
import './globals.css'

export const metadata: Metadata = {
  title: 'Clearline7 Workspace',
  description: 'Document Engineering Environment',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-bg text-text antialiased font-body min-h-screen flex">
        {/* The Fixed Control Panel */}
        <Sidebar />

        {/* The Main Stage (Shifted right by w-64 to accommodate sidebar) */}
        <main className="flex-1 ml-64 min-h-screen p-8">{children}</main>
      </body>
    </html>
  )
}

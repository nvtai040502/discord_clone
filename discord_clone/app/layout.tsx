import type { Metadata } from 'next'
import { Inter as FontSans } from "next/font/google"
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'
import { NavigationSidebar } from '@/components/navigation-sidebar'

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body 
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            
            { children}
           
          </ThemeProvider>
        
        </body>
      </html>
    </ClerkProvider>
  )
}

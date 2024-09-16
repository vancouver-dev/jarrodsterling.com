import './global.css'
import type { Metadata } from "next"
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from "./components/footer"

export const metadata: Metadata = {
  title: {
    template: "%s | Jarrod Sterling",
    default: "Jarrod Sterling",
  },
  description: "a Front-end web developer based in Vancouver, Canada",
  metadataBase: new URL("https://jarrodsterling.com"),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className="text-black bg-white dark:text-white dark:bg-black tracking-normal"
    >
      <body className={`mx-auto antialiased max-w-xl mt-8`}>
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-8 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}

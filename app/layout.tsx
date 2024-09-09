import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from "./components/footer"
import { Lora } from "next/font/google"

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: ["400"],
})

export const metadata: Metadata = {
  title: {
    default: "Jarrod Sterling",
    template: "Next.js",
  },
  description: "Website by Jarrod Sterling",
  openGraph: {
    title: "Jarrod Sterling",
    description: "About Jarrod Sterling",

    siteName: "Jarrod Sterling",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(" ")

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white dark:text-white dark:bg-black tracking-wide",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body
        className={`mx-auto ${lora.className} antialiased max-w-xl mx-8 mt-8`}
      >
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

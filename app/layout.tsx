import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PromptTrack — A/B Test Your AI Prompts with Metrics',
  description: 'Version control for AI prompts with success rate tracking and automatic rollback on performance drops. Built for AI product managers and developers.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b4818163-ecf3-4b71-adf1-e7f7231abed8"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { ToastProvider } from '../components/providers/toaster-provider'

import { esES } from "@clerk/localizations";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OrcaStudy',
  description: 'Cursos virtuales a buen precio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
     <ClerkProvider localization={esES}>
      <html lang="en">
        <head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.embeddedChatbotConfig = {
                  chatbotId: "NJ30lHUh0LkcJm3HSbICb",
                  domain: "www.chatbase.co"
                };
              `,
            }}
          />
        </head>
        <body className={inter.className}>
          <ToastProvider />
          {children}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(d, s, id) {
                  var js, cbjs = d.getElementsByTagName(s)[0];
                  if (d.getElementById(id)) return;
                  js = d.createElement(s); js.id = id;
                  js.src = "https://www.chatbase.co/embed.min.js";
                  js.defer = true;
                  cbjs.parentNode.insertBefore(js, cbjs);
                }(document, 'script', 'chatbase-script'));
              `,
            }}
          />
        </body>
      </html>
    </ClerkProvider>
  )
}

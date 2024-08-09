export const runtime = "edge";

import { ThemeProvider } from 'next-themes'

export default function Layout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
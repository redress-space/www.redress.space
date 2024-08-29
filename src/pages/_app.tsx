
import '@/styles/global.css';
import '@/styles/main.css';
import '@/styles/theme.css';

// import 'bootstrap/dist/css/bootstrap.css';


import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ThemeProvider>
      <Component {...pageProps } />
  </ThemeProvider>
  );
}
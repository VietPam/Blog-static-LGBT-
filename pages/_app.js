import '@/css/tailwind.css'
import '@/css/prism.css'
import 'katex/dist/katex.css'

import '@fontsource/inter/variable-full.css'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import siteMetadata from '@/data/siteMetadata'
import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'
import { useState, useContext } from 'react'
import { AppContext } from '../context/context_search'
const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

export default function App({ Component, pageProps }) {
    const [data, setData] = useState('')
    return (
        <AppContext.Provider value={[data, setData]}>
            <div className="bg-webpage">
                <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
                    <Head>
                        <meta content="width=device-width, initial-scale=1" name="viewport" />
                    </Head>
                    {isDevelopment && isSocket && <ClientReload />}
                    <Analytics />
                    <LayoutWrapper>
                        <Component {...pageProps} />
                    </LayoutWrapper>
                </ThemeProvider>
            </div>
        </AppContext.Provider>
    )
}

import { AppProps } from 'next/app'
import { CMS_NAME } from '../lib/constants'
import Head from 'next/head'
import React from 'react'
import Layout from '../components/layout'
import Meta from '../components/meta'
import '../styles/index.css'
import '../components/markdown-styles.module.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
        <Head>
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/stylesdefault.min.css" />
          <script defer src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/highlight.min.js"></script>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Meta />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
  )
}
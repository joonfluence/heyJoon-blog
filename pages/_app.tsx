import { AppProps } from 'next/app'
import { CMS_NAME } from '../lib/constants'
import Head from 'next/head'
import React from 'react'
import Layout from '../components/layout'
import Meta from '../components/meta'
import '../styles/index.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
        <Head>
          <link rel="stylesheet" href="github-markdown.css" />
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Meta />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
  )
}
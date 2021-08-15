import InnerWrapper from '../components/Common/container'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import React, {FC} from 'react'
import Header from '../components/Common/header'
import Content, {Props as ContentProps} from '../components/content'
import Footer from '../components/Common/footer'

type Props = ContentProps;

const Index:FC<Props> = ({ allPosts }) => {
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <div className="relative block md:flex">
          <Header />
          <InnerWrapper>
            <Content allPosts={allPosts}></Content>
            <Footer />
          </InnerWrapper>
        </div>
      </Layout>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}

import { getAllPosts } from '../lib/api'
import React, {FC} from 'react'
import MainContent, {Props as ContentProps} from '../components/mainContent'

type Props = ContentProps;

const Index:FC<Props> = ({ allPosts }) => {
  return (
      <MainContent allPosts={allPosts}></MainContent>
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

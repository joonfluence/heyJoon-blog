import React, { FC } from 'react'
import MoreStories from './more-stories'
import HeroPost from './hero-post'
import Intro from './intro'
import Post from '../types/post'

export type Props = {
  allPosts: Post[]
}

const Component:FC<Props> = ({allPosts}) => {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <div className="p-5">
      <Intro title='News'/>
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
    </div>
    )
  }

export default Component
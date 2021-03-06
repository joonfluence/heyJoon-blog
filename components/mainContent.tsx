import React, { FC } from "react";
import MoreStories from "@/components/more-stories";
import HeroPost from "@/components/hero-post";
import Intro from "@/components/intro";
import Post from "@/types/post";

export type Props = {
  allPosts: Post[];
  title: string;
};

const Component: FC<Props> = ({ title, allPosts }) => {
  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);
  return (
    <div className="p-5">
      <Intro title={title} />
      {heroPost && (
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          category={heroPost.category}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
      )}
      {morePosts.length > 0 && <MoreStories posts={morePosts} />}
    </div>
  );
};

export default Component;

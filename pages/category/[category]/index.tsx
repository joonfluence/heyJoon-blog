import { getAllPostsByDirectory, postsDirectory } from "@/lib/api";
import React, { FC } from "react";
import MainContent, { Props as ContentProps } from "@/components/mainContent";

type Props = ContentProps;

// List Page

const Index: FC<Props> = ({ allPosts }) => {
  return <MainContent allPosts={allPosts}></MainContent>;
};

export default Index;

export const getStaticProps = () => {
  const allPosts = getAllPostsByDirectory(postsDirectory, [
    "title",
    "date",
    "slug",
    "author",
    "category",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};

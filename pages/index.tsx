import {
  getAllPosts,
  getAllPostsByDirectory,
  postsDirectory,
} from "../lib/api";
import React, { FC } from "react";
import MainContent, { Props as ContentProps } from "../components/mainContent";

type Props = ContentProps;

const Index: FC<Props> = ({ allPosts }) => {
  return <MainContent allPosts={allPosts}></MainContent>;
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPostsByDirectory(postsDirectory, undefined, [
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};

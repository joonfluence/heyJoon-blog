import { getAllPostsByDirectory } from "@/lib/api";
import React, { FC } from "react";
import MainContent, { Props as ContentProps } from "@/components/mainContent";
import { JAVASCRIPTDIR } from "@/lib/constants";

type Props = ContentProps;

// List Page

const Index: FC<Props> = ({ allPosts }) => {
  return <MainContent title="Javascript" allPosts={allPosts}></MainContent>;
};

export default Index;

export const getStaticProps = () => {
  const allPosts = getAllPostsByDirectory(JAVASCRIPTDIR, [
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

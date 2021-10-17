import { getAllPostsByDirectory } from "@/lib/api";
import React, { FC } from "react";
import MainContent, { Props as ContentProps } from "@/components/mainContent";
import { EXTDIR } from "@/lib/constants";

type Props = ContentProps;

// List Page

const Index: FC<Props> = ({ allPosts }) => {
  return <MainContent title="HTML" allPosts={allPosts}></MainContent>;
};

export default Index;

export const getStaticProps = () => {
  const allPosts = getAllPostsByDirectory(EXTDIR, [
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

import React, { FC } from "react";
import MainContent, { Props as ContentProps } from "@/components/mainContent";
import { getAllPostsByDirectory } from "@/lib/api";
import { POSTDIR } from "@/lib/constants";

type Props = ContentProps;

const Index: FC<Props> = ({ allPosts }) => {
  return <MainContent allPosts={allPosts}></MainContent>;
};

export default Index;

type Params = {
  params: {
    category: string;
    id: string;
  };
};

export const getStaticProps = ({ params }: Params) => {
  console.log(params);
  const allPosts = getAllPostsByDirectory(POSTDIR, [
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

export async function getStaticPaths() {
  const posts = getAllPostsByDirectory(POSTDIR, ["category", "slug"]);
  return {
    paths: posts.map((post) => {
      return {
        params: {
          category: post.category,
          id: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

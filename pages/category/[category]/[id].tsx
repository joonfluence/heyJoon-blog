import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "@/components/Common/container";
import { getAllPostsByDirectory, getPostByDirectory } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import PostType from "@/types/post";
import Post from "@/components/Common/post";
import React from "react";
import { POSTDIR } from "@/lib/constants";

type Props = {
  post: PostType;
};

const Component = ({ post }: Props) => {
  const router = useRouter();
  console.log(router.query.category);
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Container post={post}>
      <Post post={post} />
    </Container>
  );
};

export default Component;

type Params = {
  params: {
    category: string;
    id: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const newDir = POSTDIR + params.id + ".md";
  // 포스트의 slug와 내용을 반환한다.
  const post = getPostByDirectory(newDir, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "category",
    "coverImage",
  ]);

  // FIXME: Table X. 여기서 마크다운 언어가 테이블 태그로 변환되지 않는 것을 알 수 있다.
  const content = await markdownToHtml(post.content || "");
  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

// TODO: 링크 이동 시, 해당 화면으로 이동 되도록 지정해줘야 한다.
export async function getStaticPaths() {
  const posts = getAllPostsByDirectory(POSTDIR, ["category", "slug"]);

  console.log(posts);
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

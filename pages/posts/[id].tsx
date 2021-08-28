import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "@/components/Common/container";
import PostBody from "@/components/post-body";
import PostHeader from "@/components/post-header";
import { getPostBySlug, getAllPosts } from "@/lib/api";
import PostTitle from "@/components/post-title";
import markdownToHtml from "@/lib/markdownToHtml";
import PostType from "@/types/post";
import Post from "@/components/Common/post";
import React from "react";

type Props = {
  post: PostType;
};

const Component = ({ post }: Props) => {
  const router = useRouter();
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
    id: string;
  };
};

export async function getStaticProps({ params }: Params) {
  // 포스트의 slug와 내용을 반환한다.
  const post = getPostBySlug(params.id, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
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

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);
  return {
    paths: posts.map((post) => {
      return {
        params: {
          id: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

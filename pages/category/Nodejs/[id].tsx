import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "@/components/Common/container";
import { getAllPostsByDirectory, getPostByFileDirectory } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import PostType from "@/types/post";
import Post from "@/components/Common/post";
import React from "react";
import { NODEJSDIR } from "@/lib/constants";

type Props = {
  post: PostType;
};

// Detail Page

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
  const fileDir = NODEJSDIR + params.id + ".md";
  // slug를 통해 해당 디렉토리 하에 있는 포스트를의 slug와 내용을 반환한다.
  const post = getPostByFileDirectory(fileDir, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "category",
    "coverImage",
  ]);

  console.log("성공적으로 post를 불러오고 있다", post);
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
  // 디렉토리 하에 있는 모든 파일들을 SSR합니다.
  const posts = getAllPostsByDirectory(NODEJSDIR, ["slug"]);

  console.log("해당 디렉토리에 있는 파일들을 모두 불러옵니다.", posts);

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

import React from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import PostHeader from "../../components/post-header";
import PostTitle from "../../components/post-title";
import PostBody from "../../components/post-body";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";
import PostType from "../../types/post";

type Props = {
  post: PostType;
};

const Component = ({ post }: Props) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <article className="mb-32 p-10">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />
          <PostBody content={post.content} />
        </article>
      )}
    </div>
  );
};

export default Component;

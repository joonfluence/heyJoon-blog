import React from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import PostHeader from "../../components/post-header";
import PostTitle from "../../components/post-title";
import PostBody from "../../components/post-body";
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
      <>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <article className="p-10">
            <PostHeader
              title={post.title}
              coverImage={post.coverImage}
              category={post.category}
              date={post.date}
              author={post.author}
            />
            <PostBody content={post.content} />
            <div className="mt-10" id="disqus_thread"></div>
          </article>
        )}
      </>
    </div>
  );
};

export default Component;

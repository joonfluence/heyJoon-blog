import { ReactNode } from "react";
import Head from "next/head";
import { CMS_NAME } from "@/lib/constants";
import PostType from "@/types/post";
import CommentScript from "@/components/Common/commentScript";

type Props = {
  post: PostType;
  children?: ReactNode;
};

const Container = ({ post, children }: Props) => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/default.min.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/highlight.min.js"></script>
        <script>hljs.highlightAll()</script>
        <title>
          {post.title} | Next.js Blog Example with {CMS_NAME}
        </title>
        <meta property="og:image" content={post.ogImage.url} />
      </Head>
      <div className="mx-auto">{children}</div>
      <CommentScript />
    </>
  );
};

export default Container;

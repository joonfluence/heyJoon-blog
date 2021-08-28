import { ReactNode } from "react";
import Script from "next/script";
import Head from "next/head";
import { CMS_NAME } from "@/lib/constants";
import PostType from "@/types/post";

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
        <script>{`hljs.highlightAll()`}</script>
        <title>
          {post.title} | Next.js Blog Example with {CMS_NAME}
        </title>
        <meta property="og:image" content={post.ogImage.url} />
      </Head>
      <div className="mx-auto">{children}</div>
      <Script strategy="lazyOnload">
        {`
    var disqus_config = function () {
      this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    (function() { // DON'T EDIT BELOW THIS LINE
      var d = document, s = d.createElement('script');
      s.src = 'https://heyjoon-log.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
    })()`}
      </Script>
    </>
  );
};

export default Container;

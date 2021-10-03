import { AppProps } from "next/app";
import { BLOG_NAME } from "@/lib/constants";
import Head from "next/head";
import React from "react";
import Layout from "@/components/layout";
import Meta from "@/components/meta";
import "../styles/index.css";
import "@/components/markdown-styles.module.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="h-screen overflow-y-hidden">
      <Head>
        <title>{BLOG_NAME}</title>
      </Head>
      <Meta />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

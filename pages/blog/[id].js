import Head from "next/head";
import Header from "@/compnents/header";
import Nav from "@/compnents/nav";
import Footer from "@/compnents/footer";

import { getAllPostIds, getPostData } from "@/lib/posts";

export default function PostPage({ postData }) {
  return (
    <div>
      <Head>{postData.title}</Head>
      <Header />
      <Nav />
      <main>
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

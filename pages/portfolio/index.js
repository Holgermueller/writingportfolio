import Header from "@/compnents/header";
import Nav from "@/compnents/nav";
import Link from "next/link";
import Footer from "@/compnents/footer";

import { getPortfolio } from "@/lib/posts";
import { Cardo } from "next/font/google";

export async function getStaticProps() {
  const allPostsData = getPortfolio();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Portfolio({ allPostsData }) {
  return (
    <div>
      <Header />
      <Nav />
      <main>
        <h1>Portfolio</h1>

        <ul>
          {allPostsData.map((post) => (
            <div key={post.id} className="list-card">
              <Link
                href={{
                  pathname: "blog/[id]",
                  query: {
                    id: post.id,
                  },
                }}
              >
                <li>
                  <h2>{post.title}</h2>
                </li>
              </Link>
            </div>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}

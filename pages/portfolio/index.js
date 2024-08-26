import Header from "@/compnents/header";
import Nav from "@/compnents/nav";
import Link from "next/link";
import Footer from "@/compnents/footer";

import { getPortfolio } from "@/lib/posts";
import "../../app/globals.css";

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
    <div id="portfolio">
      <Header />
      <Nav />
      <main>
        <h1>Portfolio</h1>

        <h2>Technical Writing</h2>

        <ul className="list-container">
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

        <h2>Content Writing</h2>
      </main>
      <Footer />
    </div>
  );
}

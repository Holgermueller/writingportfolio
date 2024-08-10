import Head from "next/head";
import Header from "@/compnents/header";
import Nav from "@/compnents/nav";
import Footer from "@/compnents/footer";

export default function PostPage() {
  return (
    <div>
      <Head></Head>
      <Header />
      <Nav />
      <main>
        <h1>Article title will appear here.</h1>
        <p>Article Data will appear here.</p>
      </main>

      <Footer />
    </div>
  );
}

import Header from "@/compnents/header";
import Nav from "@/compnents/nav";
import Footer from "@/compnents/footer";

import "../app/globals.css";

export default function Home() {
  return (
    <div>
      <Header />
      <Nav />
      <main>
        <h1>About Me</h1>
      </main>
      <Footer />
    </div>
  );
}

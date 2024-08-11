import Header from "@/compnents/header";
import Nav from "@/compnents/nav";
import Footer from "@/compnents/footer";
import Link from "next/link";

export default function Contact() {
  return (
    <div id="contact">
      <Header />
      <Nav />
      <main>
        <h1>Contact</h1>
        <p className="contact-message">
          If you'd like to connect, you can catch me on these socials:
        </p>

        <div className="links-container">
          <div className="link">
            <Link
              href="https://www.threads.net/@holgermmueller"
              target="_blank"
            >
              Threads
            </Link>
          </div>
          <div className="link">
            <Link href="https://spoutible.com/holgermmueller" target="_blank">
              Spoutable
            </Link>
          </div>
          <div className="link">
            <Link
              href="https://bsky.app/profile/holgermartist.bsky.social"
              target="_blank"
            >
              Bluesky
            </Link>
          </div>
        </div>

        <p className="contact-message">
          Or you can drop me a line via email
          <Link href="mailto:9jholger@gmail.com">HERE!</Link>
        </p>
      </main>
      <Footer />
    </div>
  );
}

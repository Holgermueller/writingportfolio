import Header from "@/compnents/header";
import Nav from "@/compnents/nav";
import Footer from "@/compnents/footer";

import "../app/globals.css";

export default function Home() {
  return (
    <div id="home">
      <Header />
      <Nav />
      <main>
        <h1>About Me</h1>

        <p className="about-paragraph">
          My journey into tech writing began when I enrolled in the University
          of Minnesota&apos;s full-stack web development bootcamp. Through this
          bootcamp, I mastered the ability to break large tasks down into small
          manageable pieces. This helped me strengthen my ability to focus on
          accomplishing small steps rather than allowing myself to get
          overwhelmed by the large task at hand.
        </p>

        <p className="about-paragraph">
          Before entering the tech field, I worked as an English tutor and an
          adjuct English professor at SUNY Orange. There, I learned how to
          explain complicated concepts to non-technical audiences. I gained
          further experience with skill by tutoring students remotely in both
          English and web development.
        </p>

        <p className="about-paragraph">
          I received my Master&apos;s in English from SUNY New Paltz. I also
          hold a Bachelor&apos;s in Creative Writing from the same institution.
        </p>
      </main>
      <Footer />
    </div>
  );
}

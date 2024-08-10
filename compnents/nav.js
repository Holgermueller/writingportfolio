import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/portfolio">Portfolio</Link>
      <Link href="/resume">Resume</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}

import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/portfolio">Portfolio</Link>
      <Link
        href="https://docs.google.com/document/d/1DL3GknJQjpYUSsOTx1caH-1cQA_fkOP5NTfunBL87l8/edit?usp=sharing"
        target="_blank"
      >
        Resume
      </Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}

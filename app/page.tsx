import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>Välkommen till Letters</h1>
      <ul>
        <li><Link href="/about">Om oss</Link></li>
        <li><Link href="/letters">Brev</Link></li>
      </ul>
    </main>
  );
}

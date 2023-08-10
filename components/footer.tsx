import Link from "next/link";
import { LogoFull } from "./images";

export default function Footer() {
  return (
    <footer className="bg-black text-white grid grid-cols-1 md:grid-cols-2 p-8 space-y-4">
      <ul className="inline-flex space-x-4 self-center justify-self-center md:justify-self-end">
        <li>
          <Link href="/support">FAQs</Link>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Legal Stuff</a>
        </li>
      </ul>
      <LogoFull classes="w-auto h-auto md:w-96 md:order-first" />
    </footer>
  );
}

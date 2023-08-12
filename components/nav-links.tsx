"use client";
const LINKS = [
  {
    title: "FAQs",
    ref: "support",
    style:
      "block md:inline hover:underline hover:underline-offset-4 hover:decoration-white",
  },
  {
    title: "Login",
    ref: "/browse",
    style:
      "block md:inline border-2 border-white py-2 px-6 rounded hover:bg-white hover:text-primary transition delay-150 duration-300 ease-in-out",
  },
  {
    title: "Sign Up",
    ref: "/browse",
    style:
      "block md:inline border-2 border-white bg-white text-primary py-2 px-6 rounded hover:bg-transparent hover:text-white transition delay-150 duration-300 ease-in-out",
  },
];
import Link from "next/link";
import { useState } from "react";

export default function NavLinks() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden"
        onClick={() => setOpen(!open)}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5 fill-white"
          aria-hidden="true"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div
        className={
          open
            ? "w-full md:block md:w-auto"
            : "hidden w-full md:block md:w-auto md:mr-12"
        }
      >
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
          {LINKS.map((link, index) => (
            <li key={index} className="my-2 md:my-0 ">
              <Link href={link.ref} className={link.style}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

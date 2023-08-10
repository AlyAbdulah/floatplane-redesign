import Link from "next/link";
import Logo from "./images";
import NavLinks from "./nav-links";
export default function TopNav() {
  return (
    <nav className="bg-primary text-white">
      <div className="max-w-screen-xxl flex flex-wrap items-center justify-between mx-auto p-2">
        <Link href="/" className="md:ml-12 ml-2">
          <Logo w="75" h="75" />
        </Link>
        <NavLinks />          
        </div>
    </nav>
  );
}

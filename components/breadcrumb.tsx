import { ArrowRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

interface Link {
  title: string;
  href: string;
}
export function Breadcrumb(props: { links: Array<Link> }) {
  const { links } = props;
  return (
    <nav className="flex">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary dark:text-gray-400"
          >
            <HomeIcon className="w-3 h-3 mr-2.5" />
            Home
          </Link>
        </li>
        {
            links.map((link, index) => 
                <li key={index}>
                    <div className="flex items-center">
                        <ArrowRightIcon className="w-3 h-3 text-gray-400 mx-1" />
                        <Link
                            href={link.href}
                            className="ml-1 text-sm font-medium text-gray-700 hover:text-primary md:ml-2 dark:text-gray-400 dark:hover:text-white"
                        >
                            {link.title}
                        </Link>
                    </div>
                </li>
            )
        }
      </ol>
    </nav>
  );
}

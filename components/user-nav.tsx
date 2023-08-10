"use client";
import { LogoFull } from "./images";
import { useState, useEffect } from "react";
import {
  Bars3BottomLeftIcon,
  WrenchIcon,
  ArrowRightOnRectangleIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { Channels } from "@/modules/data";
export function UserNav() {
  const [Loading, setLoading] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  const USERPROFILE = [
    { title: "Subscriptions", link: "#", icon: PlayCircleIcon, style: "" },
    { title: "Profile", link: "#", icon: UserCircleIcon, style: "" },
    { title: "Settings", link: "#", icon: WrenchIcon, style: "" },
    {
      title: "Sign Out",
      link: "#",
      icon: ArrowRightOnRectangleIcon,
      style: "",
    },
  ];
  const MobileView = () => {
    return (
      <>
        <nav className="flex flex-row justify-between items-center p-2">
          <div>
            <Bars3BottomLeftIcon
              className="h-10 w-10"
              onClick={() => setOpenMenu(!openMenu)}
            />{" "}
          </div>
          <div>
            <LogoFull classes="w-48 h-16" />{" "}
          </div>
          <div>
            <button onClick={() => setOpenProfile(!openProfile)} type="button">
              <img
                src="/assests/images/user.png"
                className="w-12 h-auto rounded-lg"
                alt="user Profile"
                
              />{" "}
            </button>
            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg z-10 bg-white divide-y divide-gray-100 dark:bg-gray-700">
              {openProfile && (
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  {USERPROFILE.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${item.style}`}
                    >
                      <span className="inline-flex items-center">
                        <item.icon className="h-6 w-6" />
                        &nbsp;
                        {item.title}
                      </span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </nav>
        {openMenu && (
          <div className="w-full p-4 bg-white dark:bg-gray-800 shadow-lg space-y-4">
            <div className="space-y-4">
              <SearchChannel />
            </div>
            <div>
              {Loading && (
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-primary"
                    viewBox="0 0 100 101"
                    fill="none"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              )}
            </div>
          </div>
        )}
      </>
    );
  };
  const DesktopView = () => {
    return (
      <div className="flex flex-col p-4 pt-8 space-y-8">
        <div>
          <button type="button" className="flex items-center space-x-4 courser-pointer" onClick={() => setOpenProfile(!openProfile)}>
              <img
                className="w-10 h-10 rounded-full"
                src="/assests/images/user.png"
                alt="User Profile Image"
              />
              <div className="font-medium dark:text-white">
                <div>Ali Abdullah</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  contact@alig.pk
                </div>
              </div>
          </button>
          <div className="z-20 origin-right absolute top-0 mt-20 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 space-y-4">
              {openProfile && (
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  {USERPROFILE.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${item.style}`}
                    >
                      <span className="inline-flex items-center">
                        <item.icon className="h-6 w-6" />
                        &nbsp;
                        {item.title}
                      </span>
                    </a>
                  ))}
                </div>
              )}
            </div>

        </div>
        <div>
          <SearchChannel />
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="md:hidden">{<MobileView />}</div>
      <div className="hidden md:block">{<DesktopView />}</div>
    </>
  );
}
export function SearchChannel() {
  const [query, setQuery] = useState("");
  const [showChannels, setShowChannels] = useState(Channels);
  useEffect(() => {
    if (query !== "") {
      setShowChannels(
        Channels.filter((channel) =>
          channel.title.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  }, [query]);
  return (
    <>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="Search Channels"
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
      <div>
        {query != "" &&
          showChannels.map((data) => (
            <a
              href="#"
              key={data.id}
              className="z-20 flex flex-row p-2 w-full space-x-2 md:py-4 items-center bg-gray-50 text-black dark:bg-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
            >
              <img
                src={data.icon.childImages[1].path}
                alt={`Image for ${data.title} Channel`}
                height={data.icon.childImages[1].height}
                width={data.icon.childImages[1].width}
                className="rounded-lg w-6 h-6"
              />
              <span className="text-medium text-xl md:text-lg">
                {data.title}
              </span>
            </a>
          ))}
      </div>
    </>
  );
}

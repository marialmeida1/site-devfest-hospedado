"use client";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import HomeButton from "../../home/HomeButton";

export const Navbar = () => {
  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Programação",
      link: "../../schedule",
    },
  ];

  const [showMe, setShowMe] = useState(false);

  function toggle() {
    setShowMe(!showMe);
  }

  return (
    <>
      <nav className="w-full h-16 flex items-center px-6 justify-between shadow-lg">
        <div className="hidden md:block">
          <Link href="/">
            <Image src="/img/logo_gdg.png" width={150} height={150} alt="GDG - Google Io" />
          </Link>
        </div>
        <ul className="hidden md:flex md:justify-center md:gap-8">
          {links.map((el, i) => (
            <li key={i}>
              <Link href={el.link} className="relative inline-block">
                <span className="bg-white hover:bg-gradient transition ease-in-out delay-400 duration-300 pb-1">
                  <span className="bg-white">{el.name}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          <HomeButton
            border="border-2 border-[#1e1e1e]"
            link="https://www.sympla.com.br/evento/devfest-belo-horizonte/2586443"
          >
            Inscreva-se
          </HomeButton>
        </div>
        <div className="md:hidden flex flex-row items-center w-full justify-between x-6">
          <Link href="/">
            <Image src="/img/logo_gdg.png" width={150} height={150} alt="GDG - Google Io" />
          </Link>

          <FontAwesomeIcon
            onClick={toggle}
            icon={faBars}
            className="h-4 cursor-pointer text-zinc-500 hover:bg-zinc-200 hover:text-zinc-700 rounded p-2"
          />
        </div>
      </nav>

      <div className={`${showMe ? "block" : "hidden"} transition-transform`}>
        {links.map((el, i) => (
          <Link href={el.link} key={i}>
            <li
              onClick={toggle}
              className="list-none w-full flex text-sm text-zinc-700 justify-center py-2 hover:bg-gray-50 border-b border-gray-100"
            >
              {el.name}
            </li>
          </Link>
        ))}
      </div>
    </>
  );
};

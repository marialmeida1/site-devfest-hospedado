"use client";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export const Navbar = () => {
  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Sobre",
      link: "../../about",
    },
    {
      name: "Programação",
      link: "../../schedule",
    },/*
    {
      name: "Conheça BH",
      link: "../../bh",
    },
    {
      name: "Organizadores",
      link: "../../organizers",
    },*/
  ];

  const [showMe, setShowMe] = useState(false);
  function toggle() {
    setShowMe(!showMe);
  }

  return (
    <>
      {" "}
      <nav className="w-full h-16 flex items-center justify-center shadow-lg">
        <ul className="w-3/5 hidden md:flex md:justify-between ">
          {links.map((el, i) => (
            <li key={i}>
              <Link href={el.link}>{el.name}</Link>
            </li>
          ))}
        </ul>
        <div className="md:hidden flex flex-row items-center w-full justify-between mx-6">
          <Link href="/">
            <Image
              src="/img/logo_gdg.png"
              width={150}
              height={150}
              alt="GDG - Google Io"
            />
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
          <li
            key={i}
            className="list-none w-full flex text-sm text-zinc-700 justify-center py-2 hover:bg-gray-50 border-b border-gray-100"
          >
            <Link href={el.link}>{el.name}</Link>
          </li>
        ))}
      </div>
    </>
  );
};

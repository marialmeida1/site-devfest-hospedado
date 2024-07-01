"use client";
import React, {useState} from "react";

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
      },
      {
         name: "Conheça BH",
         link: "../../bh",
      },
      {
         name: "Organizadores",
         link: "../../organizers",
      },
   ];

   const [showMe, setShowMe] = useState(false);
   function toggle() {
      setShowMe(!showMe);
   }

   return (
      <>
         {" "}
         <nav className="w-full h-16 flex items-center justify-center">
            <ul className="w-3/5 hidden md:flex md:justify-between ">
               {links.map((el, i) => (
                  <li key={i}>
                     <a href={el.link}>{el.name}</a>
                  </li>
               ))}
            </ul>
            <div className="md:hidden">
               <h2 className="font-bold font-lg" onClick={toggle}>
                  Dev Fest 2024
               </h2>
            </div>
         </nav>
         <div className={showMe ? "block" : "hidden"}>
            {links.map((el, i) => (
               <li key={i} className="list-none w-full flex justify-center py-2 bg-gray-50 border-b border-gray-200">
                  <a href={el.link}>{el.name}</a>
               </li>
            ))}
         </div>
      </>
   );
};

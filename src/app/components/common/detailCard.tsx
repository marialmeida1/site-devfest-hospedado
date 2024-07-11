import React from "react";

import Link from "next/link";
import Image from "next/image";

import SectionTitle from "../common/SectionTitle";
import SectionDescription from "../common/SectionDescription";
import Modal from "../common/Modal";

import { Suspense } from "react";

interface DetailProps {
  title: string;
  image: string;
  text: string;
}

const Detail: React.FC<DetailProps> = ({ title, image, text }) => {
  return (
    <>
      <section className="container flex flex-col gap-8 md:flex-row md:gap-16 py-8 md:py-16">
        <div>
          <SectionTitle align="md:text-left">{title}</SectionTitle>
          <SectionDescription>{text}</SectionDescription>
        </div>
        {image ? (
          <div className="w-full md:w-52 h-52 md:h-auto bg-gray-300 flex-shrink-0">
            <img
              className="w-full h-full object-cover"
              src={image}
              alt={title}
            />
          </div>
        ) : null}
      </section>
    </>
  );
};

export default Detail;

import React from "react";
import SectionTitle from "./SectionTitle";
import SectionDescription from "./SectionDescription";


interface DetailProps {
  title: string;
  image: string;
  text: string;
}

const Detail: React.FC<DetailProps> = ({ title, image, text }) => {
  return (
    <>
      <section className="container flex flex-col gap-8 md:flex-row md:gap-16 py-8 ">
        <div>
          <SectionTitle align="md:text-left">{title}</SectionTitle>
          <SectionDescription>{text}</SectionDescription>
        </div>
        {image ? (
          <div className="w-full md:w-52 h-52 md:h-auto  flex-shrink-0">
            <img
              className="w-full h-full object-cover rounded-lg"
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

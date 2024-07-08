import React from "react";

interface DetailProps {
  name: string;
  image: string;
  text: string;
}

const Detail: React.FC<DetailProps> = ({ name, image, text }) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:space-x-4 mb-8">
      <div className="flex-1">
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p>{text}</p>
      </div>
      {image ? (
        <div className="w-full md:w-52 h-52 md:h-auto bg-gray-300 flex-shrink-0">
          <img className="w-full h-full object-cover" src={image} alt={name} />
        </div>
      ) : null}
    </div>
  );
};

export default Detail;

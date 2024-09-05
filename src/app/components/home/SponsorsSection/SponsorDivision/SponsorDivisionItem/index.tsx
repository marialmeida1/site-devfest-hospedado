import Image from "next/image";

interface props {
  link: string;
  text: string;
  img: string;
}

export default function SponsorDivisionItem({ text, img, link }: props) {
  return (
    <div className="mx-4 mb-8 flex flex-col justify-center items-center">
      <a href={link}>
        <Image className="mb-2" src={img} alt={text} width={70} height={70} />
      </a>
      <p className="font-black">{text}</p>
    </div>
  );
}

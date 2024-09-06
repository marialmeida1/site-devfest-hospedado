import Image from "next/image";

interface props {
  link: string;
  text: string;
  img: string;
}

export default function SponsorDivisionItem({ text, img, link }: props) {
  return (
    <div className="mx-4 mb-8 flex flex-col justify-center items-center">
      <a href={link} target="_blank">
        <Image className="mb-2" src={img} alt={text} width={180} height={180} />
      </a>
    </div>
  );
}

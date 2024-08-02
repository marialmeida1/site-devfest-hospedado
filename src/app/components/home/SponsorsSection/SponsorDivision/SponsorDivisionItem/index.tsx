import Image from "next/image";

export default function SponsorDivisionItem() {
    return (
        <div className="mx-4 mb-8 flex flex-col justify-center items-center">
            <Image
                className="mb-2"
                src="/img/home/sponsors/pear.png"
                alt="Sponsors image"
                width={70}
                height={70}
            />
            <p className="font-black">Loren  Ipsum</p>
        </div>
    );
}
import Image from "next/image";
import { ReactNode } from "react";

interface SponsorDivisionProps {
    category: string;
    children: ReactNode;
}

export default function SponsorDivision({ category, children }: SponsorDivisionProps) {
    return (
        <div className="mt-4  border-t-2 border-[#404040]">
            <h1 className="my-6 text-2xl leading-9 uppercase text-[#979797] font-light text-center">
                {category}
            </h1>
            <div className="h-full flex flex-col justify-evenly sm:flex-row">
                {children}
            </div>
        </div>
    );
}
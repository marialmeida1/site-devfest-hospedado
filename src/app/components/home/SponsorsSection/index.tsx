"use client";

import SponsorDivision from "./SponsorDivision";
import Image from "next/image";
import SponsorDivisionItem from "./SponsorDivision/SponsorDivisionItem";

export default function SponsorsSection() {

    const sponsors = [
        {
            name: "PUC Minas",
            value: 5,
            link: 'https://www.pucminas.br/',
            img: 
        }
    ]

    return (
        <div>
            <SponsorDivision category="Diamante">
                <SponsorDivisionItem />
                <SponsorDivisionItem />
                <SponsorDivisionItem />
                <SponsorDivisionItem />
            </SponsorDivision>
            <SponsorDivision category="Ouro">
                <SponsorDivisionItem />
                <SponsorDivisionItem />
                <SponsorDivisionItem />
            </SponsorDivision>
            <SponsorDivision category="Prata">
                <SponsorDivisionItem />
                <SponsorDivisionItem />
            </SponsorDivision>
            <SponsorDivision category="Bronze">
                <SponsorDivisionItem />
                <SponsorDivisionItem />
                <SponsorDivisionItem />
            </SponsorDivision>
            <SponsorDivision category="Apoio">
                <SponsorDivisionItem />
                <SponsorDivisionItem />
                <SponsorDivisionItem />
                <SponsorDivisionItem />
            </SponsorDivision>
        </div>
    );
}
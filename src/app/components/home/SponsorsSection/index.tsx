"use client";

import SponsorDivision from "./SponsorDivision";
import Image from "next/image";
import SponsorDivisionItem from "./SponsorDivision/SponsorDivisionItem";
import { HomeLink } from "../HomeLink";

export default function SponsorsSection() {
  return (
    <div>
      <SponsorDivision category="Diamante">
        <HomeLink link="#" text="EM BREVE" bg="bg-white hover:text-white" color="text-zinc-900"></HomeLink>
      </SponsorDivision>
      <SponsorDivision category="Ouro">
        <HomeLink link="#" text="EM BREVE" bg="bg-white hover:text-white" color="text-zinc-900"></HomeLink>
      </SponsorDivision>
      <SponsorDivision category="Prata">
        <SponsorDivisionItem
          link="https://lucralize.com.br/"
          img="/img/sponsors/lucralize.png"
          text="Lucralize"
        />
      </SponsorDivision>
      <SponsorDivision category="Bronze">
        <HomeLink link="#" text="EM BREVE" bg="bg-white hover:text-white" color="text-zinc-900"></HomeLink>
      </SponsorDivision>
      <SponsorDivision category="Apoio">
        <SponsorDivisionItem
          link="https://www.pucminas.br/"
          img="/img/sponsors/pucminas.png"
          text="PUC Minas"
        />
      </SponsorDivision>
      <SponsorDivision category="Comunidade Parceira">
        <SponsorDivisionItem
          link="https://www.linkedin.com/company/wtmbh/"
          img="/img/sponsors/wtm_bh.png"
          text="Women Techmakers Belo Horizonte"
        />
      </SponsorDivision>
    </div>
  );
}

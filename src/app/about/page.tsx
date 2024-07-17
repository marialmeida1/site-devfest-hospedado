"use client";
import Image from "next/image";
import ImagesDevFest from "../components/about/ImagesDevFest";
import SectionTitle from "../components/common/SectionTitle";
import SectionDescription from "../components/common/SectionDescription";
import { useState } from "react";
import Timeline from "../components/about/Timeline";
import InfoModal from "../components/common/Modal";

export default function About() {
  const [selectedInfo, setSelectedInfo] = useState<string | null>(null);

  const openModal = (info: string) => {
    setSelectedInfo(info);
  };

  const closeModal = () => {
    setSelectedInfo(null);
  };

  return (
    <div>
      <section className="container pb-6  pt-12">
        <div>
          <SectionTitle align="text-center">O que é o DevFest?</SectionTitle>
          <SectionDescription>
            DevFest é uma conferência global de desenvolvedores organizada por
            Google Developer Groups (GDGs) em todo o mundo. Esses eventos
            organizados pela comunidade se concentram no aprendizado, na
            construção e na conexão com outros desenvolvedores e profissionais
            de tecnologia. Eles oferecem uma variedade de atividades, incluindo
            palestras técnicas, workshops e oportunidades de networking.
          </SectionDescription>
        </div>
        <div>
          <ImagesDevFest />
        </div>
      </section>

      <section className="container flex flex-col gap-8 md:flex-row md:gap-16 py-8 md:py-16">
        <div>
          <SectionTitle align="md:text-left text-center">
            O que é o GDG?
          </SectionTitle>
          <SectionDescription>
            O que é o GDG: Somos o Google Developer Groups de Belo Horizonte
            (GDG BH), uma comunidade apaixonada por tecnologia que se reúne para
            aprender, compartilhar e construir juntos. Como parte da rede global
            GDG, fazemos parte de uma comunidade com mais de 10.000 grupos em
            mais de 170 países, oferecendo uma ampla variedade de eventos e
            atividades emocionantes, incluindo meetups, hackathons, workshops e
            conferências.
          </SectionDescription>
        </div>
        <div className="md:min-w-96 cursor-pointer">
          <Image
            onClick={() => openModal("/img/gdg/google_io.jpg")}
            src="/img/gdg/google_io.jpg"
            width={500}
            height={500}
            alt="GDG - Google Io"
          />
        </div>
        {selectedInfo && (
          <InfoModal isOpen={!!selectedInfo} onClose={closeModal} image={true}>
            <Image
              src={selectedInfo}
              width={700}
              height={700}
              alt="GDG - Google Io"
            />
          </InfoModal>
        )}
      </section>

      <section className="container pt-4 pb-28">
        <SectionTitle align="text-center">Histório dos DevFests</SectionTitle>
        <Timeline />
      </section>
    </div>
  );
}

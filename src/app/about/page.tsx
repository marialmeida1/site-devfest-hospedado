"use client";
import Image from "next/image";
import SectionTitle from "../components/common/SectionTitle";
import SectionDescription from "../components/common/SectionDescription";
import { useEffect, useState } from "react";
import Timeline from "../components/_about/Timeline";
import Modal from "../components/common/Modal";
import Detail from "../components/common/DetailCard";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function About() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // duração da animação
    });
  }, []);

  const [selectedInfo, setSelectedInfo] = useState<string | null>(null);

  const openModal = (info: string) => {
    setSelectedInfo(info);
  };

  const closeModal = () => {
    setSelectedInfo(null);
  };

  return (
    <>
      {/* O que é o DevFest */}
      <section className="container pt-2" data-aos="fade-in">
        <div>
          <SectionTitle align="text-center">O que é o DevFest?</SectionTitle>
          <SectionDescription>
            O DevFest é uma conferência global de desenvolvedores organizada pelos Google Developer
            Groups (GDGs) ao redor do mundo. Esses eventos, organizados pela comunidade, focam em
            aprendizado, construção de projetos e conexão entre desenvolvedores e profissionais de
            tecnologia. As atividades oferecidas incluem palestras técnicas, workshops práticos e
            oportunidades de networking, proporcionando um ambiente rico para o desenvolvimento
            profissional e a troca de conhecimento.
          </SectionDescription>
          <div className="pt-6">
            <SectionDescription>
              Estamos empolgados em anunciar a sexta edição do DevFest em Belo Horizonte! Desde a
              sua primeira edição em 2015, o DevFest BH tem sido um evento crucial para a comunidade
              de desenvolvedores da região, crescendo a cada ano em tamanho e impacto.
            </SectionDescription>
          </div>
        </div>
      </section>

      {/* O que é o GDG */}
      <div className="bg-dark-background my-12" >
        <section className="container flex flex-col text-white gap-8 items-center align-middle md:flex-row md:gap-16 py-6">
          <SectionDescription>
            O que é o GDG: Somos o Google Developer Groups de Belo Horizonte (GDG BH), uma
            comunidade apaixonada por tecnologia que se reúne para <b>aprender, compartilhar e
            construir juntos</b>. Como parte da rede global GDG, fazemos parte de uma comunidade com
            mais de <b>10.000 grupos em mais de 170 países</b>, oferecendo uma ampla variedade de eventos e
            atividades emocionantes, incluindo <b>meetups, hackathons, workshops e conferências.</b>
          </SectionDescription>
          <div className="md:min-w-96 cursor-pointer">
            <Image
              onClick={() => openModal("/img/gdg/google_io.jpg")}
              src="/img/gdg/google_io.jpg"
              width={500}
              height={500}
              alt="GDG - Google Io"
              className="rounded-lg"
            />
          </div>
          {selectedInfo && (
            <Modal isOpen={!!selectedInfo} onClose={closeModal} image={true}>
              <Image src={selectedInfo} width={700} height={700} alt="GDG - Google Io" />
            </Modal>
          )}
        </section>
      </div>

      {/* Timeline */}
      <section className="container pt-2 pb-7">
        <SectionTitle align="text-center">Histórico dos DevFests</SectionTitle>
        <Timeline />
      </section>

      <section className="container py-8" data-aos="fade-up">

        <SectionTitle align="text-center">Organizadores</SectionTitle>

        <Detail
          title="GDG"
          image="/img/logo_gdg-bg.png"
          text="O GDG de Belo Horizonte é responsável pela organização do DevFest. O evento é liderado por Fernanda Costa, Fernanda Rezende, Guilherme Radicchi e Renato Pereira. Esses quatro líderes dedicam-se à coordenação e execução das atividades, garantindo que tudo ocorra de maneira organizada e eficiente. Sob sua liderança, o DevFest se destaca como um momento importante para a comunidade de desenvolvedores locais."
        />

        <Detail
          title="Web Tech"
          image="/img/logo_webtech.jpeg"
          text="A WebTech é um projeto de extensão da PUC Minas que tem como objetivo gerar espaço de trabalho para que alunos e professores criem juntos aplicações, ferramentas e conteúdo para interessados em criar soluções e produtos digitais."
        />
      </section>
    </>
  );
}

"use client";
import SectionTitle from "./components/common/SectionTitle";
import CountdownTimer from "./components/home/CountdownTimer";
import SponsorsSection from "./components/home/SponsorsSection";
import Image from "next/image";
import { useEffect, useState } from "react";
import Modal from "./components/common/Modal";
import { HomeLink } from "./components/home/HomeLink";
import { CommunicationChannelCard } from "./components/home/CommunicationChannelCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import SectionDescription from "./components/common/SectionDescription";

export default function Home() {
  const [selectedInfo, setSelectedInfo] = useState<string | null>(null);

  const openModal = (info: string) => {
    setSelectedInfo(info);
  };

  const closeModal = () => {
    setSelectedInfo(null);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view');
          }
        });
      },
      { threshold: 0.1 } // 10% do elemento visível dispara o efeito
    );
  
    const elements = document.querySelectorAll("[data-scroll]");
    elements.forEach((el) => observer.observe(el));
  
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  

  return (
    <>
      <div className="bg-gradient-to-bottom">
        <Image
          className="w-full hidden md:block"
          width={1920}
          height={1080}
          src="/img/home/banner/banner.jpeg"
          alt="Banner Devfest"
        />

        <Image
          className="w-full block md:hidden"
          width={1920}
          height={1080}
          src="/img/home/banner/banner_mobile.jpeg"
          alt="Banner Devfest"
        />
        <div className="min-h-96 md:min-h-36 bg-gradient-to-b from-[#eeeeee] to-[#ffffff]">
          <CountdownTimer />
        </div>
      </div>

      <section className="h-[30rem] md:h-72 bg-[#252525] flex flex-col md:flex-row justify-center items-center">
        <HomeLink
          link="https://www.sympla.com.br/evento/devfest-belo-horizonte/2586443"
          text="Inscreva-se"
          bg="bg-dark-background"
        />
        <div className="w-80 h-1 my-10 md:w-1 md:mx-10 md:h-44 bg-text-color"></div>
        <div className="flex flex-col gap-4">
          <div className="text-white flex">
            <Image
              className="mr-6"
              src="/img/home/icons/clock.svg"
              alt="ìcone de relógio"
              width={56}
              height={56}
            />
            <div>
              <span className="text-text-color font-bold">Data:</span>
              <h4 className="text-lg">26 de outubro</h4>
              <p className="text-lg">
                A partir das <strong>8:00</strong>
              </p>
            </div>
          </div>
          <div className="text-white flex">
            <Image
              className="mr-6"
              src="/img/home/icons/map.svg"
              alt="ìcone de relógio"
              width={56}
              height={56}
            />
            <div>
              <span className="text-text-color font-bold">Local:</span>
              <h4 className="text-lg mb-2 hover:underline">
                <a href="https://www.google.com/maps/place/PUC+Minas+-+Unidade+Pra%C3%A7a+da+Liberdade/@-19.9332735,-43.9397233,17z/data=!3m1!4b1!4m6!3m5!1s0xa699dc57d681cf:0x897f2f71ae2c8900!8m2!3d-19.9332786!4d-43.9371484!16s%2Fg%2F1ptyh1cl7?entry=tts&g_ep=EgoyMDI0MDkwMi4xKgBIAVAD">
                  <strong>PUC Minas</strong> - Lourdes
                </a>
              </h4>
              <a
                href="#maps"
                className="px-1.5 py-1 rounded-lg border-2 border-white transition-all hover:bg-white hover:text-black"
              >
                Ver endereço
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-8 px-4 flex flex-col text-center lg:w-full lg:flex-row lg:items-center" data-scroll>
        <div
          data-scroll
          className="fade-in h-full mb-10 lg:mb-0 lg:mr-10 lg:w-full lg:text-justify gap-2"
        >
          <h1 className="text-3xl font-black py-4">O que é o DevFest?</h1>
          <div className="gap-2">
            <SectionDescription>
              O DevFest é uma conferência global de desenvolvedores organizada pelos{" "}
              <b>Google Developer Groups (GDGs)</b> ao redor do mundo. Esses eventos, organizados
              pela comunidade, focam em aprendizado, construção de projetos e conexão entre
              desenvolvedores e profissionais de tecnologia. As atividades oferecidas incluem{" "}
              <b>palestras técnicas, workshops práticos e oportunidades de networking</b>,
              proporcionando um ambiente rico para o desenvolvimento profissional e a troca de
              conhecimento.
            </SectionDescription>
            <SectionDescription>
              Estamos empolgados em anunciar a <b>sexta edição do DevFest em Belo Horizonte!</b>{" "}
              Desde a sua primeira edição em 2015, o DevFest BH tem sido um evento crucial para a
              comunidade de desenvolvedores da região, crescendo a cada ano em tamanho e impacto.
            </SectionDescription>
          </div>
        </div>

        <div className="flex justify-center lg:w-2/4">
          <div className="w-full h-72 grid grid-cols-2 gap-2 md:w-2/3 lg:w-full">
            <div className="row-span-2 relative">
              <Image
                className="absolute inset-0 w-full h-full object-cover cursor-pointer rounded-lg"
                onClick={() => openModal("/img/devfest/Devfest2018.jpg")}
                src="/img/devfest/Devfest2018.jpg"
                alt="GDG"
                fill={true}
                sizes="500px, 350px"
              />
            </div>
            <div className="row-span-1 h-full relative">
              <Image
                className="absolute inset-0 w-full h-full object-cover cursor-pointer rounded-lg"
                onClick={() => openModal("/img/devfest/DevFest2017.jpg")}
                src="/img/devfest/DevFest2017.jpg"
                alt="GDG"
                fill={true}
                sizes="500px, 350px"
              />
            </div>
            <div className="row-span-1 h-full relative">
              <Image
                className="absolute inset-0 w-full h-full object-cover cursor-pointer rounded-lg"
                onClick={() => openModal("/img/devfest/DevFest2023.jpg")}
                src="/img/devfest/DevFest2023.jpg"
                alt="GDG"
                fill={true}
                sizes="500px, 350px"
              />
            </div>
            {selectedInfo && (
              <Modal isOpen={!!selectedInfo} onClose={closeModal} image={true}>
                <Image src={selectedInfo} width={700} height={700} alt="GDG" />
              </Modal>
            )}
          </div>
        </div>
      </section>

      <div className="bg-[#F0F0F0]">
        <section className="container pt-8 pb-16 fade-right" data-scroll>
          <SectionTitle align="text-center">
            Palestrantes{" "}
            <HomeLink
              link="#"
              text="EM BREVE"
              bg="bg-[#F0F0F0] hover:text-white"
              color="text-zinc-900"
            ></HomeLink>
          </SectionTitle>
          <div className="flex justify-center md:-ml-24 -ml-12" >
            <FontAwesomeIcon icon={faCircleQuestion} className="text-9xl text-red -mr-8" />
            <FontAwesomeIcon icon={faCircleQuestion} className="text-9xl text-yellow -mr-8" />
            <FontAwesomeIcon icon={faCircleQuestion} className="text-9xl text-blue -mr-8" />
          </div>
          {/*<SpeakerCarousel />*/}
        </section>
      </div>

      <section className="container pt-8 pb-16 fade-up" data-scroll>
        <SectionTitle align="text-center">Patrocinadores</SectionTitle>
        <SponsorsSection />
      </section>

      <div className="bg-dark-background text-white">
        <section className="container py-12 px-4 flex flex-col text-center  lg:w-full lg:flex-row lg:items-center">
          <div className="h-full mb-10 lg:mb-0 lg:mr-10 lg:w-full lg:text-justify ">
            <SectionTitle align="text-center font-black">Mídia Kit</SectionTitle>
            <SectionDescription>
              Interessado em se tornar um patrocinador? Entre em contato conosco pelo e-mail{" "}
              <a href="mailto:gdgbhz@gmail.com" className="text-blue hover:underline">
                gdgbhz@gmail.com
              </a>{" "}
              para saber mais sobre as oportunidades de parceria e como sua empresa pode se
              envolver.
            </SectionDescription>
          </div>
        </section>
      </div>

      <section className="container pt-16 pb-16">
        <SectionTitle align="text-center">Canais de Comunicação</SectionTitle>
        <div className="mt-7 flex justify-center flex-wrap fade-up" data-scroll>
          <CommunicationChannelCard
            cardLink="https://www.youtube.com/@GDG_BH"
            cardColor="red hover:bg-red-dark"
            cardText="Canal Youtube"
            imagePath="/img/home/icons/youtube.svg"
          />
          <CommunicationChannelCard
            cardLink="https://www.instagram.com/gdg_bh?igsh=MThldWxkcmZ3MWwxYw=="
            cardColor="yellow hover:bg-yellow-dark"
            cardText="Instagram GDG"
            imagePath="/img/home/icons/instagram.svg"
          />
          <CommunicationChannelCard
            cardLink="https://gdg.community.dev/gdg-belo-horizonte/"
            cardColor="green hover:bg-green-dark"
            cardText="Site GDG"
            imagePath="/img/home/icons/web.svg"
          />
          <CommunicationChannelCard
            cardLink="https://www.linkedin.com/company/gdg-belo-horizonte/"
            cardColor="blue hover:bg-blue-dark"
            cardText="Linkedin"
            imagePath="/img/home/icons/linkedin.svg"
          />
        </div>
      </section>

      <div className="py-16 bg-dark-background md:py-0" id="maps">
        <section className="container h-32 text-white flex flex-col justify-between items-center md:flex-row">
          <h1 className="font-black text-3xl mb-10 md:mb-0">Localização</h1>
          <div className="text-center text-sm flex flex-col gap-1 md:text-left md:text-base">
            <p>
              <strong>Data:</strong> 26 de outubro | 8:00 horas
            </p>
            <a
              className="hover:underline"
              href="https://www.google.com/maps/place/PUC+Minas+-+Unidade+Pra%C3%A7a+da+Liberdade/@-19.9332735,-43.9397233,17z/data=!3m1!4b1!4m6!3m5!1s0xa699dc57d681cf:0x897f2f71ae2c8900!8m2!3d-19.9332786!4d-43.9371484!16s%2Fg%2F1ptyh1cl7?entry=tts&g_ep=EgoyMDI0MDkwMi4xKgBIAVAD"
            >
              <strong>Local:</strong> Puc Minas Lourdes Av. Brasil, 2023 - Funcionários
            </a>
          </div>
        </section>
      </div>

      <section className="h-64">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.789497313057!2d-43.939723324251055!3d-19.933273538411505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699dc57d681cf%3A0x897f2f71ae2c8900!2sPUC%20Minas%20-%20Unidade%20Pra%C3%A7a%20da%20Liberdade!5e0!3m2!1spt-BR!2sbr!4v1722176637277!5m2!1spt-BR!2sbr"
          loading="lazy"
          className="w-full h-full filter grayscale"
        ></iframe>
      </section>
    </>
  );
}

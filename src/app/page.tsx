"use client";
import SectionDescription from "./components/common/SectionDescription";
import SectionTitle from "./components/common/SectionTitle";
import CountdownTimer from "./components/home/CountdownTimer";
import HomeButton from "./components/home/HomeButton";
import SpeakerCarousel from "./components/home/SpeakerCarousel";
import QuestionAccordion from "./components/home/QuestionAccordion";
import SponsorsSection from "./components/home/SponsorsSection";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Modal from "./components/common/Modal";
import { HomeLink } from "./components/home/HomeLink";
import { CommunicationChannelCard } from "./components/home/CommunicationChannelCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [selectedInfo, setSelectedInfo] = useState<string | null>(null);

  const openModal = (info: string) => {
    setSelectedInfo(info);
  };

  const closeModal = () => {
    setSelectedInfo(null);
  };

  return (
    <>
      <div className="bg-gradient-to-bottom">
        <Image
          className="w-full"
          width={1920}
          height={1080}
          src="/img/home/banner/banner.jpg"
          alt="Banner Devfest"
        />
        <div className="min-h-32 md:min-h-36 bg-gradient-to-b from-[#eeeeee] to-[#ffffff]">
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
                  <strong>PUC Minas</strong> - Praça da Liberdade
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
      <section className="container py-8 px-4 flex flex-col text-center sm:w-4/5 lg:w-full lg:flex-row lg:items-center">
        <div className="h-full mb-10 lg:mb-0 lg:mr-10 lg:w-full lg:text-justify">
          <h1 className="text-3xl font-black py-4">O que é o Dev Fest?</h1>
          <p className="lg:mr-24">
            DevFest é uma conferência global de desenvolvedores organizada por Google Developer
            Groups (GDGs) em todo o mundo, com palestras, workshops e oportunidades de networking.
          </p>
          <div className="h-8"></div>
          <HomeButton border="border-2 border-[#1e1e1e]" link="/about">
            Saiba mais
          </HomeButton>
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
        <section className="container pt-8 pb-16">
          <SectionTitle align="text-center">
            Palestrantes{" "}
            <HomeLink link="#" text="EM BREVE" bg="bg-[#F0F0F0]" color="text-zinc-900"></HomeLink>
          </SectionTitle>
          <div className="flex justify-center md:-ml-24 -ml-12">
            <FontAwesomeIcon icon={faCircleQuestion} className="text-9xl text-red -mr-8" />
            <FontAwesomeIcon icon={faCircleQuestion} className="text-9xl text-yellow -mr-8" />
            <FontAwesomeIcon icon={faCircleQuestion} className="text-9xl text-blue -mr-8" />
          </div>
          {/*<SpeakerCarousel />*/}
        </section>
      </div>
      {/*<section className="container py-8">
        <SectionTitle align="text-center">Dúvidas frequentes</SectionTitle>
        <QuestionAccordion
          question="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
        <QuestionAccordion
          question="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
        <QuestionAccordion
          question="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
      </section>*/}
      <section className="container pt-8 pb-16">
        <SectionTitle align="text-center">Patrocinadores</SectionTitle>
        <SponsorsSection />
      </section>
      <div className="bg-dark-background text-white">
        <section className="container py-12 px-4 flex flex-col text-center sm:w-4/5 lg:w-full lg:flex-row lg:items-center">
          <div className="h-full mb-10 lg:mb-0 lg:mr-10 lg:w-full lg:text-justify ">
            <h1 className="text-3xl font-black py-4">Media Kit</h1>
            <p className="lg:mr-24 ">
              Interessado em se tornar um patrocinador? Entre em contato conosco pelo e-mail{" "}
              <a href="mailto:gdgbhz@gmail.com" className="text-blue hover:underline">gdgbhz@gmail.com</a> para saber mais sobre as
              oportunidades de parceria e como sua empresa pode se envolver.
            </p>
            <div className="h-8"></div>
          </div>
          <div className="flex justify-center lg:w-2/4">
            <a href="/Devfest.pdf" download="Devfest.pdf" aria-label="Conteúdos">
              <div className="bg-dark-background px-1 py-1 rounded-md border-0 border-transparent bg-gradient p-[2px]">
                <div className="w-80 h-44 bg-dark-background flex justify-center items-center rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-text-color flex justify-center items-center">
                    <ArrowDown className="text-dark-background font-black" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </section>
      </div>
      <section className="container pt-16 pb-16">
        <SectionTitle align="text-center">Canais de Comunicação</SectionTitle>
        <div className="mt-7 flex justify-center flex-wrap">
          <CommunicationChannelCard
            cardLink="https://chat.whatsapp.com/CxZFvGaZF095OIzy71rXTo"
            cardColor="green hover:bg-green-dark"
            cardText="Comunidade GDG"
            imagePath="/img/home/icons/whatsapp.svg"
          />
          <CommunicationChannelCard
            cardLink="https://www.instagram.com/gdg_bh?igsh=MThldWxkcmZ3MWwxYw=="
            cardColor="red hover:bg-red-dark"
            cardText="Instagram GDG"
            imagePath="/img/home/icons/instagram.svg"
          />
          <CommunicationChannelCard
            cardLink="https://gdg.community.dev/gdg-belo-horizonte/"
            cardColor="yellow hover:bg-yellow-dark"
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
            <a className="hover:underline" href="https://www.google.com/maps/place/PUC+Minas+-+Unidade+Pra%C3%A7a+da+Liberdade/@-19.9332735,-43.9397233,17z/data=!3m1!4b1!4m6!3m5!1s0xa699dc57d681cf:0x897f2f71ae2c8900!8m2!3d-19.9332786!4d-43.9371484!16s%2Fg%2F1ptyh1cl7?entry=tts&g_ep=EgoyMDI0MDkwMi4xKgBIAVAD">
              <strong>Local:</strong> Puc Minas Liberdade Av. Brasil, 2023 - Funcionários
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

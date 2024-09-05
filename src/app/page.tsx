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
        <div className="min-h-32 md:min-h-52">
          <CountdownTimer />
        </div>
      </div>

      <section className="h-[30rem] md:h-72 bg-dark-background flex flex-col md:flex-row justify-center items-center">
        <HomeLink link="https://www.sympla.com.br/evento/devfest-belo-horizonte/2586443" text="Inscreva-se" />
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
              <p className="text-lg">A partir das <strong>8:00</strong></p>
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
              <h4 className="text-lg mb-2"><strong>PUC Minas</strong> - Praça da Liberdade</h4>
              <a href="https://maps.app.goo.gl/kD25oagS6TGC2LX98" target="_blank" className="px-1.5 py-1 rounded-lg border-2 border-white transition-all hover:bg-white hover:text-black">
                Ver endereço
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="container py-8 px-4 flex flex-col text-center sm:w-4/5 lg:w-full lg:flex-row lg:items-center">
        <div className="h-full mb-10 lg:mb-0 lg:mr-10 lg:w-full lg:text-justify">
          <h1 className="text-3xl font-black py-4">O que é o Dev Fest?</h1>
          <p className="font-medium lg:mr-24">
            DevFest é uma conferência global de desenvolvedores organizada por Google Developer
            Groups (GDGs) em todo o mundo. Esses eventos organizados pela comunidade se concentram
            no aprendizado, na construção e na conexão com outros desenvolvedores e profissionais de
            tecnologia. Eles oferecem uma variedade de atividades, incluindo palestras técnicas,
            workshops e oportunidades de networking.
          </p>
          <div className="h-8"></div>
          <HomeButton border="border-2 border-[#1e1e1e]">Saiba mais</HomeButton>
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
          <SectionTitle align="text-center">Palestrantes</SectionTitle>
          <SpeakerCarousel />
        </section>
      </div>
      <section className="container py-8">
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
      </section>
      <div className="bg-[#F0F0F0]">
        <section className="container pt-8 pb-16">
          <SectionTitle align="text-center">Patrocinadores</SectionTitle>
          <SponsorsSection />
        </section>
      </div>
      <div className="bg-dark-background text-white">
        <section className="container py-12 px-4 flex flex-col text-center sm:w-4/5 lg:w-full lg:flex-row lg:items-center">
          <div className="h-full mb-10 lg:mb-0 lg:mr-10 lg:w-full lg:text-justify ">
            <h1 className="text-3xl font-black py-4">Media Kit</h1>
            <p className="font-medium lg:mr-24 ">
            Interessado em se tornar um patrocinador? Entre em contato conosco pelo e-mail <a href="mailto:gdgbhz@gmail.com">gdgbhz@gmail.com</a> para saber 
            mais sobre as oportunidades de parceria e como sua empresa pode se envolver.
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
              cardColor="green"
              cardText="Comunidade GDG"
              imagePath="/img/home/icons/whatsapp.svg"
            />
            <CommunicationChannelCard
              cardLink="https://www.instagram.com/gdg_bh?igsh=MThldWxkcmZ3MWwxYw=="
              cardColor="blue"
              cardText="Instagram GDG"
              imagePath="/img/home/icons/instagram.svg"
            />
            <CommunicationChannelCard
              cardLink="https://gdg.community.dev/gdg-belo-horizonte/"
              cardColor="yellow"
              cardText="Site GDG"
              imagePath="/img/home/icons/web.svg"
            />
          </div>
        </section>
    </>
  );
}

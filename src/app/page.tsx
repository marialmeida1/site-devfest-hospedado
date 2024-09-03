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


      <section className="container py-8 px-4 flex flex-col text-center sm:w-4/5 lg:w-full lg:flex-row lg:items-center">
        <div className="h-full mb-10 lg:mb-0 lg:mr-10 lg:w-full lg:text-justify ">
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
      <section className="container py-8 px-4 flex flex-col text-center sm:w-4/5 lg:w-full lg:flex-row lg:items-center">
        <div className="h-full mb-10 lg:mb-0 lg:mr-10 lg:w-full lg:text-justify ">
          <h1 className="text-3xl font-black py-4">Media Kit</h1>
          <p className="font-medium lg:mr-24 ">
            Gostaria de patrocinar nosso evento e obter visibilidade para sua marca? Entre em
            contato pelo nosso e-mail para mais informações sobre as oportunidades de patrocínio.
            Estamos ansiosos para colaborar com você!
          </p>
          <div className="h-8"></div>
        </div>
        <div className="flex justify-center lg:w-2/4">
          <a href="/Devfest.pdf" download="Devfest.pdf" aria-label="Conteúdos">
            <div className="w-80 h-44 bg-[#D9D9D9] flex justify-center items-center rounded-lg">
              <div className="w-10 h-10 rounded-full bg-[#1E1E1E] flex justify-center items-center">
                <ArrowDown className="text-[#D9D9D9] font-black" />
              </div>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}

"use client"
import Image from "next/image";
import styles from "./Timeline.module.css";
import { useEffect, useState } from "react";
import Modal from "../common/Modal";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

interface Events {
  title: string;
  year: string;
  image: string;
}

const events: Events[] = [
  {
    title: "DevFest 2015",
    year: "2015",
    image: "/img/devfest/Devfest2015.png",
  },
  {
    title: "DevFest 2016",
    year: "2016",
    image: "/img/devfest/Devfest2016.png",
  },
  {
    title: "DevFest 2017",
    year: "2017",
    image: "/img/devfest/DevFest2017.jpg",
  },
  {
    title: "DevFest 2018",
    year: "2018",
    image: "/img/devfest/Devfest2018.jpg",
  },
  {
    title: "DevFest 2023",
    year: "2023",
    image: "/img/devfest/DevFest2023.jpg",
  },
];

export default function Timeline() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // duração da animação
    });
  }, []);

  const [selectedEvent, setSelectedEvent] = useState<Events | null>(null);

  const openModal = (event: Events) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="gap-8 my-8 flex flex-col border-l-2 border-gray-900 lg:border-l-0 lg:flex-row lg:border-b-2 lg:border-gray-900">
      {events.map((el, i) => (
        <div key={i} className="flex flex-row lg:flex-col">
          <div className="flex justify-center align-middle relative lg:hidden">
            <div className="bg-gray-900 rounded-full top-1/2 w-3 h-3 absolute" data-aos="fade-down"></div>
          </div>

          <div onClick={() => openModal(el)} className="w-2/3 md:w-full cursor-pointer h-40 flex items-center justify-center pl-4 lg:pl-0 lg:pb-12">
            <div className="relative w-40 md:min-w-full min-h-40 ">
                <Image
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  src={el.image}
                  alt={el.title}
                  fill={true}
                  sizes="500px, 350px"
                />
            </div>
          </div>

          <div className="flex flex-col align-middle justify-center pl-2">
            <h4 className="pt-2 lg:pt-6 lg:pb-4 text-center font-black text-3xl text-zinc-800" data-aos="zoom-in">
              {el.year}
            </h4>
          </div>

          <div className="hidden justify-center relative lg:flex" data-aos="fade-right">
            <div
              className={`bg-gray-900 rounded-full w-3 h-3 ${styles["position-point"]}`}
            ></div>
          </div>
        </div>
      ))}
      {selectedEvent && (
        <Modal isOpen={!!selectedEvent} onClose={closeModal} image={true}>
          <div className="space-y-4">
            <Image
              src={selectedEvent.image}
              width={700}
              height={700}
              alt={selectedEvent.title}
              className="rounded-lg"
            />
          </div>
        </Modal>
      )}
    </div>
  );
}

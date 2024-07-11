import Link from "next/link";
import Image from "next/image";

import ImagesDevFest from "../components/about/ImagesDevFest";
import SectionTitle from "../components/common/SectionTitle";
import SectionDescription from "../components/common/SectionDescription";
import {Suspense} from "react";
import Modal from "../components/common/Modal";

export default function About() {
   return (
      <div>
         <section className="container py-6">
            <div>
               <SectionTitle align="text-center">O que é o DevFest?</SectionTitle>
               <SectionDescription>
                  DevFest é uma conferência global de desenvolvedores organizada por Google Developer Groups (GDGs) em todo o mundo. Esses eventos organizados pela comunidade se concentram no aprendizado, na construção e na conexão com outros desenvolvedores e profissionais de tecnologia. Eles oferecem uma variedade de
                  atividades, incluindo palestras técnicas, workshops e oportunidades de networking.
               </SectionDescription>
            </div>
            <div>
               <ImagesDevFest />
            </div>
         </section>

         <section className="container flex flex-col gap-8 md:flex-row md:gap-16 py-8 md:py-16">
            <div>
               <SectionTitle align="md:text-left">O que é o GDG?</SectionTitle>
               <SectionDescription>
                  O que é o GDG: Somos o Google Developer Groups de Belo Horizonte (GDG BH), uma comunidade apaixonada por tecnologia que se reúne para aprender, compartilhar e construir juntos. Como parte da rede global GDG, fazemos parte de uma comunidade com mais de 10.000 grupos em mais de 170 países, oferecendo
                  uma ampla variedade de eventos e atividades emocionantes, incluindo meetups, hackathons, workshops e conferências.
               </SectionDescription>
            </div>
            <div className="md:min-w-96">
               <Link href="?modal=true">
                  <Image src="/img/gdg/google_io.jpg" width={500} height={500} alt="GDG - Google Io" />
               </Link>
            </div>
            <Suspense fallback={<>Loading...</>}>
               <Modal>
                  <Image src="/img/gdg/google_io.jpg" width={700} height={700} alt="GDG - Google Io" />
               </Modal>
            </Suspense>
         </section>

         <section className="container"></section>
      </div>
   );
}

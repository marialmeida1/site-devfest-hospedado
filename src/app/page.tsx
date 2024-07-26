import SectionDescription from "./components/common/SectionDescription";
import SectionTitle from "./components/common/SectionTitle";
import CountdownTimer from "./components/home/CountdownTimer";
import HomeButton from "./components/home/HomeButton";
import SpeakerCarousel from "./components/home/SpeakerCarousel";
import QuestionAccordion from "./components/home/QuestionAccordion";
import SponsorCarousel from "./components/home/SponsorCarousel";

export default function Home() {
   return (
      <>
         <div className="bg-[#9f9f9f]">
            <section className="container h-80 py-14 xl:h-72">
                  <div className="h-full md:w-2/3 xl:w-1/3">
                     <h1 className="text-3xl font-black pb-4">Dev Fest</h1>
                     <SectionDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Phasellus sapien elit, dapibus ut lectus quis, tincidunt 
                        congue ex.
                     </SectionDescription>
                     <div className="h-8"></div>
                     <HomeButton>Inscrever-se</HomeButton>
                  </div>
               </section>
         </div>
         <CountdownTimer />
         <section className="container py-8 px-4 flex flex-col text-center sm:w-4/5 lg:w-full lg:flex-row lg:items-center">
            <div className="h-full mb-10 lg:mb-0 lg:mr-10 lg:w-full lg:text-justify ">
               <h1 className="text-3xl font-black py-4">O que é  o Dev Fest?</h1>
               <p className="font-medium lg:mr-24">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus 
                  sapien elit, dapibus ut lectus quis, tincidunt congue ex. Lorem ipsum 
                  dolor sit amet, consectetur adipiscing elit. Phasellus sapien elit, dapibus 
                  ut lectus quis, tincidunt congue ex. Lorem ipsum dolor sit amet, consectetur 
                  adipiscing elit. Phasellus sapien elit, dapibus ut lectus quis, tincidunt congue ex. 
               </p>
               <div className="h-8"></div>
               <HomeButton border="border-2 border-[#1e1e1e]">
                  Saiba mais
               </HomeButton>
            </div>
            <div className="flex justify-center lg:w-2/4">
               <div className="w-full h-72 grid grid-cols-2 gap-2 md:w-2/3 lg:w-full">
                  <div className="bg-[#d9d9d9] row-span-2"></div>
                  <div className="bg-[#d9d9d9] row-span-1 h-full"></div>
                  <div className="bg-[#d9d9d9] row-span-1 h-full"></div>
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
               <SectionTitle align="text-center">Palestrantes</SectionTitle>
               <SponsorCarousel />
            </section>
         </div>
      </>
   );
}

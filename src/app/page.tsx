import SectionDescription from "./components/common/SectionDescription";
import SectionTitle from "./components/common/SectionTitle";
import CountdownTimer from "./components/home/CountdownTimer";
import HomeButton from "./components/home/HomeButton";

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
      </>
   );
}

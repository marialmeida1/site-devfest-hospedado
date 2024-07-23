import CountdownTimer from "./components/home/CountdownTimer";
import HomeButton from "./components/home/HomeButton";

export default function Home() {
   return (
      <>
         <section className="h-80 bg-[#9f9f9f] px-20 py-14 xl:h-72">
            <div className="h-full flex flex-col justify-between items-start md:w-2/3 xl:w-1/3">
               <h1 className="text-4xl font-black">Dev Fest</h1>
               <p className="font-medium">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Phasellus sapien elit, dapibus ut lectus quis, tincidunt 
                  congue ex.
               </p>
               <HomeButton text="Inscrever-se" />
            </div>
         </section>
         <CountdownTimer />
      </>
   );
}

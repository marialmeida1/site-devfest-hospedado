import CountdownTimer from "./components/home/CountdownTimer";

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
               <a href="#" className="bg-white px-1.5 py-1 rounded-lg hover:bg-[#1e1e1e] hover:text-white">Inscrever-se</a>
            </div>
         </section>
         <CountdownTimer />
      </>
   );
}

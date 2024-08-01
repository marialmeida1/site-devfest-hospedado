interface SectionAboutBHProps {
    title: string;
    description: string;
}

export default function SectionAboutBH({ title, description }: SectionAboutBHProps) {
    return (
        <section className="container mt-12 mb-4 px-4 flex flex-col text-center sm:w-4/5 lg:w-full lg:flex-row">
            <div className="h-full mb-10 lg:mb-0 lg:mr-10 lg:w-full lg:text-justify ">
               <h1 className="text-2xl font-black pb-4">{title}</h1>
               <p className="font-medium text-[15px]">
                  {description}
               </p>
            </div>
            <div className="flex justify-center lg:w-2/4">
               <div className="w-72 h-52 bg-[#D9D9D9] flex justify-center items-center rounded-lg">
               </div>
            </div>
         </section>
    );
}
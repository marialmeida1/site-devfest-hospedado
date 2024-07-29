import SectionAboutBH from "../components/bh/SectionAboutBH";
import SectionDescription from "../components/common/SectionDescription";
import SectionTitle from "../components/common/SectionTitle";

export default function Info() {
   return (
      <>
         <section className="h-64 mb-20">
            <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.789497313057!2d-43.939723324251055!3d-19.933273538411505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699dc57d681cf%3A0x897f2f71ae2c8900!2sPUC%20Minas%20-%20Unidade%20Pra%C3%A7a%20da%20Liberdade!5e0!3m2!1spt-BR!2sbr!4v1722176637277!5m2!1spt-BR!2sbr"
               loading="lazy"
               className="w-full h-full filter grayscale"
            >
            </iframe>
         </section>
         <section className="container mb-14">
            <h1 className="text-center text-3xl font-black py-4 lg:text-left">Informações</h1>
            <p className="text-wrap text-center lg:text-justify">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
               Phasellus sapien elit, dapibus ut lectus quis, tincidunt 
               congue ex. Lorem ipsum dolor sit amet, consectetur adipiscing 
               elit. Phasellus sapien elit, dapibus ut lectus quis, tincidunt 
               congue ex. Lorem ipsum dolor sit amet, consectetur adipiscing 
               elit. Phasellus sapien elit, dapibus ut lectus quis, tincidunt c
               ongue ex. 
            </p>
         </section>
         <div className="mt-16 mb-24">
            <SectionAboutBH
               title="Alimentação"
               description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sapien elit, dapibus ut lectus quis, tincidunt congue ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sapien elit, dapibus ut lectus quis, tincidunt congue ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sapien elit, dapibus ut lectus quis, tincidunt congue ex. "
            />
            <SectionAboutBH
               title="Hospedagem"
               description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sapien elit, dapibus ut lectus quis, tincidunt congue ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sapien elit, dapibus ut lectus quis, tincidunt congue ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sapien elit, dapibus ut lectus quis, tincidunt congue ex. "
            />
            <SectionAboutBH
               title="Lazer"
               description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sapien elit, dapibus ut lectus quis, tincidunt congue ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sapien elit, dapibus ut lectus quis, tincidunt congue ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sapien elit, dapibus ut lectus quis, tincidunt congue ex. "
            />
         </div>
      </>
   );
}

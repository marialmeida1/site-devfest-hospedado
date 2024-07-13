import SectionTitle from "../components/common/SectionTitle";
import Table from "../components/schedule/Table";

export default function Schedule() {
   return (
      <section className="container py-12">
         <SectionTitle align="text-center">
            Programação
         </SectionTitle>
         <Table/>
      </section>
   );
}

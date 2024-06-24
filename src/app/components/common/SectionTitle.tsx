import {ReactNode} from "react";

interface Props {
   children: ReactNode;
   align?: string; // atributo não obrigatório
}

export default function SectionTitle({children, align = "text-left"}: Props) {
   const className = `${align} text-3xl font-black py-4`;
   return <h1 className={className}>{children}</h1>;
}

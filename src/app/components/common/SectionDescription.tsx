import {ReactNode} from "react";

interface Props {
   children: ReactNode;
}

export default function SectionDescription({children}: Props) {
   return <p className="text-justify text-wrap">{children}</p>;
}

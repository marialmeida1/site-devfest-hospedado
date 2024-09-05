import { ReactNode } from "react";

interface HomeButtonProps {
    children: ReactNode;
    border?: string;
    link: string;
}

export default function HomeButton({ children, border, link }: HomeButtonProps) {
    const className = `bg-white px-1.5 py-1 rounded-lg hover:bg-[#1e1e1e] ${border} transition-all hover:text-white`;

    return (
        <a href={link} className={className}>
            {children}
        </a>
    )
}
import { ReactNode } from "react";

interface HomeButtonProps {
    children: ReactNode;
    border?: string;
}

export default function HomeButton({ children, border }: HomeButtonProps) {
    const className = `bg-white px-1.5 py-1 rounded-lg hover:bg-[#1e1e1e] ${border} transition-all hover:text-white`;

    return (
        <a href="#" className={className}>
            {children}
        </a>
    )
}
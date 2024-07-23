interface HomeButtonProps {
    text: string;
}

export default function HomeButton({ text }: HomeButtonProps) {
    return (
        <a href="#" className="bg-white px-1.5 py-1 rounded-lg hover:bg-[#1e1e1e] hover:text-white">
            {text}
        </a>
    )
}
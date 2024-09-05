import Image from "next/image";

interface CommunicationChannelCardProps {
    cardLink: string;
    cardColor: string;
    cardText: string;
    imagePath: string;
}

export function CommunicationChannelCard({
    cardLink,
    cardColor,
    cardText,
    imagePath
}: CommunicationChannelCardProps) {
    return (
        <a href={cardLink} target="_blank" className="mx-auto">
            <div className="w-36 m-3 flex flex-col items-center md:m-0">
                <div className={`w-24 h-24 bg-${cardColor} rounded-full flex justify-center items-center`}>
                    <Image
                    src={imagePath}
                    alt="Canal de Comunicação"
                    width={51}
                    height={51}
                    />
                </div>
                <p className="mt-3 text-center">{cardText}</p>
            </div>
        </a>
    );
}
import { Globe, Instagram } from "lucide-react";

interface ParticipantCardProps {
    title: string;
    description: string;
    instagramLink: string;
    websiteLink: string;
}

export default function ParticipantCard({ 
    title,
    description,
    instagramLink,
    websiteLink
 }: ParticipantCardProps) {
    return (
        <div className="min-w-64 max-w-64 h-[372px] rounded-lg flex flex-col">
            <div className="h-2/5 bg-[#7B7B7B] rounded-lg"></div>
            <div className="py-4 h-3/5 px-4 bg-white">
                <h1 className="font-black text-xl">{title}</h1>
                <p className="text-sm text-justify">
                    {description}
                </p>
                <div className="h-2/5 flex justify-center items-center gap-6">
                    <a href={instagramLink} target="_blank">
                        <div className="bg-[#7B7B7B] w-8 h-8 flex justify-center items-center rounded-full transition-all cursor-pointer hover:bg-[#F0F0F0]">
                            <Instagram className="w-5 h-5 text-[#F0F0F0] hover:text-[#7B7B7B]" />
                        </div>
                    </a>
                    <a href={websiteLink} target="_blank">
                        <div className="bg-[#7B7B7B] w-8 h-8 flex justify-center items-center rounded-full transition-all cursor-pointer hover:bg-[#F0F0F0]">
                            <Globe className="w-5 h-5 text-[#F0F0F0] hover:text-[#7B7B7B]" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
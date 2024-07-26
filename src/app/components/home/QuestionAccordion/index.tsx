"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface QuestionAccordionProps {
    question: string;
    answer: string;
}

export default function QuestionAccordion({ question, answer }: QuestionAccordionProps) {
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);

    const toggleAccordionState = () => {
        setIsAccordionOpen(prevState => {
            return !prevState;
        });
    }

    return (
        <div className="m-6">
            <div onClick={toggleAccordionState} className={`min-h-14 px-4 py-4 bg-[#efefef] border-l-[#252525] border-l-4 flex justify-between items-center transition-all cursor-pointer hover:bg-zinc-200 ${isAccordionOpen ? 'rounded-tl-lg rounded-tr-lg' : 'rounded-lg'}`}>
                <p className="font-bold">{question}</p>
                {isAccordionOpen ? (
                    <ChevronUp className="ml-8" />
                ) : (
                    <ChevronDown className="ml-8" />
                )}
            </div>
            {isAccordionOpen && (
                <div className="px-4 py-4 bg-white rounded-bl-lg rounded-br-lg border-b border-r border-l border-[#efefef] transition-all">
                    <p className="text-[15px] text-justify">
                        {answer}
                    </p>
                </div>
            )}
        </div>
    );
}
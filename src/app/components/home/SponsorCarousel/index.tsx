"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function SponsorCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCardsCount, setVisibleCardsCount] = useState(3);
    const [cardCount, setCardCount] = useState(0);
    const cardContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (cardContainerRef.current) {
            const count = cardContainerRef.current.querySelectorAll('.card').length;
            setCardCount(count);
        }
    }, []);

    useEffect(() => {
        const checkScreenWidth = () => {
            let newVisibleCardsCount = 0;

            if (window.innerWidth >= 1024) {
                newVisibleCardsCount = 3;
            } else if (window.innerWidth >= 768) {
                newVisibleCardsCount = 2;
            } else {
                newVisibleCardsCount = 1;
            }

            setVisibleCardsCount(newVisibleCardsCount);
            setCurrentIndex(0); // Reset index on resize
        }

        checkScreenWidth();
        window.addEventListener('resize', checkScreenWidth);

        return () => {
            window.removeEventListener('resize', checkScreenWidth);
        };
    }, []);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => {
            if ((prevIndex + 1) * visibleCardsCount >= cardCount) {
                return 0; // Reset to start if at the end
            } else {
                return prevIndex + 1;
            }
        });
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex === 0) {
                return Math.ceil(cardCount / visibleCardsCount) - 1;
            } else {
                return prevIndex - 1;
            }
        });
    };

    const cardWidthPercentage = 100 / visibleCardsCount;
    const cardGapPercentage = 2; // Defina o valor de gap desejado aqui
    const translateValue = cardWidthPercentage + cardGapPercentage;

    return (
        <div className="w-full flex justify-between items-center">
            <ChevronLeft
                className="size-8 text-[#1E1E1E] cursor-pointer transition-all hover:text-zinc-500"
                onClick={handlePrev}
            />
            <div className="overflow-hidden w-full">
                <div ref={cardContainerRef} className="flex gap-2 transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * translateValue}%)` }}>
                    <div className="card flex-none w-full flex justify-center h-48 rounded-lg bg-[#7B7B7B]" style={{ flex: `0 0 calc(${cardWidthPercentage}% - ${cardGapPercentage}px)` }}></div>
                    <div className="card flex-none w-full flex justify-center h-48 rounded-lg bg-[#7B7B7B]" style={{ flex: `0 0 calc(${cardWidthPercentage}% - ${cardGapPercentage}px)` }}></div>
                    <div className="card flex-none w-full flex justify-center h-48 rounded-lg bg-[#7B7B7B]" style={{ flex: `0 0 calc(${cardWidthPercentage}% - ${cardGapPercentage}px)` }}></div>
                    <div className="card flex-none w-full flex justify-center h-48 rounded-lg bg-[#7B7B7B]" style={{ flex: `0 0 calc(${cardWidthPercentage}% - ${cardGapPercentage}px)` }}></div>
                </div>
            </div>
            <ChevronRight
                className="size-8 text-[#1E1E1E] cursor-pointer transition-all hover:text-zinc-500"
                onClick={handleNext}
            />
        </div>
    );
}
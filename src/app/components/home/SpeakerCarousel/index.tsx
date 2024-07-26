"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import SpeakerCard from "./SpeakerCard";

export default function SpeakerCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [screenWidth, setScreenWidth] = useState('w-1/3');
    const [translateValue, setTranslateValue] = useState(100 / 3);
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
            let newWidthClass = '';
            let newTranslateValue = 0;

            if (window.innerWidth >= 1024) {
                newVisibleCardsCount = 3;
                newWidthClass = 'w-1/3';
                newTranslateValue = 100 / 3;
            } else if (window.innerWidth >= 768) {
                newVisibleCardsCount = 2;
                newWidthClass = 'w-1/2';
                newTranslateValue = 100 / 2;
            } else {
                newVisibleCardsCount = 1;
                newWidthClass = 'w-full';
                newTranslateValue = 100;
            }

            setScreenWidth(newWidthClass);
            setTranslateValue(newTranslateValue);
            setVisibleCardsCount(newVisibleCardsCount);
        }

        checkScreenWidth();
        window.addEventListener('resize', checkScreenWidth);

        return () => {
            window.removeEventListener('resize', checkScreenWidth);
        };
    }, []);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex + visibleCardsCount >= cardCount) {
                return 0;
            } else {
                return prevIndex + 1;
            }
        });
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? cardCount - visibleCardsCount : prevIndex - 1
        );
    };

    return (
        <div className="w-full flex justify-between items-center">
            <ChevronLeft
                className="size-8 text-[#1E1E1E] cursor-pointer transition-all hover:text-zinc-500"
                onClick={handlePrev}
            />
            <div className="overflow-hidden w-full">
                <div ref={cardContainerRef} className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * translateValue}%)` }}>
                    <div className={`flex-none ${screenWidth} flex justify-center`}>
                        <SpeakerCard
                            name="Lorem ipsum dolor."
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sapien elit, dapibus ut lectus quis, tincidunt congue ex. Lorem ipsum"
                            instagramLink="https://www.instagram.com/"
                            websiteLink="https://www.google.com/"
                            className="card"
                        />
                    </div>
                    <div className={`flex-none ${screenWidth} flex justify-center`}>
                        <SpeakerCard 
                            name="Lorem ipsum dolor."
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sapien elit, dapibus ut lectus quis, tincidunt congue ex. Lorem ipsum"
                            instagramLink="https://www.instagram.com/"
                            websiteLink="https://www.google.com/"
                            className="card"
                        />
                    </div>
                    <div className={`flex-none ${screenWidth} flex justify-center`}>
                        <SpeakerCard 
                            name="Lorem ipsum dolor."
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sapien elit, dapibus ut lectus quis, tincidunt congue ex. Lorem ipsum"
                            instagramLink="https://www.instagram.com/"
                            websiteLink="https://www.google.com/"
                            className="card"
                        />
                    </div>
                    <div className={`flex-none ${screenWidth} flex justify-center`}>
                        <SpeakerCard 
                            name="Lorem ipsum dolor."
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sapien elit, dapibus ut lectus quis, tincidunt congue ex. Lorem ipsum"
                            instagramLink="https://www.instagram.com/"
                            websiteLink="https://www.google.com/"
                            className="card"
                        />
                    </div>
                </div>
            </div>
            <ChevronRight
                className="size-8 text-[#1E1E1E] cursor-pointer transition-all hover:text-zinc-500"
                onClick={handleNext}
            />
        </div>
    );
}
"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import ParticipantCard from "./ParticipantCard";
import { useEffect, useState } from "react";

export default function ParticipantCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [screenWidth, setScreenWidth] = useState('w-1/3');
    const [translateValue, setTranslateValue] = useState(100 / 3);
    const [cardsQuantity, setCardsQuantity] = useState(3);

    const cards = [
        {
            key: "Titulo 1",
            title: "Título 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sapien elit, dapibus ut lectus quis, tincidunt congue ex. Lorem ipsum",
            instagramLink: "https://www.instagram.com/",
            websiteLink: "https://www.google.com/"
        },
        {
            key: "Titulo 2",
            title: "Titulo 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sapien elit, dapibus ut lectus quis, tincidunt congue ex. Lorem ipsum",
            instagramLink: "https://www.instagram.com/",
            websiteLink: "https://www.google.com/"
        },
        {
            key: "Titulo 3",
            title: "Titulo 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sapien elit, dapibus ut lectus quis, tincidunt congue ex. Lorem ipsum",
            instagramLink: "https://www.instagram.com/",
            websiteLink: "https://www.google.com/"
        }
    ];

    useEffect(() => {
        const checkScreenWidth = () => {
            let cardsQuantity = 0;
            let widthClass = '';
            let translate = 0;

            if (window.innerWidth >= 1024) {
                cardsQuantity = 3;
                widthClass = 'w-1/3';
                translate = 100 / 3;
            } else if (window.innerWidth >= 768) {
                cardsQuantity = 2;
                widthClass = 'w-1/2';
                translate = 100 / 2;
            } else {
                cardsQuantity = 1;
                widthClass = 'w-full';
                translate = 100;
            }

            setScreenWidth(widthClass);
            setTranslateValue(translate);
            setCardsQuantity(cardsQuantity);
        }

        checkScreenWidth();

        window.addEventListener('resize', checkScreenWidth);

        return () => {
            window.removeEventListener('resize', checkScreenWidth);
        };
    }, []);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex + cardsQuantity >= cards.length) {
                return 0;
            } else {
                return prevIndex + 1;
            }
        });
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? cards.length - cardsQuantity : prevIndex - 1
        );
    };

    return (
        <div className="w-full flex justify-between items-center">
            <ChevronLeft
                className="size-8 text-[#1E1E1E] cursor-pointer transition-all hover:text-zinc-500"
                onClick={handlePrev}
            />
            <div className="overflow-hidden w-full">
                <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * translateValue}%)` }}>
                    {cards.map((card, index) => (
                        <div key={card.key} className={`flex-none ${screenWidth} flex justify-center`}>
                            <ParticipantCard 
                                title={card.title}
                                description={card.description}
                                instagramLink={card.instagramLink}
                                websiteLink={card.websiteLink}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <ChevronRight
                className="size-8 text-[#1E1E1E] cursor-pointer transition-all hover:text-zinc-500"
                onClick={handleNext}
            />
        </div>
    );
}
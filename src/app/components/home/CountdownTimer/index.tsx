"use client";
import { useState, useEffect } from "react";
import CountdownElement from "./CountdownElement";

interface TimeRemaining {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
}

const calculateTimeRemaining = (targetDate: Date): TimeRemaining => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
        days: days.toString().padStart(2, '0'),
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0'),
    };
};

export default function CountdownTimer() {
    const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(calculateTimeRemaining(new Date("2024-07-23T00:00:00-03:00")));

    useEffect(() => {
        const targetDate = new Date("2024-10-26T00:00:00-03:00");

        const calculateTimeRemaining = () => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setTimeRemaining({
                days: days.toString().padStart(2, '0'),
                hours: hours.toString().padStart(2, '0'),
                minutes: minutes.toString().padStart(2, '0'),
                seconds: seconds.toString().padStart(2, '0'),
            });
        };

        calculateTimeRemaining();
        const interval = setInterval(calculateTimeRemaining, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-9 overflow-hidden mx-auto flex justify-center items-center flex-wrap gap-9">
            <CountdownElement remainingQuantity={timeRemaining.days} contentType="dias" />
            <CountdownElement remainingQuantity={timeRemaining.hours} contentType="horas" />
            <CountdownElement remainingQuantity={timeRemaining.minutes} contentType="minutos" />
            <CountdownElement remainingQuantity={timeRemaining.seconds} contentType="segundos" />
        </section>
    );
}
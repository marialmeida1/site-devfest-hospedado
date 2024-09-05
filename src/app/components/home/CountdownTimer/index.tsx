"use client";
import { useState, useEffect, useCallback, useMemo } from "react";
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
    const targetDate = useMemo(() => new Date("2024-10-26T08:00:00-03:00"), []);
    const [timeRemaining, setTimeRemaining] = useState<TimeRemaining | null>(null);
    const [isMounted, setIsMounted] = useState(false);

    const calculateAndSetTimeRemaining = useCallback(() => {
        const time = calculateTimeRemaining(targetDate);
        setTimeRemaining(time);
    }, [targetDate]);

    useEffect(() => {
        setIsMounted(true);
        const interval = setInterval(calculateAndSetTimeRemaining, 1000);
        return () => clearInterval(interval);
    }, [calculateAndSetTimeRemaining]);

    if (!isMounted) return null;

    return (
        <section className="container py-4 overflow-hidden mx-auto flex justify-center items-center flex-wrap gap-9">
            <CountdownElement remainingQuantity={timeRemaining?.days || '00'} contentType="dias" bgColor="red" />
            <CountdownElement remainingQuantity={timeRemaining?.hours || '00'} contentType="horas" bgColor="blue" />
            <CountdownElement remainingQuantity={timeRemaining?.minutes || '00'} contentType="minutos" bgColor="green" />
            <CountdownElement remainingQuantity={timeRemaining?.seconds || '00'} contentType="segundos" bgColor="yellow" />
        </section>
    );
}
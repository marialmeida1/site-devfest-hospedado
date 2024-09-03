interface CountdownElementProps {
    remainingQuantity: string;
    contentType: string;
    bgColor: string;
}

export default function CountdownElement({ remainingQuantity, contentType, bgColor }: CountdownElementProps) {
    return (
        <div className={`w-32 h-32 bg-${bgColor} rounded-3xl flex flex-col justify-center items-center gap-4 font-extrabold text-white sm:border`}>
            <h1 className="text-4xl">{remainingQuantity}</h1>
            <p className="text-xl">{contentType}</p>
        </div>
    );
}
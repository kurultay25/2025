import React, { useRef } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

interface SpeakerCardProps {
    name: string;
    title: string;
    imageUrl: string;
    delay: number;
}

export const SpeakerCard: React.FC<SpeakerCardProps> = ({ name, title, imageUrl, delay }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref);

    return (
        <div 
            ref={ref}
            className={`bg-gray-800 rounded-xl shadow-lg border border-gray-700/50 p-6 flex flex-col items-center text-center transform transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div 
                className="w-24 h-24 rounded-full mb-4 border-2 border-blue-400/50 shrink-0 bg-cover bg-center"
                style={{ backgroundImage: `url("${imageUrl}")` }}
                role="img"
                aria-label={name}
            >
            </div>
            <div>
                <h3 className="font-bold text-sm text-white">{name}</h3>
                <p className="text-sm text-gray-400 mt-1">{title}</p>
            </div>
        </div>
    );
};
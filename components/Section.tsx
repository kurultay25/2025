import React, { useRef } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

interface SectionProps {
    title: string;
    subtitle?: string;
    bgClassName?: string;
    children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, subtitle, bgClassName = 'bg-gray-900', children }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref, '-100px');
    
    return (
        <section ref={ref} className={`py-20 md:py-28 ${bgClassName}`}>
            <div className="container mx-auto px-6">
                <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                    <h2 className="text-xl md:text-2xl font-extrabold text-white mb-4">{title}</h2>
                    {subtitle && <p className="max-w-2xl mx-auto text-base text-gray-400">{subtitle}</p>}
                </div>
                <div className={`transition-all duration-700 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                    {children}
                </div>
            </div>
        </section>
    );
};
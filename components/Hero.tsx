import React, { useRef } from 'react';
import { Country, TranslationKey } from '../types';
import { useOnScreen } from '../hooks/useOnScreen';

interface HeroProps {
    t: (key: TranslationKey) => string;
    countries: Country[];
}

const StatItem: React.FC<{ number: string, label: string }> = ({ number, label }) => (
    <div className="text-center">
        <span className="block text-5xl md:text-6xl font-extrabold text-blue-400">{number}</span>
        <span className="block text-base md:text-lg text-gray-400 font-medium">{label}</span>
    </div>
);

const FlagItem: React.FC<{ country: Country }> = ({ country }) => (
    <div className="group flex flex-col items-center text-center" title={country.name}>
        <img 
            src={country.flagUrl} 
            alt={`Flag of ${country.name}`} 
            className="w-20 h-12 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1"
        />
    </div>
);

export const Hero: React.FC<HeroProps> = ({ t, countries }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref);

    return (
        <section ref={ref} className="relative min-h-screen flex items-center justify-center py-16 px-4 overflow-hidden">
            <div 
                className="absolute inset-0 bg-contain bg-center bg-no-repeat"
                style={{ backgroundImage: `url('https://static.tildacdn.pro/tild3563-6238-4665-b263-613965663430/front-view-businessm.jpg')` }}
            ></div>
            <div className="absolute inset-0 bg-gray-950/40"></div>

            <div className={`relative z-10 container mx-auto text-center text-white transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-10" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
                    {t('main_title')}
                </h1>

                <div className="flex justify-center items-center gap-8 md:gap-16 mb-12 flex-wrap">
                    <StatItem number="24-25" label={t('main_date')} />
                    <StatItem number="10" label={t('main_countries')} />
                    <StatItem number="600+" label={t('main_participants')} />
                </div>

                <div className="max-w-4xl mx-auto mb-12">
                    <div className="grid grid-cols-5 justify-items-center items-center gap-4 md:gap-6">
                        {countries.map(country => <FlagItem key={country.code} country={country} />)}
                    </div>
                </div>
                
                <p className="max-w-4xl mx-auto text-lg md:text-xl text-gray-300">
                    {t('main_subtitle')}
                </p>
            </div>
        </section>
    );
};
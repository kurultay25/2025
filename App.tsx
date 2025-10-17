import React, { useState, useCallback, lazy, Suspense } from 'react';
import { translations, COUNTRIES } from './constants';
import { Language } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { Loader } from './components/Loader';

// Lazy-load sections for better performance
const ProgramSection = lazy(() => import('./components/sections/ProgramSection'));
const CompetitionSection = lazy(() => import('./components/sections/CompetitionSection'));
const ExhibitionSection = lazy(() => import('./components/sections/ExhibitionSection'));
const SpeakersSection = lazy(() => import('./components/sections/SpeakersSection'));
const RegistrationSection = lazy(() => import('./components/sections/RegistrationSection'));
const PartnersSection = lazy(() => import('./components/sections/PartnersSection'));


const App: React.FC = () => {
    const [language, setLanguage] = useState<Language>('ru');

    const t = useCallback((key: keyof typeof translations.ru) => {
        return translations[language][key] || translations.ru[key];
    }, [language]);


    return (
        <div className="bg-gray-900 text-white">
            <Header
                language={language}
                setLanguage={setLanguage}
                t={t}
            />

            <main>
                <Hero t={t} countries={COUNTRIES} />
                
                <Suspense fallback={<Loader />}>
                    <ProgramSection t={t} language={language} />
                    <CompetitionSection t={t} language={language} />
                    <ExhibitionSection t={t} />
                    <SpeakersSection t={t} />
                    <RegistrationSection t={t} />
                    <PartnersSection />
                </Suspense>
            </main>

            <Footer t={t} />
        </div>
    );
};

export default App;
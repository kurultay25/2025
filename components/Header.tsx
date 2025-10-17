import React from 'react';
import { Language, TranslationKey } from '../types';
import { LANGUAGES } from '../constants';

interface HeaderProps {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: TranslationKey) => string;
}

export const Header: React.FC<HeaderProps> = ({ language, setLanguage, t }) => {
    return (
        <header className="bg-gray-900 border-b border-gray-800">
            <div className="container mx-auto px-6 h-20 flex justify-end items-center">
                {/* Language Switcher */}
                <div className="flex items-center gap-1 bg-gray-800/70 rounded-lg p-1">
                    {LANGUAGES.map(lang => (
                        <button
                            key={lang}
                            onClick={() => setLanguage(lang)}
                            className={`px-4 py-1.5 text-sm font-semibold rounded-md transition-colors duration-300 ${language === lang ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'}`}
                            aria-label={`Switch to ${lang} language`}
                            aria-pressed={language === lang}
                        >
                            {lang.toUpperCase()}
                        </button>
                    ))}
                </div>
            </div>
        </header>
    );
};
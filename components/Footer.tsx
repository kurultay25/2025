
import React from 'react';
import { TranslationKey } from '../types';

interface FooterProps {
    t: (key: TranslationKey) => string;
}

export const Footer: React.FC<FooterProps> = ({ t }) => {
    return (
        <footer className="bg-gray-950 text-gray-400">
            <div className="container mx-auto px-6 py-16">
                <div className="flex justify-center md:justify-end">
                     <ul className="space-y-2 text-center md:text-left">
                         <li><a href="mailto:info@eurasiansocialhub.org" className="hover:text-blue-400 transition-colors">info@eurasiansocialhub.org</a></li>
                         <li><a href="https://socialhub.kz" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">socialhub.kz</a></li>
                         <li><a href="https://asikz.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">asikz.com</a></li>
                     </ul>
                </div>

                <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} {t('main_title')}.</p>
                </div>
            </div>
        </footer>
    );
};

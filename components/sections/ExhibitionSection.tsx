import React from 'react';
import { Section } from '../Section';
import { LINKS } from '../../constants';
import { TranslationKey } from '../../types';
import { ArrowUpRightIcon } from '../icons/ArrowUpRightIcon';

interface ExhibitionSectionProps {
    t: (key: TranslationKey) => string;
}

const ExhibitionSection: React.FC<ExhibitionSectionProps> = ({ t }) => (
    <Section title={t('exhibition_title')} subtitle={t('exhibition_subtitle')} bgClassName="bg-gray-950">
        <div className="bg-gray-800/50 rounded-2xl p-8 max-w-3xl mx-auto text-center shadow-lg">
            <img 
                src="https://optim.tildacdn.ink/tild6536-3138-4933-b631-336437626265/-/format/webp/d6329c0f-8d0e-4021-8.jpg.webp" 
                alt={t('exhibition_title')}
                className="rounded-xl mb-8 w-full max-h-80 object-cover mx-auto shadow-md" 
             />
             <p className="text-base text-gray-300 mb-6">{t('exhibition_text')}</p>
            <a
                href={LINKS.fair_registration}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-lg transition-transform duration-300 transform hover:scale-105 whitespace-nowrap"
            >
               <span>{t('exhibition_link')}</span>
               <ArrowUpRightIcon className="w-5 h-5" />
            </a>
        </div>
    </Section>
);

export default ExhibitionSection;
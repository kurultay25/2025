
import React from 'react';
import { Section } from '../Section';
import { LINKS } from '../../constants';
import { Language, TranslationKey } from '../../types';

interface ProgramSectionProps {
    t: (key: TranslationKey) => string;
    language: Language;
}

const ProgramSection: React.FC<ProgramSectionProps> = ({ t, language }) => (
    <Section title={t('program_title')} bgClassName="bg-gray-950">
        <div className="text-center">
            <a
                href={LINKS.program[language]}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-lg transition-transform duration-300 transform hover:scale-105 whitespace-nowrap"
            >
                {t('program_link')}
            </a>
        </div>
    </Section>
);

export default ProgramSection;
import React from 'react';
import { Section } from '../Section';
import { Card } from '../Card';
import { LINKS } from '../../constants';
import { Language, TranslationKey } from '../../types';

interface CompetitionSectionProps {
    t: (key: TranslationKey) => string;
    language: Language;
}

const CompetitionSection: React.FC<CompetitionSectionProps> = ({ t, language }) => (
    <Section title={t('competition_title')}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-md mx-auto lg:max-w-none">
                <img 
                    src="https://optim.tildacdn.ink/tild3262-3631-4664-b131-613735366664/-/format/webp/fbeb3208-a2c9-48b1-9.jpg.webp" 
                    alt={t('competition_title')}
                    className="rounded-2xl shadow-lg w-full h-auto object-cover"
                />
            </div>
            <div className="flex flex-col gap-8">
                <Card title={t('competition_desc_title')} text={t('competition_desc_text')} linkText={t('competition_link')} href={LINKS.competition[language]} />
                <Card title={t('tech_task_title')} text={t('tech_task_desc')} linkText={t('video_criteria_link')} href={LINKS.video_criteria[language]} />
            </div>
        </div>
    </Section>
);

export default CompetitionSection;
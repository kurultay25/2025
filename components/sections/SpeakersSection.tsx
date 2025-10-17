import React from 'react';
import { Section } from '../Section';
import { SpeakerCard } from '../SpeakerCard';
import { SPEAKERS } from '../../constants';
import { TranslationKey } from '../../types';

interface SpeakersSectionProps {
    t: (key: TranslationKey) => string;
}

const SpeakersSection: React.FC<SpeakersSectionProps> = ({ t }) => (
    <Section title={t('speakers_title')}>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {SPEAKERS.map((speaker, index) => (
                <SpeakerCard
                    key={index}
                    name={speaker.name}
                    title={t(speaker.titleKey)}
                    imageUrl={speaker.imageUrl}
                    delay={index * 100}
                />
            ))}
        </div>
    </Section>
);

export default SpeakersSection;
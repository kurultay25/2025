
import React from 'react';
import { Section } from '../Section';
import { LINKS } from '../../constants';
import { TranslationKey } from '../../types';

interface RegistrationSectionProps {
    t: (key: TranslationKey) => string;
}

const RegistrationSection: React.FC<RegistrationSectionProps> = ({ t }) => (
    <Section title={t('registration_title')} bgClassName="bg-gray-950">
         <div className="text-center max-w-2xl mx-auto">
            <p className="text-lg text-gray-300 mb-8">Нажмите на кнопку ниже, чтобы перейти к форме регистрации на мероприятие.</p>
             <a
                href={LINKS.main_registration}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-12 rounded-lg transition-transform duration-300 transform hover:scale-105 text-xl whitespace-nowrap"
            >
                {t('form_submit')}
            </a>
         </div>
     </Section>
);

export default RegistrationSection;
import React from 'react';
import { Section } from '../Section';
import { PARTNERS } from '../../constants';

const PartnersSection: React.FC = () => (
    <Section title="Наши партнеры">
        <div className="flex justify-center items-center gap-12 md:gap-20">
            {PARTNERS.map((partner, index) => {
                if (partner.type === 'image') {
                    return (
                        <div key={index} className="opacity-70 hover:opacity-100 transition-opacity duration-300">
                            {/* FIX: Removed unnecessary type assertion. TypeScript can now infer the correct type. */}
                            <img src={partner.value} alt={`Логотип партнера ${index + 1}`} className="h-24 md:h-32 object-contain" />
                        </div>
                    );
                }
                if (partner.type === 'component') {
                    // FIX: Removed incorrect type assertion that caused the error.
                    // TypeScript now correctly infers `partner.value` as a React component.
                    const PartnerLogo = partner.value;
                    return (
                        <div key={index} className="opacity-70 hover:opacity-100 transition-opacity duration-300">
                            <PartnerLogo className="h-24 md:h-32 text-gray-400" />
                        </div>
                    );
                }
                return null;
            })}
        </div>
    </Section>
);

export default PartnersSection;
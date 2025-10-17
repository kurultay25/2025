

import React from 'react';
import { translations } from './constants';

export type Language = 'ru' | 'kz' | 'en';

export type TranslationKey = keyof typeof translations.ru;

export interface Country {
  name: string;
  code: string;
  flagUrl: string;
}

export interface Speaker {
    name: string;
    titleKey: TranslationKey;
    imageUrl: string;
}
// FIX: Define a discriminated union for partners to allow for different types (image URL string or React component).
export interface ImagePartner {
    type: 'image';
    value: string;
}

export interface ComponentPartner {
    type: 'component';
    value: React.FC<React.SVGProps<SVGSVGElement>>;
}

export type Partner = ImagePartner | ComponentPartner;


import React from 'react';

interface CardProps {
    title: string;
    text: string;
    linkText: string;
    href: string;
}

export const Card: React.FC<CardProps> = ({ title, text, linkText, href }) => (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700 flex flex-col h-full transform transition-transform duration-300 hover:-translate-y-2">
        <h3 className="text-lg font-bold mb-4 text-blue-400">{title}</h3>
        <p className="text-gray-300 mb-6 flex-grow">{text}</p>
        <a href={href} target="_blank" rel="noopener noreferrer" className="mt-auto self-start bg-gray-700 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300 inline-flex items-center whitespace-nowrap">
            {linkText}
        </a>
    </div>
);
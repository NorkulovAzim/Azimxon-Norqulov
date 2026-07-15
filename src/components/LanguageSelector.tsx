/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Language } from '../types';

interface LanguageSelectorProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function LanguageSelector({ currentLanguage, onLanguageChange }: LanguageSelectorProps) {
  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'uz', label: 'Oʻzbek', flag: '🇺🇿' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  ];

  return (
    <div id="language-selector" className="flex items-center gap-1 bg-neutral-100 dark:bg-neutral-800/80 p-1 rounded-full border border-neutral-200/50 dark:border-neutral-700/50">
      {languages.map((lang) => (
        <button
          key={lang.code}
          id={`lang-btn-${lang.code}`}
          onClick={() => onLanguageChange(lang.code)}
          className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
            currentLanguage === lang.code
              ? 'bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-xs border border-neutral-200/20 dark:border-neutral-800'
              : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200'
          }`}
        >
          <span className="text-xs filter saturate-75">{lang.flag}</span>
          <span className="font-sans hidden md:inline">{lang.label}</span>
          <span className="font-mono uppercase text-[10px] md:hidden">{lang.code}</span>
        </button>
      ))}
    </div>
  );
}

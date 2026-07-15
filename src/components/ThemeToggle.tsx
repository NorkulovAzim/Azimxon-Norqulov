/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sun, Moon } from 'lucide-react';
import { Theme } from '../types';

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
  labelLight: string;
  labelDark: string;
}

export default function ThemeToggle({ theme, onToggle, labelLight, labelDark }: ThemeToggleProps) {
  return (
    <button
      id="theme-toggle"
      onClick={onToggle}
      className="relative flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors text-xs font-mono font-medium text-neutral-600 dark:text-neutral-400 focus:outline-none"
      title={theme === 'light' ? labelDark : labelLight}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {theme === 'light' ? (
          <Moon className="w-4 h-4 text-neutral-600 transition-transform hover:rotate-12" id="icon-moon" />
        ) : (
          <Sun className="w-4 h-4 text-amber-400 transition-transform hover:rotate-45" id="icon-sun" />
        )}
      </div>
      <span className="hidden sm:inline">
        {theme === 'light' ? 'Dunkel' : 'Hell'}
      </span>
    </button>
  );
}

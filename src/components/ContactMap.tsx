/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { MapPin, Navigation, NavigationOff, Layers, Info } from 'lucide-react';

export default function ContactMap() {
  const [activeMarker, setActiveMarker] = useState<string | null>('germanist');

  const markers = [
    {
      id: 'germanist',
      name: 'GERMANIST Language Centre',
      desc: 'Amir Temur Ave 45, Tashkent. Room 302.',
      x: 280,
      y: 190,
      type: 'primary'
    },
    {
      id: 'metro',
      name: 'Minor Metro Station (Yunusobod Line)',
      desc: '2 minutes walk to the centre.',
      x: 160,
      y: 130,
      type: 'subway'
    },
    {
      id: 'landmark',
      name: 'Inha University / Intercontinental',
      desc: 'Famous local coordinate points.',
      x: 420,
      y: 110,
      type: 'poi'
    }
  ];

  return (
    <div id="contact-map-block" className="w-full bg-white dark:bg-neutral-900 border border-border-light dark:border-border-dark rounded-3xl overflow-hidden shadow-xs flex flex-col h-[380px]">
      {/* Map Control Bar */}
      <div className="px-4 py-2.5 bg-neutral-50 dark:bg-neutral-850 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between text-xs font-mono font-medium">
        <span className="text-neutral-500 dark:text-neutral-400 flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5" />
          <span>Interactive Map (Tashkent-Minor Area)</span>
        </span>
        <span className="text-neutral-400 dark:text-neutral-500 text-[10px]">
          41.3284° N, 69.2811° E
        </span>
      </div>

      {/* Map Graphic Canvas */}
      <div className="relative flex-1 bg-neutral-100 dark:bg-neutral-950 overflow-hidden cursor-crosshair">
        {/* Background Grid Accent */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:16px_16px] opacity-40" />

        {/* Vector roads & river */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Canal water */}
          <path
            d="M -20,250 C 150,230 300,280 520,220"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="24"
            className="dark:stroke-neutral-800 opacity-40"
          />
          <path
            d="M -20,250 C 150,230 300,280 520,220"
            fill="none"
            stroke="#bae6fd"
            strokeWidth="8"
            className="dark:stroke-sky-950/40"
          />

          {/* Amir Temur Avenue (Main Road) */}
          <path
            d="M 120,-50 L 320,450"
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="32"
            className="dark:stroke-neutral-800"
          />
          <path
            d="M 120,-50 L 320,450"
            fill="none"
            stroke="#ffffff"
            strokeWidth="20"
            className="dark:stroke-neutral-900"
          />
          <path
            d="M 120,-50 L 320,450"
            fill="none"
            stroke="#94a3b8"
            strokeWidth="1"
            strokeDasharray="6 8"
            className="dark:stroke-neutral-750"
          />

          {/* Minor Ring Road */}
          <path
            d="M -50,140 L 550,140"
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="24"
            className="dark:stroke-neutral-800"
          />
          <path
            d="M -50,140 L 550,140"
            fill="none"
            stroke="#ffffff"
            strokeWidth="14"
            className="dark:stroke-neutral-900"
          />

          {/* Secondary road */}
          <path
            d="M 280,140 L 280,380"
            fill="none"
            stroke="#f1f5f9"
            strokeWidth="14"
            className="dark:stroke-neutral-850"
          />

          {/* Road labels */}
          <text
            x="240"
            y="260"
            transform="rotate(68, 240, 260)"
            className="text-[9px] font-mono fill-neutral-400 dark:fill-neutral-600 font-bold uppercase tracking-widest"
          >
            Amir Temur Ave.
          </text>

          <text
            x="400"
            y="132"
            className="text-[9px] font-mono fill-neutral-400 dark:fill-neutral-600 font-bold uppercase tracking-widest"
          >
            Kichik Halqa Yo'li
          </text>
        </svg>

        {/* Render Markers on Top */}
        {markers.map((marker) => {
          const isActive = activeMarker === marker.id;
          return (
            <div
              key={marker.id}
              style={{ left: `${marker.x}px`, top: `${marker.y}px` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 group"
            >
              <button
                id={`map-marker-${marker.id}`}
                onClick={() => setActiveMarker(marker.id)}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                  isActive
                    ? marker.type === 'primary'
                      ? 'bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-950 scale-110 shadow-md border-2 border-white dark:border-neutral-900'
                      : 'bg-blue-600 text-white scale-110 shadow-md border-2 border-white'
                    : 'bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700 hover:scale-105'
                }`}
              >
                {marker.type === 'primary' ? (
                  <MapPin className="w-4 h-4" />
                ) : marker.type === 'subway' ? (
                  <span className="font-sans font-bold text-xs">M</span>
                ) : (
                  <Navigation className="w-3.5 h-3.5" />
                )}
              </button>

              {/* Pulsing glow for the active main target */}
              {marker.type === 'primary' && (
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-neutral-900/10 dark:bg-white/10 rounded-full -z-10 animate-ping opacity-60" />
              )}
            </div>
          );
        })}

        {/* Dynamic Card for Active Location */}
        <div className="absolute bottom-4 left-4 right-4 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xs border border-neutral-200/80 dark:border-neutral-800 p-3.5 rounded-xl shadow-md flex gap-3 max-w-sm">
          <div className="w-8 h-8 rounded-lg bg-neutral-50 dark:bg-neutral-800 flex items-center justify-center shrink-0 border border-neutral-150 dark:border-neutral-750">
            <Info className="w-4 h-4 text-neutral-600 dark:text-neutral-300" />
          </div>
          <div>
            {markers.filter(m => m.id === activeMarker).map(m => (
              <div key={m.id}>
                <h5 className="text-xs font-sans font-bold text-neutral-950 dark:text-neutral-100">
                  {m.name}
                </h5>
                <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5 font-sans leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

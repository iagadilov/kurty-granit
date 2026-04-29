'use client';

import { useState } from 'react';
import { company } from '@/lib/data/company';

const actions = [
  {
    label: 'Позвонить',
    icon: '📞',
    href: `tel:${company.phoneRaw}`,
  },
  {
    label: 'WhatsApp',
    icon: '💬',
    href: `https://wa.me/${company.whatsapp.replace(/\D/g, '')}`,
  },
  {
    label: 'Telegram',
    icon: '✈️',
    href: `https://t.me/+${company.telegram.replace(/\D/g, '')}`,
  },
];

export default function FloatingCTA() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Action buttons — shown when open */}
      {open && (
        <div className="flex flex-col items-end gap-2">
          {actions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              target={action.href.startsWith('tel') ? undefined : '_blank'}
              rel={action.href.startsWith('tel') ? undefined : 'noopener noreferrer'}
              className="flex items-center gap-2 bg-stone-900 border border-stone-800 text-stone-50 text-sm font-medium px-4 py-2.5 rounded-full shadow-lg hover:bg-stone-800 transition-colors whitespace-nowrap"
            >
              <span>{action.icon}</span>
              {action.label}
            </a>
          ))}
        </div>
      )}

      {/* Main toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Закрыть' : 'Связаться с нами'}
        className="w-14 h-14 rounded-full bg-accent hover:bg-accent-dark text-stone-950 shadow-xl flex items-center justify-center transition-all"
      >
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        )}
      </button>
    </div>
  );
}

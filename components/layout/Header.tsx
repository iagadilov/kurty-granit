'use client';

import { useState } from 'react';
import Link from 'next/link';
import { company } from '@/lib/data/company';

const navLinks = [
  { label: 'Каталог', href: '/catalog' },
  { label: 'Проекты', href: '/projects' },
  { label: 'Доставка', href: '/delivery' },
  { label: 'О компании', href: '/about' },
  { label: 'Контакты', href: '/contacts' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-stone-900 border-b border-stone-700 shadow-sm h-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex flex-col shrink-0">
          <span className="text-2xl font-bold leading-none text-accent">КУРТЫ</span>
          <span className="text-[11px] text-stone-400 leading-tight mt-0.5">
            {company.fullName.split('«')[0].trim()}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-stone-50 hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <a
            href={`tel:${company.phoneRaw}`}
            className="text-sm font-medium text-accent hover:text-accent-dark transition-colors whitespace-nowrap"
          >
            {company.phone}
          </a>
          <Link
            href="/contacts#form"
            className="px-4 py-2 rounded text-sm font-semibold bg-accent text-white hover:bg-accent-dark transition-colors whitespace-nowrap"
          >
            Запросить КП
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 text-stone-50"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Меню"
        >
          <span
            className={`block w-6 h-0.5 bg-stone-50 transition-transform origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 bg-stone-50 transition-opacity ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 bg-stone-50 transition-transform origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-stone-900 border-t border-stone-700 px-4 pb-4">
          <nav className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 text-sm text-stone-50 hover:text-accent transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={`tel:${company.phoneRaw}`}
              className="text-sm font-medium text-accent hover:text-accent-dark transition-colors"
            >
              {company.phone}
            </a>
            <Link
              href="/contacts#form"
              className="inline-flex justify-center px-4 py-2 rounded text-sm font-semibold bg-accent text-white hover:bg-accent-dark transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Запросить КП
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

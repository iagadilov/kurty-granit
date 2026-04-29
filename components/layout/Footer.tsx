import Link from 'next/link';
import { company } from '@/lib/data/company';
import { categories } from '@/lib/data/categories';

const visitorLinks = [
  { label: 'О компании', href: '/about' },
  { label: 'Доставка и оплата', href: '/delivery' },
  { label: 'Галерея', href: '/projects' },
  { label: 'Контакты', href: '/contacts' },
];

export default function Footer() {
  return (
    <footer className="bg-stone-950 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1 */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
              Посетителям
            </h3>
            <ul className="space-y-2">
              {visitorLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-400 hover:text-stone-50 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
              Каталог
            </h3>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/catalog/${cat.slug}`}
                    className="text-sm text-stone-400 hover:text-stone-50 transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
              Контакты
            </h3>
            <ul className="space-y-3 text-sm text-stone-400">
              <li>
                <a
                  href={`tel:${company.phoneRaw}`}
                  className="hover:text-stone-50 transition-colors"
                >
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="hover:text-stone-50 transition-colors"
                >
                  {company.email}
                </a>
              </li>
              <li>ПН–ПТ, 9:00–18:00</li>
              <li>{company.address.kzShort}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-xs text-stone-400 text-center">
            © {company.founded}–2025 {company.name}. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}

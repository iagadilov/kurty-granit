import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { categories } from '@/lib/data/categories';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionTitle from '@/components/ui/SectionTitle';

export const metadata: Metadata = {
  title: 'Каталог гранита | Курты-Гранит',
  description:
    'Изделия из куртинского гранита — прямо с производства. Гранитные плиты, брусчатка, бордюры, заготовки, блоки.',
};

export default function CatalogPage() {
  return (
    <main className="min-h-screen bg-stone-950 pb-20">
      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Каталог' }]} />

        <div className="mt-8 mb-12">
          <SectionTitle
            title="Каталог гранита"
            subtitle="Изделия из куртинского гранита — прямо с производства"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/catalog/${category.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-lg bg-stone-900 transition-colors hover:bg-stone-800"
            >
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 to-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5">
                <h2 className="mb-2 text-lg font-bold text-stone-50 group-hover:text-accent transition-colors">
                  {category.name}
                </h2>
                <p className="mb-4 flex-1 text-sm text-stone-400 leading-relaxed">
                  {category.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
                  Смотреть товары
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

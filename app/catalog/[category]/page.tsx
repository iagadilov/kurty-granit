import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { categories, getCategoryBySlug } from '@/lib/data/categories';
import { getCategoryVariants } from '@/lib/data/products';
import Breadcrumb from '@/components/ui/Breadcrumb';

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) return {};
  return {
    title: `${category.name} | Каталог | Курты Гранит`,
    description: category.longDescription,
  };
}

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export default async function CategoryPage({ params }: PageProps) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const variants = getCategoryVariants(categorySlug);

  return (
    <main className="min-h-screen bg-stone-950 pb-20">
      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: 'Каталог', href: '/catalog' },
            { label: category.name },
          ]}
        />

        <div className="mt-8 mb-4">
          <h1 className="text-3xl font-bold text-stone-50 md:text-4xl">{category.name}</h1>
        </div>
        <p className="mb-10 max-w-3xl text-stone-400 leading-relaxed">
          {category.longDescription}
        </p>

        {/* Variants block */}
        {(variants.sizes.length > 0 || variants.finishes.length > 0) && (
          <section className="rounded-lg bg-stone-900 border border-stone-800 p-6 sm:p-8 mb-10">
            <div className="grid gap-10 lg:grid-cols-2">
              {/* Sizes */}
              {variants.sizes.length > 0 && (
                <div>
                  <h2 className="mb-3 text-xl font-bold text-stone-50">Варианты размеров</h2>
                  {variants.sizeIntro && (
                    <div className="mb-4 space-y-0.5">
                      {variants.sizeIntro.map((line) => (
                        <p key={line} className="text-sm text-stone-400">{line}</p>
                      ))}
                    </div>
                  )}
                  <ul className="grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
                    {variants.sizes.map((size) => (
                      <li key={size} className="flex items-center gap-2.5 text-stone-300">
                        <span className="block h-2 w-2 rotate-45 bg-accent shrink-0" />
                        <span>{size}</span>
                      </li>
                    ))}
                  </ul>
                  {variants.note && (
                    <p className="mt-5 flex items-start gap-2.5 text-sm text-stone-400">
                      <span className="block mt-1.5 h-2 w-2 rotate-45 bg-accent shrink-0" />
                      <span>{variants.note}</span>
                    </p>
                  )}
                </div>
              )}

              {/* Finishes */}
              {variants.finishes.length > 0 && (
                <div>
                  <h2 className="mb-5 text-xl font-bold text-stone-50">Варианты обработки</h2>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                    {variants.finishes.map((finish) => (
                      <div key={finish.name} className="flex flex-col gap-2">
                        <div className="relative aspect-square overflow-hidden rounded-md border border-stone-700">
                          <Image
                            src={finish.image}
                            alt={finish.name}
                            fill
                            sizes="(max-width: 640px) 50vw, 200px"
                            className="object-cover"
                          />
                        </div>
                        <p className="text-sm font-medium text-stone-50">{finish.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* CTA */}
            <div className="mt-8 pt-8 border-t border-stone-800 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-stone-400">
                Нужен другой размер или обработка? Изготовим под заказ.
              </p>
              <Link
                href="/contacts#form"
                className="inline-flex items-center justify-center rounded bg-accent px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Запросить цену
              </Link>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

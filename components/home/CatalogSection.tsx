import Image from 'next/image';
import Link from 'next/link';
import { categories } from '@/lib/data/categories';
import SectionTitle from '@/components/ui/SectionTitle';

export default function CatalogSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <SectionTitle
            title="Наша продукция"
            subtitle="5 категорий изделий из куртинского гранита"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <Link
              key={category.slug}
              href={`/catalog/${category.slug}`}
              className={`group relative overflow-hidden rounded-lg${
                index === 3 ? ' lg:col-start-1' : ''
              }${index === 4 ? ' sm:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}
            >
              {/* Image container */}
              <div className="relative aspect-[4/3]">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="transition-transform duration-500 group-hover:scale-105"
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

                {/* Category name */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-xl font-bold text-white">{category.name}</h3>
                  <p className="mt-1 text-sm text-white/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {category.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/catalog"
            className="inline-flex items-center gap-2 rounded border border-accent px-8 py-3 font-semibold text-accent transition-colors hover:bg-accent hover:text-stone-950"
          >
            Весь каталог
          </Link>
        </div>
      </div>
    </section>
  );
}

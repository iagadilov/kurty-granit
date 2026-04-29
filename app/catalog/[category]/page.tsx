import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { categories, getCategoryBySlug } from '@/lib/data/categories';
import { getProductsByCategorySlug } from '@/lib/data/products';
import Breadcrumb from '@/components/ui/Breadcrumb';
import ProductCard from '@/components/catalog/ProductCard';

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) return {};
  return {
    title: `${category.name} | Каталог | Курты-Гранит`,
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

  const products = getProductsByCategorySlug(categorySlug);

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
        <p className="mb-10 max-w-2xl text-stone-400 leading-relaxed">
          {category.longDescription}
        </p>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-stone-400">Товары в данной категории скоро появятся.</p>
        )}
      </div>
    </main>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const href = `/catalog/${product.categorySlug}/${product.slug}`;
  const firstImage = product.images[0] ?? null;
  const keySpecs = product.specs.slice(0, 3);

  return (
    <div className="group flex flex-col overflow-hidden rounded-lg bg-stone-900 border border-stone-700 shadow-sm hover:shadow-md transition-all hover:bg-stone-800">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {firstImage ? (
          <>
            <Image
              src={firstImage}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 to-transparent" />
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-stone-800">
            <span className="text-sm text-stone-500">Фото по запросу</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-3 text-base font-semibold text-stone-50 leading-snug">
          {product.name}
        </h3>

        {keySpecs.length > 0 && (
          <dl className="mb-4 flex-1 space-y-1">
            {keySpecs.map((spec) => (
              <div key={spec.label} className="flex items-baseline gap-1 text-sm">
                <dt className="text-stone-400">{spec.label}:</dt>
                <dd className="text-stone-50 font-medium">{spec.value}</dd>
              </div>
            ))}
          </dl>
        )}

        <Link
          href={`/contacts#form`}
          className="mt-auto inline-flex items-center justify-center rounded bg-accent px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Запросить цену
        </Link>
      </div>
    </div>
  );
}

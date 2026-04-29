import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://kurty.kz/assets/cache_image/media/cat/2016-12-10%2022.12.46%20(1)_2000x2000_584.jpg"
          alt="Куртинский гранит — месторождение"
          fill
          style={{ objectFit: 'cover' }}
          priority
          sizes="100vw"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-black/80 via-black/50 to-black/40" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
          Куртинское месторождение · Казахстан
        </p>

        <h1 className="text-4xl font-bold leading-tight text-stone-50 sm:text-5xl lg:text-6xl">
          Куртинский гранит и изделия с доставкой по России и Казахстану
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-stone-200 leading-relaxed">
          Завод по обработке камня «Курты» — прямой производитель. Добыча и обработка гранита с 1972 года.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/contacts#form"
            className="inline-flex min-w-[180px] items-center justify-center rounded bg-accent px-8 py-4 font-semibold text-stone-950 transition-colors hover:bg-accent-dark"
          >
            Запросить КП
          </Link>
          <Link
            href="/catalog"
            className="inline-flex min-w-[180px] items-center justify-center rounded border border-stone-50/50 px-8 py-4 font-semibold text-stone-50 transition-colors hover:border-stone-50 hover:bg-stone-50/10"
          >
            Смотреть каталог
          </Link>
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/hero/quarry-aerial.jpg"
          alt="Куртинский гранит — карьер с высоты"
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

        <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          Куртинский гранит и изделия с доставкой по Казахстану, России и СНГ
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 leading-relaxed">
          ТОО «Курты Гранит» — прямой производитель. Добыча и обработка гранита с 2015 года.
        </p>

        {/* KZ accent badge */}
        <div className="relative mx-auto mt-8 inline-flex max-w-full items-center gap-3 rounded-full border-2 border-accent bg-stone-950/60 px-5 py-2.5 backdrop-blur-sm sm:gap-4 sm:px-7 sm:py-3">
          <Image
            src="/kz-flag.svg"
            alt="Флаг Казахстана"
            width={48}
            height={24}
            className="h-5 w-10 rounded-sm ring-1 ring-stone-700 sm:h-6 sm:w-12"
          />
          <span className="text-base font-bold uppercase tracking-wider text-accent sm:text-lg">
            100% казахстанское производство
          </span>
          <Image
            src="/kz-stamp.svg"
            alt="Штамп: 100% Qazaqtiki"
            width={64}
            height={64}
            className="hidden h-14 w-14 sm:block"
          />
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/contacts#form"
            className="inline-flex min-w-[180px] items-center justify-center rounded bg-accent px-8 py-4 font-semibold text-white transition-colors hover:bg-accent-dark"
          >
            Запросить цену
          </Link>
          <Link
            href="/catalog"
            className="inline-flex min-w-[180px] items-center justify-center rounded border border-white/50 px-8 py-4 font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
          >
            Смотреть каталог
          </Link>
        </div>
      </div>
    </section>
  );
}

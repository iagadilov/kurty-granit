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
          Гранит напрямую от производителя
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 leading-relaxed">
          Компания «Курты-Гранит» самостоятельно добывает и перерабатывает натуральный Куртинский гранит. Производим гранитную плитку, брусчатку, бордюры и блоки напрямую с карьера. Благодаря собственному производству предлагаем одну из самых низких цен в Казахстане и странах СНГ. Работаем с частными клиентами, строительными компаниями и крупными объектами.
        </p>

        {/* KZ accent badge */}
        <div className="relative mx-auto mt-8 inline-flex max-w-full items-center gap-3 rounded-full border-2 border-accent bg-stone-950/60 px-5 py-2.5 backdrop-blur-sm sm:gap-4 sm:px-7 sm:py-3 sm:pr-24">
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
          {/* Stamp — overlaps the badge corner like a real ink stamp */}
          <Image
            src="/kz-stamp.svg"
            alt="Штамп: ГОСТ 9479-2011, Қазақстан өндірісі"
            width={160}
            height={160}
            className="absolute -right-6 -top-10 hidden h-32 w-32 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] sm:block"
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

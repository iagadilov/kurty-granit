import type { Metadata } from 'next';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionTitle from '@/components/ui/SectionTitle';

export const metadata: Metadata = {
  title: 'Доставка и оплата',
  description:
    'Доставка гранита по Казахстану, России, Кыргызстану, Узбекистану и странам СНГ. Самовывоз, автомобильный и железнодорожный транспорт. Безналичный расчёт для юридических лиц.',
};

const deliveryMethods = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: 'Самовывоз',
    description: 'Со станции Казыбек Бек, Алматинская область. Удобный подъезд для грузового транспорта.',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M1 3h15v13H1z" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: 'Автомобильный транспорт',
    description: 'По Казахстану, России, Кыргызстану, Узбекистану и СНГ. Фуры грузоподъёмностью 22 тонны. Доставка до объекта.',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 8h18" />
        <path d="M3 12h18" />
        <path d="M3 16h18" />
        <rect x="2" y="5" width="20" height="14" rx="2" />
      </svg>
    ),
    title: 'Железнодорожный транспорт',
    description: 'Вагоны грузоподъёмностью 68 тонн. По всей сети РЖД и КТЖ. Собственные ЖД пути на производстве.',
  },
];

const borderTable = [
  { type: 'ГП-1', size: '30×15×L', weight: '122 кг', wagon: '550 п.м.', truck: '160 п.м.' },
  { type: 'ГП-2', size: '40×18×L', weight: '195 кг', wagon: '340 п.м.', truck: '200 п.м.' },
  { type: 'ГП-3', size: '60×20×L', weight: '325 кг', wagon: '210 п.м.', truck: '60 п.м.' },
  { type: 'ГП-4', size: '20×10×L', weight: '55 кг', wagon: '1200 п.м.', truck: '380 п.м.' },
  { type: 'ГП-5', size: '20×8×L', weight: '44 кг', wagon: '1550 п.м.', truck: '450 п.м.' },
];

const slabTable = [
  { thickness: '18 (±1)', wagon: '1263 м²', truck: '421 м²', weight: '50 кг' },
  { thickness: '20 (±1)', wagon: '1263 м²', truck: '421 м²', weight: '54 кг' },
  { thickness: '30 (±2)', wagon: '777 м²', truck: '259 м²', weight: '81 кг' },
  { thickness: '40 (±2)', wagon: '600 м²', truck: '190 м²', weight: '108 кг' },
  { thickness: '50 (±2)', wagon: '475 м²', truck: '150 м²', weight: '135 кг' },
  { thickness: '60 (±2)', wagon: '390 м²', truck: '125 м²', weight: '162 кг' },
  { thickness: '80 (±2)', wagon: '290 м²', truck: '93 м²', weight: '216 кг' },
  { thickness: '100 (±2)', wagon: '235 м²', truck: '72 м²', weight: '270 кг' },
];

export default function DeliveryPage() {
  return (
    <main className="min-h-screen bg-stone-950 pb-20">
      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Доставка и оплата' }]} />

        <div className="mt-8 mb-12">
          <SectionTitle title="Доставка и оплата" />
        </div>

        {/* Delivery methods */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-stone-50">Способы доставки</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {deliveryMethods.map((method) => (
              <div
                key={method.title}
                className="rounded-lg bg-stone-900 p-6 border border-stone-800"
              >
                <div className="mb-4 text-accent">{method.icon}</div>
                <h3 className="mb-2 text-lg font-semibold text-stone-50">{method.title}</h3>
                <p className="text-sm text-stone-400">{method.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Payment */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-stone-50">Способы оплаты</h2>
          <div className="rounded-lg bg-stone-900 border border-stone-800 p-6">
            <div className="flex items-start gap-4">
              <div className="mt-0.5 flex-shrink-0 text-accent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <line x1="2" x2="22" y1="10" y2="10" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-stone-50">Безналичный расчёт</h3>
                <p className="mt-1 text-sm text-stone-400">
                  Оплата осуществляется по безналичному расчёту для юридических лиц. Работаем по договору поставки с НДС.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Delivery regions */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-stone-50">Регионы доставки</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-stone-900 border border-stone-800 p-6">
              <h3 className="mb-3 font-semibold text-accent">Казахстан</h3>
              <p className="text-sm text-stone-400">
                Доставка по всем регионам с производства в Алматинской области. Собственные ЖД пути обеспечивают
                быструю погрузку и отправку в любую точку страны.
              </p>
            </div>
            <div className="rounded-lg bg-stone-900 border border-stone-800 p-6">
              <h3 className="mb-3 font-semibold text-accent">Россия</h3>
              <p className="text-sm text-stone-400">
                Москва, Санкт-Петербург, Нижний Новгород, Самара, Уфа, Екатеринбург и другие города. Отгрузка вагонами по сети РЖД.
              </p>
            </div>
            <div className="rounded-lg bg-stone-900 border border-stone-800 p-6">
              <h3 className="mb-3 font-semibold text-accent">Кыргызстан и Узбекистан</h3>
              <p className="text-sm text-stone-400">
                Бишкек, Ош, Ташкент и другие города. Отгрузка вагонами и фурами через пограничные переходы.
              </p>
            </div>
            <div className="rounded-lg bg-stone-900 border border-stone-800 p-6">
              <h3 className="mb-3 font-semibold text-accent">Страны СНГ</h3>
              <p className="text-sm text-stone-400">
                Поставки в любую страну СНГ железнодорожным и автомобильным транспортом. Опыт работы с таможенным оформлением.
              </p>
            </div>
          </div>
        </section>

        {/* Borders logistics table */}
        <section className="mb-16">
          <h2 className="mb-4 text-2xl font-bold text-stone-50">Таблица логистики — Бордюры</h2>
          <div className="overflow-x-auto rounded-lg border border-stone-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-accent text-stone-950">
                  <th className="px-4 py-3 text-left font-semibold">Тип</th>
                  <th className="px-4 py-3 text-left font-semibold">Размер (см)</th>
                  <th className="px-4 py-3 text-right font-semibold">Вес (1 п.м.)</th>
                  <th className="px-4 py-3 text-right font-semibold">Вагон 68т</th>
                  <th className="px-4 py-3 text-right font-semibold">Фура 22т</th>
                </tr>
              </thead>
              <tbody>
                {borderTable.map((row, i) => (
                  <tr
                    key={row.type}
                    className={i % 2 === 0 ? 'bg-stone-900' : 'bg-stone-950'}
                  >
                    <td className="px-4 py-3 font-medium text-stone-50">{row.type}</td>
                    <td className="px-4 py-3 text-stone-400">{row.size}</td>
                    <td className="px-4 py-3 text-right text-stone-400">{row.weight}</td>
                    <td className="px-4 py-3 text-right text-stone-400">{row.wagon}</td>
                    <td className="px-4 py-3 text-right text-stone-400">{row.truck}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Slab logistics table */}
        <section className="mb-16">
          <h2 className="mb-2 text-2xl font-bold text-stone-50">Таблица логистики — Плита</h2>
          <p className="mb-4 text-sm text-stone-400">Размеры 300×600 мм и 600×600 мм</p>
          <div className="overflow-x-auto rounded-lg border border-stone-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-accent text-stone-950">
                  <th className="px-4 py-3 text-left font-semibold">Толщина (мм)</th>
                  <th className="px-4 py-3 text-right font-semibold">Вагон 68т</th>
                  <th className="px-4 py-3 text-right font-semibold">Фура 22т</th>
                  <th className="px-4 py-3 text-right font-semibold">Вес 1 м²</th>
                </tr>
              </thead>
              <tbody>
                {slabTable.map((row, i) => (
                  <tr
                    key={row.thickness}
                    className={i % 2 === 0 ? 'bg-stone-900' : 'bg-stone-950'}
                  >
                    <td className="px-4 py-3 font-medium text-stone-50">{row.thickness}</td>
                    <td className="px-4 py-3 text-right text-stone-400">{row.wagon}</td>
                    <td className="px-4 py-3 text-right text-stone-400">{row.truck}</td>
                    <td className="px-4 py-3 text-right text-stone-400">{row.weight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Packaging */}
        <section>
          <h2 className="mb-6 text-2xl font-bold text-stone-50">Упаковка</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg bg-stone-900 border border-stone-800 p-6">
              <h3 className="mb-3 font-semibold text-stone-50">Паллета</h3>
              <dl className="space-y-1.5 text-sm">
                <div className="flex justify-between">
                  <dt className="text-stone-400">Размеры</dt>
                  <dd className="text-stone-50">65×105×125 см</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-stone-400">Площадь плиты</dt>
                  <dd className="text-stone-50">32,4 м²</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-stone-400">Вес</dt>
                  <dd className="text-stone-50">1 650 кг</dd>
                </div>
              </dl>
            </div>
            <div className="rounded-lg bg-stone-900 border border-stone-800 p-6">
              <h3 className="mb-3 font-semibold text-stone-50">Деревянный каркас</h3>
              <dl className="space-y-1.5 text-sm">
                <div className="flex justify-between">
                  <dt className="text-stone-400">Размеры</dt>
                  <dd className="text-stone-50">65×65×110 см</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-stone-400">Площадь плиты</dt>
                  <dd className="text-stone-50">22,32 м²</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-stone-400">Вес</dt>
                  <dd className="text-stone-50">1 200 кг</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

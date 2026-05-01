import type { Metadata } from 'next';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionTitle from '@/components/ui/SectionTitle';
import { company } from '@/lib/data/company';

export const metadata: Metadata = {
  title: 'О компании',
  description:
    'ТОО «Курты Гранит» — добыча и реализация гранитных блоков Куртинского месторождения. 100% казахстанское производство. Поставки по Казахстану, России и странам СНГ.',
};

const mineralComposition = [
  { component: 'Плагиоклаз', value: '32%' },
  { component: 'Калиевый полевой шпат', value: '35%' },
  { component: 'Кварц', value: '28%' },
  { component: 'Биотит', value: '3–5%' },
  { component: 'Акцессорные минералы', value: '1%' },
];

const technicalSpecs = [
  { indicator: 'Средняя плотность', value: '2 650 кг/м³' },
  { indicator: 'Водопоглощение', value: '0,19%' },
  { indicator: 'Прочность при сжатии', value: '209 МПа' },
  { indicator: 'Морозостойкость', value: 'F50' },
  { indicator: 'Сопротивление удару', value: '0,21 см' },
];

const granitTypes = [
  {
    name: 'Коричнево-серый тёмный',
    description: 'Более контрастный. Применяется для мощения площадей, набережных и общественных пространств.',
  },
  {
    name: 'Коричнево-серый светлый',
    description: 'С вкраплениями цвета кофе с молоком. Универсальный вариант для внешних и внутренних работ.',
  },
  {
    name: 'С розовым оттенком',
    description: 'Декоративный. Подходит для внутренней отделки, облицовки стен и пола.',
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-stone-950 pb-20">
      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'О компании' }]} />

        <div className="mt-8 mb-12">
          <SectionTitle title="О компании" />
        </div>

        {/* Hero text */}
        <section className="mb-16">
          <div className="rounded-lg bg-stone-900 border border-stone-800 p-8">
            <p className="leading-relaxed text-stone-400">
              ТОО «Курты Гранит» занимается добычей и реализацией гранитных блоков Куртинского
              месторождения. Компании принадлежит 20 Га площади разведанного гранитного массива,
              на котором детально разведано часть участков с утверждёнными запасами более 20 млн кубических метров
              гранита.
            </p>
            <p className="mt-4 leading-relaxed text-stone-400">
              Предприятие основано в 2015 году. За это время накоплен значительный опыт в добыче и обработке
              камня. Производство оснащено современным оборудованием и выпускает гранитные изделия в соответствии
              с ГОСТ 9479-2011.
            </p>
            <p className="mt-4 leading-relaxed text-stone-400">
              Завод выпускает гранитные плиты, брусчатку, бордюрный камень, облицовочные изделия и блоки.
              Продукция поставляется в Казахстан, Россию и страны ближнего зарубежья. Прямые отгрузки
              осуществляются с производственной базы на станции Казыбек Бек, Алматинская область.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-stone-50">Ключевые показатели</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {company.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg bg-stone-900 border border-stone-800 p-6 text-center"
              >
                <div className="text-3xl font-bold text-accent">{stat.value}</div>
                <div className="mt-1 text-sm text-stone-400">{stat.unit}</div>
                <div className="mt-2 text-sm font-medium text-stone-50">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Granite types */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-stone-50">Типы гранита</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {granitTypes.map((type) => (
              <div
                key={type.name}
                className="rounded-lg bg-stone-900 border border-stone-800 p-6"
              >
                <div className="mb-2 h-0.5 w-8 bg-accent" />
                <h3 className="mb-2 font-semibold text-stone-50">{type.name}</h3>
                <p className="text-sm text-stone-400">{type.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mineral composition */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-stone-50">Минеральный состав</h2>
          <div className="overflow-x-auto rounded-lg border border-stone-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-accent text-stone-950">
                  <th className="px-4 py-3 text-left font-semibold">Компонент</th>
                  <th className="px-4 py-3 text-right font-semibold">%</th>
                </tr>
              </thead>
              <tbody>
                {mineralComposition.map((row, i) => (
                  <tr key={row.component} className={i % 2 === 0 ? 'bg-stone-900' : 'bg-stone-950'}>
                    <td className="px-4 py-3 text-stone-400">{row.component}</td>
                    <td className="px-4 py-3 text-right font-medium text-stone-50">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Technical specs */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-stone-50">Технические характеристики</h2>
          <div className="overflow-x-auto rounded-lg border border-stone-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-accent text-stone-950">
                  <th className="px-4 py-3 text-left font-semibold">Показатель</th>
                  <th className="px-4 py-3 text-right font-semibold">Значение</th>
                </tr>
              </thead>
              <tbody>
                {technicalSpecs.map((row, i) => (
                  <tr key={row.indicator} className={i % 2 === 0 ? 'bg-stone-900' : 'bg-stone-950'}>
                    <td className="px-4 py-3 text-stone-400">{row.indicator}</td>
                    <td className="px-4 py-3 text-right font-medium text-stone-50">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Radiation class */}
        <section className="mb-16">
          <div className="rounded-lg border border-accent/30 bg-stone-900 p-6">
            <h3 className="mb-2 font-semibold text-accent">Радиационный класс</h3>
            <p className="text-sm text-stone-400">
              Гранит куртинского месторождения относится к 1 классу радиационной опасности и может
              использоваться без ограничений в любом виде строительства.
            </p>
          </div>
        </section>

        {/* Railway */}
        <section>
          <div className="rounded-lg bg-stone-900 border border-stone-800 p-6">
            <h3 className="mb-2 font-semibold text-stone-50">Собственные ЖД пути</h3>
            <p className="text-sm text-stone-400">
              На производственной базе проложены 2 железнодорожные линии протяжённостью 300 метров каждая.
              Это обеспечивает быструю и удобную погрузку вагонов непосредственно на заводе.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

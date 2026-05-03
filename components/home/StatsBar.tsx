import { company } from '@/lib/data/company';

export default function StatsBar() {
  return (
    <section className="bg-stone-900 border-y border-stone-700">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 divide-y divide-stone-700 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-3 xl:grid-cols-6 [&>*+*]:sm:border-l [&>*+*]:sm:border-stone-700 xl:[&>*+*]:border-l">
          {company.stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center px-6 py-8 text-center"
            >
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl font-bold text-accent lg:text-4xl">
                  {stat.value}
                </span>
                <span className="text-sm text-stone-400">{stat.unit}</span>
              </div>
              <p className="mt-1 text-sm text-stone-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

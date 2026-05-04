import { company } from '@/lib/data/company';

export default function StatsBar() {
  return (
    <section className="border-y border-stone-700">
      {/* gap-px + bg-stone-700 на гриде = разделители между ячейками без сложных селекторов */}
      <div className="grid grid-cols-2 gap-px bg-stone-700 sm:grid-cols-3 xl:grid-cols-6">
        {company.stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-stone-900 px-4 py-8 text-center"
          >
            {/* whitespace-nowrap предотвращает перенос "20 000" по пробелу */}
            <div className="flex items-baseline gap-1 whitespace-nowrap">
              <span className="text-2xl font-bold text-accent sm:text-3xl xl:text-2xl 2xl:text-3xl">
                {stat.value}
              </span>
              <span className="text-xs text-stone-400 sm:text-sm">{stat.unit}</span>
            </div>
            <p className="mt-1 text-xs text-stone-400 sm:text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

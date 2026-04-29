import { company } from '@/lib/data/company';
import SectionTitle from '@/components/ui/SectionTitle';

const icons: Record<string, React.ReactNode> = {
  factory: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7-6H4a2 2 0 0 0-2 2v16Z" />
      <path d="M7 20v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4" />
      <path d="M11 20v-8l4 4" />
      <path d="M15 20v-8l4 4" />
    </svg>
  ),
  certificate: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <path d="M8 10h8M8 14h4" />
      <circle cx="17" cy="19" r="3" />
      <path d="m20.2 21.4-1.2-1.2" />
    </svg>
  ),
  truck: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  ),
  warehouse: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z" />
      <path d="M6 18h12" />
      <path d="M6 14h12" />
      <rect width="8" height="8" x="8" y="12" rx="1" />
    </svg>
  ),
};

export default function WhyUs() {
  return (
    <section className="bg-stone-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <SectionTitle title="Почему выбирают нас" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {company.advantages.map((advantage) => (
            <div
              key={advantage.title}
              className="rounded-lg border border-stone-700 border-l-4 border-l-accent bg-stone-800 p-6"
            >
              <div className="mb-4 text-accent">
                {icons[advantage.icon] ?? null}
              </div>
              <h3 className="mb-2 text-lg font-bold text-stone-50">
                {advantage.title}
              </h3>
              <p className="text-sm leading-relaxed text-stone-400">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

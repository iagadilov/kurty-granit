import type { Metadata } from 'next';
import Image from 'next/image';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionTitle from '@/components/ui/SectionTitle';

export const metadata: Metadata = {
  title: 'Наша продукция в знаковых проектах Казахстана и СНГ',
  description:
    'Наша продукция в знаковых проектах Казахстана и СНГ. Площади, скверы, жилые комплексы, набережные, мемориалы.',
};

const projects = [
  {
    src: '/projects/kunaev-taraz.jpg',
    label: 'Памятник Динмухамеду Кунаеву, Тараз',
  },
  {
    src: '/projects/police-memorial-pavlodar.jpg',
    label: 'Памятник погибшим полицейским, Павлодар',
  },
  {
    src: '/projects/gandhi-astana.jpeg',
    label: 'Памятник Махатме Ганди, Астана',
  },
  {
    src: '/projects/greenline-astana.jpg',
    label: 'Новый бульвар Greenline, Астана',
  },
  {
    src: '/projects/medeu-almaty.jpg',
    label: 'Гранитный бордюр, Медеу, Алматы',
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-stone-950 pb-20">
      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Проекты' }]} />

        <div className="mt-8 mb-12">
          <SectionTitle
            title="Наша продукция в знаковых проектах Казахстана и СНГ"
            subtitle="Площади, скверы, жилые комплексы, набережные, мемориалы"
          />
        </div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative mb-4 overflow-hidden rounded-lg break-inside-avoid"
            >
              <div className="relative aspect-[620/460]">
                <Image
                  src={project.src}
                  alt={project.label}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="w-full px-4 pb-4 text-sm font-medium text-stone-50">
                  {project.label}
                </p>
              </div>
              {/* Always visible label at bottom */}
              <div className="bg-stone-900 px-4 py-2.5">
                <p className="text-sm text-stone-400">{project.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

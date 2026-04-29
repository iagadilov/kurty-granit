import type { Metadata } from 'next';
import Image from 'next/image';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionTitle from '@/components/ui/SectionTitle';

export const metadata: Metadata = {
  title: 'Реализованные объекты',
  description:
    'Куртинский гранит в знаковых проектах России и Казахстана. Площади, скверы, жилые комплексы, набережные.',
};

const projects = [
  {
    src: 'https://kurty.kz/assets/cache_image/media/primery/plita/IMAG1145_620x460_e66.jpg',
    label: 'Площадь Республики, Алматы',
  },
  {
    src: 'https://kurty.kz/assets/cache_image/media/primery/plita/IMAG1155_620x460_e66.jpg',
    label: 'Сквер, Алматы',
  },
  {
    src: 'https://kurty.kz/assets/cache_image/media/primery/plita/IMG_2791_620x460_e66.jpg',
    label: 'Торговый центр, Казахстан',
  },
  {
    src: 'https://kurty.kz/assets/cache_image/media/primery/plita/IMAG1144_620x460_e66.jpg',
    label: 'Жилой комплекс, Алматы',
  },
  {
    src: 'https://kurty.kz/assets/cache_image/media/primery/plita/IMG_3359_620x460_e66.jpg',
    label: 'Набережная, Казахстан',
  },
  {
    src: 'https://kurty.kz/assets/cache_image/media/primery/plita/IMG_3379_620x460_e66.jpg',
    label: 'Городская площадь',
  },
  {
    src: 'https://kurty.kz/assets/cache_image/media/primery/plita/IMG_3380_620x460_e66.jpg',
    label: 'Благоустройство территории',
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-stone-950 pb-20">
      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Проекты' }]} />

        <div className="mt-8 mb-12">
          <SectionTitle
            title="Реализованные объекты"
            subtitle="Куртинский гранит в знаковых проектах России и Казахстана"
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
                <p className="text-sm text-stone-300">{project.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

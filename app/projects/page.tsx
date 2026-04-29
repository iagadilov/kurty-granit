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
    src: 'https://kurty.kz/assets/cache_image/media/gallery/DSCN0027_2000x2000_629.jpg',
    label: 'Манежная площадь, Москва',
  },
  {
    src: 'https://kurty.kz/media/gallery/IMG_4620.JPG',
    label: 'Манежная площадь, Москва',
  },
  {
    src: 'https://kurty.kz/media/gallery/IMG_4597.JPG',
    label: 'Манежная площадь, Москва',
  },
  {
    src: 'https://kurty.kz/assets/cache_image/media/gallery/IMG_0148_2000x2000_629.jpg',
    label: 'Площадь Республики, Алматы',
  },
  {
    src: 'https://kurty.kz/media/gallery/new_square.jpg',
    label: 'Площадь Республики, Алматы',
  },
  {
    src: 'https://kurty.kz/assets/cache_image/media/gallery/DSC_0508_2000x2000_629.jpg',
    label: 'Памятник сотрудникам МВД, Астана',
  },
  {
    src: 'https://kurty.kz/assets/cache_image/media/gallery/IMG_4007_2000x2000_629.jpg',
    label: 'Памятник, Талдыкорган',
  },
  {
    src: 'https://kurty.kz/assets/cache_image/media/gallery/5_office4_2000x2000_629.jpg',
    label: 'Офисное здание, Алматы',
  },
  {
    src: 'https://kurty.kz/media/gallery/IMG_4629.JPG',
    label: 'Манежная площадь, Москва',
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
                <p className="text-sm text-stone-400">{project.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

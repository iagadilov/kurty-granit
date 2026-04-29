import Image from 'next/image';
import SectionTitle from '@/components/ui/SectionTitle';

const projects = [
  {
    src: 'https://kurty.kz/assets/cache_image/media/primery/plita/IMAG1145_620x460_e66.jpg',
    alt: 'Реализованный объект — гранитная плитка',
    caption: 'Площадь Республики, Алматы',
  },
  {
    src: 'https://kurty.kz/assets/cache_image/media/primery/plita/IMAG1155_620x460_e66.jpg',
    alt: 'Реализованный объект — гранитное мощение',
    caption: 'Благоустройство набережной',
  },
  {
    src: 'https://kurty.kz/assets/cache_image/media/primery/plita/IMG_2791_620x460_e66.jpg',
    alt: 'Реализованный объект — гранитная облицовка',
    caption: 'Фасад административного здания',
  },
  {
    src: 'https://kurty.kz/assets/cache_image/media/primery/plita/IMAG1144_620x460_e66.jpg',
    alt: 'Реализованный объект — гранитные ступени',
    caption: 'Парковая зона, Астана',
  },
  {
    src: 'https://kurty.kz/assets/cache_image/media/primery/plita/IMG_3359_620x460_e66.jpg',
    alt: 'Реализованный объект — городское благоустройство',
    caption: 'Пешеходная зона, Москва',
  },
  {
    src: 'https://kurty.kz/assets/cache_image/media/primery/plita/IMG_3379_620x460_e66.jpg',
    alt: 'Реализованный объект — гранитная плита',
    caption: 'Площадь перед ТРЦ',
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <SectionTitle
            title="Реализованные объекты"
            subtitle="Наш гранит — в знаковых проектах России и Казахстана"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="transition-transform duration-500 group-hover:scale-105"
                />
                {/* Caption overlay */}
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="px-4 pb-4 text-sm font-medium text-stone-50">
                    {project.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

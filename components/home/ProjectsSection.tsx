import Image from 'next/image';
import SectionTitle from '@/components/ui/SectionTitle';

const projects = [
  {
    src: 'https://kurty.kz/assets/cache_image/media/gallery/DSCN0027_2000x2000_629.jpg',
    alt: 'Манежная площадь, Москва',
    caption: 'Манежная площадь, Москва',
  },
  {
    src: 'https://kurty.kz/assets/cache_image/media/gallery/IMG_0148_2000x2000_629.jpg',
    alt: 'Площадь Республики, Алматы',
    caption: 'Площадь Республики, Алматы',
  },
  {
    src: 'https://kurty.kz/assets/cache_image/media/gallery/DSC_0508_2000x2000_629.jpg',
    alt: 'Памятник, Астана',
    caption: 'Памятник, Астана',
  },
  {
    src: 'https://kurty.kz/assets/cache_image/media/gallery/IMG_4007_2000x2000_629.jpg',
    alt: 'Памятник, Талдыкорган',
    caption: 'Памятник, Талдыкорган',
  },
  {
    src: 'https://kurty.kz/assets/cache_image/media/gallery/5_office4_2000x2000_629.jpg',
    alt: 'Офисное здание, Алматы',
    caption: 'Офисное здание, Алматы',
  },
  {
    src: 'https://kurty.kz/media/gallery/new_square.jpg',
    alt: 'Площадь Республики, Алматы',
    caption: 'Площадь Республики, Алматы',
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
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/75 via-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="px-4 pb-4 text-sm font-medium text-white">
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

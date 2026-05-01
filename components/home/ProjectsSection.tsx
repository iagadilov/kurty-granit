import Image from 'next/image';
import SectionTitle from '@/components/ui/SectionTitle';

const projects = [
  {
    src: '/projects/kunaev-taraz.jpg',
    alt: 'Памятник Динмухамеду Кунаеву, Тараз',
    caption: 'Памятник Кунаеву, Тараз',
  },
  {
    src: '/projects/police-memorial-petropavlovsk.jpg',
    alt: 'Памятник погибшим полицейским, Северный Казахстан',
    caption: 'Памятник погибшим полицейским, Северный Казахстан',
  },
  {
    src: '/projects/gandhi-astana.jpeg',
    alt: 'Памятник Махатме Ганди, Астана',
    caption: 'Памятник Ганди, Астана',
  },
  {
    src: '/projects/greenline-astana.jpg',
    alt: 'Проект GreenLine, Астана',
    caption: 'Проект GreenLine, Астана',
  },
  {
    src: '/projects/medeu-almaty.jpg',
    alt: 'Гранитный бордюр, Медеу',
    caption: 'Бордюр, Медеу',
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

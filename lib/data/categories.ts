export interface Category {
  slug: string;
  name: string;
  image: string;
  description: string;
  longDescription: string;
}

export const categories: Category[] = [
  {
    slug: 'granitnye-plity',
    name: 'Гранитная плита',
    image: 'https://kurty.kz/media/catalog/sections/plita.jpg',
    description: 'Для облицовки фасадов, внутренних пространств и благоустройства территорий.',
    longDescription: 'Плита из куртинского гранита в зависимости от толщины и выбранной обработки поверхности может использоваться как для облицовки фасадов, декорирования внутренних пространств помещений, так и для благоустройства придомовых территорий и проезжей части.',
  },
  {
    slug: 'granitnaja-bruschatka',
    name: 'Гранитная брусчатка',
    image: 'https://kurty.kz/media/catalog/sections/plita2.jpg',
    description: 'Для тротуаров, парковых дорожек, пешеходных зон и площадей.',
    longDescription: 'Брусчатка из куртинского гранита широко используется для укладки тротуаров, парковых дорожек, пешеходных зон, площадей, прилегающих территорий коммерческих, административных, частных объектов.',
  },
  {
    slug: 'granitnye-bordjury',
    name: 'Гранитные бордюры',
    image: 'https://kurty.kz/media/catalog/sections/plita3.jpg',
    description: 'Для городского благоустройства и мощения придомовых территорий.',
    longDescription: 'Бордюры из куртинского гранита широко используются во всех направлениях городского благоустройства и для мощения придомовых территорий.',
  },
  {
    slug: 'zagotovki',
    name: 'Заготовки',
    image: 'https://kurty.kz/media/catalog/sections/plita5.jpg',
    description: 'Для производства столешниц, декоративных элементов, памятников, слэбов.',
    longDescription: 'Заготовки из куртинского гранита поставляются на предприятия и в камнерезные мастерские для дальнейшей обработки. Из натурального камня изготавливают широкий спектр продукции различного назначения, включая слэбы.',
  },
  {
    slug: 'bloki',
    name: 'Блоки',
    image: 'https://kurty.kz/media/catalog/sections/blok2-(1).png.webp',
    description: 'Гранитные блоки Куртинского месторождения. ГОСТ 9479-2011.',
    longDescription: 'Гранитные блоки Куртинского месторождения соответствуют ГОСТ 9479-2011. Объём добычи составляет более 300 кубометров в день. Поставляем блоки 1 и 2 категории, а также изготавливаем заказные блоки под размер.',
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug);
}

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
    image: '/catalog/plita-polirovannaya-2.jpg',
    description: 'Для облицовки фасадов, внутренних пространств и благоустройства территорий.',
    longDescription: 'Плита из куртинского гранита в зависимости от толщины и выбранной обработки поверхности может использоваться как для облицовки фасадов, декорирования внутренних пространств помещений, так и для благоустройства придомовых территорий и проезжей части.',
  },
  {
    slug: 'granitnaja-bruschatka',
    name: 'Гранитная брусчатка',
    image: '/catalog/bruschatka-1.jpg',
    description: 'Для тротуаров, парковых дорожек, пешеходных зон и площадей.',
    longDescription: 'Брусчатка из куртинского гранита широко используется для укладки тротуаров, парковых дорожек, пешеходных зон, площадей, прилегающих территорий коммерческих, административных, частных объектов.',
  },
  {
    slug: 'granitnye-bordjury',
    name: 'Гранитные бордюры',
    image: '/catalog/bordyur-1.jpg',
    description: 'Для городского благоустройства и мощения придомовых территорий.',
    longDescription: 'Бордюры из куртинского гранита широко используются во всех направлениях городского благоустройства и для мощения придомовых территорий.',
  },
  {
    slug: 'zagotovki',
    name: 'Заготовки',
    image: '/catalog/zagotovka-1.jpg',
    description: 'Для производства столешниц, декоративных элементов, памятников, слэбов.',
    longDescription: 'Заготовки из куртинского гранита поставляются на предприятия и в камнерезные мастерские для дальнейшей обработки. Из натурального камня изготавливают широкий спектр продукции различного назначения, включая слэбы.',
  },
  {
    slug: 'bloki',
    name: 'Блоки',
    image: '/catalog/blok-1.jpg',
    description: 'Гранитные блоки Куртинского месторождения. ГОСТ 9479-2011.',
    longDescription: 'Гранитные блоки Куртинского месторождения соответствуют ГОСТ 9479-2011. Объём добычи составляет более 300 кубометров в день. Поставляем блоки 1 и 2 категории, а также изготавливаем заказные блоки под размер.',
  },
];

// Альбом доп. фото категории — показывается под блоком «Варианты размеров/обработки»
export const categoryGalleries: Record<string, string[]> = {
  'granitnye-bordjury': [
    '/catalog/bordyur-2.jpg',
    '/catalog/bordyur-3.jpg',
    '/catalog/bordyur-4.jpg',
  ],
  'bloki': [
    '/catalog/blok-2.jpg',
    '/catalog/blok-3.jpg',
  ],
  'zagotovki': [
    '/catalog/zagotovka-2.jpg',
  ],
  'granitnaja-bruschatka': [
    '/catalog/bruschatka-2.jpg',
    '/catalog/bruschatka-3.jpg',
    '/catalog/bruschatka-4.jpg',
  ],
  'granitnye-plity': [
    '/catalog/plita-termo-0.jpg',
    '/catalog/plita-termo-1.jpg',
    '/catalog/plita-termo-2.jpg',
    '/catalog/plita-termo-3.jpg',
    '/catalog/plita-termo-4.jpg',
    '/catalog/plita-termo-5.jpg',
    '/catalog/plita-termo-6.jpg',
  ],
};

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug);
}

export interface Product {
  slug: string;
  categorySlug: string;
  name: string;
  images: string[];
  description: string;
  specs: { label: string; value: string }[];
  applications: string;
  advantages?: string;
}

export const products: Product[] = [
  // ГРАНИТНАЯ ПЛИТА (12 products)
  {
    slug: 'plita-polirovannaya-300-300-20',
    categorySlug: 'granitnye-plity',
    name: 'Плита полированная 300×300×20',
    images: [
      'https://kurty.kz/assets/cache_image/media/cat/2016-12-10%2022.12.46%20(1)_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/cat/2016-12-10%2022.11.17%20(1)_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/cat/2016-12-10%2022.16.16%20(1)_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/catalog/facture/polirov_60x40_bf0.jpg',
    ],
    description: 'Полированная гранитная плита формата 300×300×20 мм. Гладкая поверхность с глянцевым блеском. Морозостойкость — не менее 50 циклов.',
    specs: [
      { label: 'Размер', value: '300×300 мм' },
      { label: 'Толщина', value: '20 мм' },
      { label: 'Обработка', value: 'Полированная' },
      { label: 'Морозостойкость', value: 'F50' },
      { label: 'Водопоглощение', value: '0.19%' },
    ],
    applications: 'Облицовка стен внутри и снаружи зданий, отделка цоколей, парапетов, фонтанов, ограждений. Холлы банков, залы аэропортов, вокзалов, торговые центры, памятники, мемориалы. Интерьеры гостиных, каминных залов, бассейнов.',
    advantages: 'Морозостойкость не менее 50 циклов. Эксплуатация в широком интервале температур. Устойчивость к истиранию, вибрациям, ударным нагрузкам. Уникальный дизайн благодаря неповторяющемуся природному рисунку.',
  },
  {
    slug: 'plita-polirovannaya-300-600-20',
    categorySlug: 'granitnye-plity',
    name: 'Плита полированная 300×600×20',
    images: [
      'https://kurty.kz/assets/cache_image/media/1-polirovannye-i-plity-bolshih-razmerov_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/2-polirovannye-i-plity-bolshih-razmerov_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/3-polirovannye-i-plity-bolshih-razmerov_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/4-polirovannye-i-plity-bolshih-razmerov_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/5-polirovannye-i-plity-bolshih-razmerov_2000x2000_584.jpg',
    ],
    description: 'Полированная гранитная плита формата 300×600×20 мм. Популярный формат для облицовки фасадов и внутренних пространств.',
    specs: [
      { label: 'Размер', value: '300×600 мм' },
      { label: 'Толщина', value: '20 мм' },
      { label: 'Обработка', value: 'Полированная' },
      { label: 'Морозостойкость', value: 'F50' },
      { label: 'Вес 1 м²', value: '54 кг' },
    ],
    applications: 'Облицовка фасадов, внутренних стен, полов в общественных зданиях.',
    advantages: 'Стандартный модульный размер — в наличии на складе, минимальные сроки поставки.',
  },
  {
    slug: 'plita-polirovannaya-600-600-20',
    categorySlug: 'granitnye-plity',
    name: 'Плита полированная 600×600×20',
    images: [
      'https://kurty.kz/assets/cache_image/media/cat/polirovka-50-mm-2_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/1-polirovannye-i-plity-bolshih-razmerov_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/2-polirovannye-i-plity-bolshih-razmerov_2000x2000_584.jpg',
    ],
    description: 'Крупноформатная полированная плита 600×600×20 мм. Создаёт эффект монолитного покрытия.',
    specs: [
      { label: 'Размер', value: '600×600 мм' },
      { label: 'Толщина', value: '20 мм' },
      { label: 'Обработка', value: 'Полированная' },
      { label: 'Морозостойкость', value: 'F50' },
      { label: 'Вес 1 м²', value: '54 кг' },
    ],
    applications: 'Просторные холлы, торговые центры, административные здания.',
    advantages: 'Крупный формат минимизирует количество швов, создаёт премиальный вид.',
  },
  {
    slug: 'plita-polirovannaya-1000-600-20',
    categorySlug: 'granitnye-plity',
    name: 'Плита полированная 1000×600×20',
    images: [
      'https://kurty.kz/assets/cache_image/media/1-polirovannye-i-plity-bolshih-razmerov_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/2-polirovannye-i-plity-bolshih-razmerov_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/3-polirovannye-i-plity-bolshih-razmerov_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/4-polirovannye-i-plity-bolshih-razmerov_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/5-polirovannye-i-plity-bolshih-razmerov_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/6-polirovannye-i-plity-bolshih-razmerov_2000x2000_584.jpg',
    ],
    description: 'Плита большого формата 1000×600×20 мм. Для масштабных облицовочных проектов.',
    specs: [
      { label: 'Размер', value: '1000×600 мм' },
      { label: 'Толщина', value: '20 мм' },
      { label: 'Обработка', value: 'Полированная' },
      { label: 'Морозостойкость', value: 'F50' },
    ],
    applications: 'Фасадная облицовка, полы в крупных общественных пространствах.',
    advantages: 'Максимальный формат с минимальным количеством стыков.',
  },
  {
    slug: 'plita-termoobrabotannaya-20',
    categorySlug: 'granitnye-plity',
    name: 'Плита термообработанная 20 мм',
    images: [
      'https://kurty.kz/assets/cache_image/media/1-termoobrabotannyy-granit_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/2-termoobrabotannyy-granit_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/5-termoobrabotannyy-granit_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/6-termoobrabotannyy-granit_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/7-termoobrabotannyy-granit_2000x2000_584.jpg',
    ],
    description: 'Термообработанная гранитная плита толщиной 20 мм. Матовая шероховатая поверхность после обжига.',
    specs: [
      { label: 'Толщина', value: '20 мм' },
      { label: 'Обработка', value: 'Термообработанная' },
      { label: 'Применение', value: 'Облицовка фасадов, внутренняя отделка' },
      { label: 'Морозостойкость', value: 'F50' },
    ],
    applications: 'Внутренняя отделка помещений, облицовка фасадов.',
    advantages: 'Нескользкая поверхность, высокие антивандальные свойства.',
  },
  {
    slug: 'plita-termoobrabotannaya-30',
    categorySlug: 'granitnye-plity',
    name: 'Плита термообработанная 30 мм',
    images: [
      'https://kurty.kz/assets/cache_image/media/cat/IMG_3258_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/2-termoobrabotannyy-granit_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/5-termoobrabotannyy-granit_2000x2000_584.jpg',
    ],
    description: 'Термообработанная гранитная плита толщиной 30 мм. Оптимальная толщина для мощения.',
    specs: [
      { label: 'Толщина', value: '30 мм' },
      { label: 'Обработка', value: 'Термообработанная' },
      { label: 'Применение', value: 'Мощение придомовых территорий' },
      { label: 'Морозостойкость', value: 'F50' },
      { label: 'Вес 1 м²', value: '81 кг' },
    ],
    applications: 'Мощение придомовых территорий, тротуаров, площадей.',
    advantages: 'Шероховатая поверхность обеспечивает высокое сцепление — безопасна в любую погоду.',
  },

  // ГРАНИТНАЯ БРУСЧАТКА (12 products)
  {
    slug: 'bruschatka-100-100-30',
    categorySlug: 'granitnaja-bruschatka',
    name: 'Брусчатка 100×100×30',
    images: [
      '/catalog/bruschatka-termo.jpg',
      'https://kurty.kz/assets/cache_image/media/cat/IMG_6623_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/4-bruschatka_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/1-bruschatka_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/2-bruschatka_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/3-bruschatka_2000x2000_584.jpg',
    ],
    description: 'Гранитная брусчатка 100×100×30 мм. Мелкоформатная плитка для тротуаров и дорожек.',
    specs: [
      { label: 'Размер', value: '100×100 мм' },
      { label: 'Толщина', value: '30 мм' },
      { label: 'Обработка', value: 'Термообработанная' },
      { label: 'Вес 1 м²', value: '81 кг' },
      { label: 'Вес 1 шт', value: '0.81 кг' },
      { label: 'В фуре', value: '243 м²' },
    ],
    applications: 'Тротуары, парковые дорожки, декоративное мощение.',
    advantages: 'Мелкий формат позволяет создавать сложные узоры и обходить препятствия.',
  },
  {
    slug: 'bruschatka-100-100-50',
    categorySlug: 'granitnaja-bruschatka',
    name: 'Брусчатка 100×100×50',
    images: [
      'https://kurty.kz/assets/cache_image/media/cat/%20100-100-50_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/cat/IMG_6623_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/4-bruschatka_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/1-bruschatka_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/2-bruschatka_2000x2000_584.jpg',
    ],
    description: 'Гранитная брусчатка 100×100×50 мм. Увеличенная толщина для нагруженных пешеходных зон.',
    specs: [
      { label: 'Размер', value: '100×100 мм' },
      { label: 'Толщина', value: '50 мм' },
      { label: 'Вес 1 шт', value: '1.35 кг' },
      { label: 'В фуре', value: '145 м²' },
    ],
    applications: 'Нагруженные пешеходные зоны, площади.',
    advantages: 'Повышенная несущая способность.',
  },
  {
    slug: 'bruschatka-100-200-30',
    categorySlug: 'granitnaja-bruschatka',
    name: 'Брусчатка 100×200×30',
    images: [
      'https://kurty.kz/assets/cache_image/media/cat/bruschsatka-100-200-30_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/cat/IMG_6623_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/4-bruschatka_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/1-bruschatka_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/2-bruschatka_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/3-bruschatka_2000x2000_584.jpg',
    ],
    description: 'Гранитная брусчатка 100×200×30 мм. Прямоугольный формат для классической укладки.',
    specs: [
      { label: 'Размер', value: '100×200 мм' },
      { label: 'Толщина', value: '30 мм' },
      { label: 'Вес 1 м²', value: '81 кг' },
      { label: 'Вес 1 шт', value: '1.6 кг' },
      { label: 'В фуре', value: '243 м²' },
    ],
    applications: 'Тротуары, пешеходные зоны, классическая укладка «елочкой».',
    advantages: 'Классический формат — подходит для любых проектов благоустройства.',
  },
  {
    slug: 'bruschatka-100-200-50',
    categorySlug: 'granitnaja-bruschatka',
    name: 'Брусчатка 100×200×50',
    images: [
      'https://kurty.kz/assets/cache_image/media/cat/bruschatka-100-200-50-krupno_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/cat/IMG_6623_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/4-bruschatka_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/1-bruschatka_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/2-bruschatka_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/3-bruschatka_2000x2000_584.jpg',
    ],
    description: 'Гранитная брусчатка 100×200×50 мм. Основной формат для городского благоустройства.',
    specs: [
      { label: 'Размер', value: '100×200 мм' },
      { label: 'Толщина', value: '50 мм' },
      { label: 'Вес 1 шт', value: '2.6 кг' },
      { label: 'В фуре', value: '145 м²' },
    ],
    applications: 'Городское благоустройство, тротуары с высокой нагрузкой.',
    advantages: 'Оптимальное соотношение веса и прочности для городского использования.',
  },
  {
    slug: 'bruschatka-200-200-30',
    categorySlug: 'granitnaja-bruschatka',
    name: 'Брусчатка 200×200×30',
    images: [
      'https://kurty.kz/assets/cache_image/media/cat/%20100-100-50_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/cat/IMG_6623_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/4-bruschatka_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/1-bruschatka_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/2-bruschatka_2000x2000_584.jpg',
    ],
    description: 'Гранитная брусчатка 200×200×30 мм. Среднеформатная плитка для быстрой укладки.',
    specs: [
      { label: 'Размер', value: '200×200 мм' },
      { label: 'Толщина', value: '30 мм' },
      { label: 'Морозостойкость', value: 'F50' },
    ],
    applications: 'Придомовые территории, парковки, пешеходные зоны.',
    advantages: 'Крупный формат ускоряет укладку и снижает стоимость монтажа.',
  },
  {
    slug: 'bruschatka-200-200-50',
    categorySlug: 'granitnaja-bruschatka',
    name: 'Брусчатка 200×200×50',
    images: [
      'https://kurty.kz/assets/cache_image/media/cat/%20100-100-50_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/cat/IMG_6623_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/4-bruschatka_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/1-bruschatka_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/2-bruschatka_2000x2000_584.jpg',
    ],
    description: 'Гранитная брусчатка 200×200×50 мм. Для мощения придомовых территорий и парковок.',
    specs: [
      { label: 'Размер', value: '200×200 мм' },
      { label: 'Толщина', value: '50 мм' },
      { label: 'Морозостойкость', value: 'F50' },
    ],
    applications: 'Придомовые территории, парковки, въезды.',
    advantages: 'Выдерживает нагрузку легкового и грузового транспорта.',
  },
  {
    slug: 'bruschatka-200-300-30',
    categorySlug: 'granitnaja-bruschatka',
    name: 'Брусчатка 200×300×30',
    images: [
      'https://kurty.kz/assets/cache_image/media/cat/IMG_3252_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/4-bruschatka_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/1-bruschatka_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/2-bruschatka_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/3-bruschatka_2000x2000_584.jpg',
    ],
    description: 'Гранитная брусчатка 200×300×30 мм. Прямоугольный крупный формат.',
    specs: [
      { label: 'Размер', value: '200×300 мм' },
      { label: 'Толщина', value: '30 мм' },
      { label: 'Морозостойкость', value: 'F50' },
    ],
    applications: 'Площади, набережные, декоративное мощение.',
  },
  {
    slug: 'bruschatka-200-300-50',
    categorySlug: 'granitnaja-bruschatka',
    name: 'Брусчатка 200×300×50',
    images: [
      'https://kurty.kz/assets/cache_image/media/cat/bruschatka-100-200-50-krupno_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/4-bruschatka_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/1-bruschatka_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/2-bruschatka_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/3-bruschatka_2000x2000_584.jpg',
    ],
    description: 'Гранитная брусчатка 200×300×50 мм. Для нагруженных площадей и набережных.',
    specs: [
      { label: 'Размер', value: '200×300 мм' },
      { label: 'Толщина', value: '50 мм' },
      { label: 'Морозостойкость', value: 'F50' },
    ],
    applications: 'Нагруженные площади, набережные, въезды.',
  },
  {
    slug: 'bruschatka-200-400-30',
    categorySlug: 'granitnaja-bruschatka',
    name: 'Брусчатка 200×400×30',
    images: [
      'https://kurty.kz/assets/cache_image/media/cat/IMG_3252_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/4-bruschatka_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/1-bruschatka_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/2-bruschatka_2000x2000_584.jpg',
    ],
    description: 'Гранитная брусчатка 200×400×30 мм. Длинный прямоугольный формат.',
    specs: [
      { label: 'Размер', value: '200×400 мм' },
      { label: 'Толщина', value: '30 мм' },
      { label: 'Морозостойкость', value: 'F50' },
    ],
    applications: 'Тротуары, дорожки, декоративное мощение.',
  },
  {
    slug: 'bruschatka-200-400-50',
    categorySlug: 'granitnaja-bruschatka',
    name: 'Брусчатка 200×400×50',
    images: [
      'https://kurty.kz/assets/cache_image/media/cat/bruschatka-100-200-50-krupno_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/4-bruschatka_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/1-bruschatka_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/2-bruschatka_2000x2000_584.jpg',
    ],
    description: 'Гранитная брусчатка 200×400×50 мм. Для нагруженных тротуаров и площадей.',
    specs: [
      { label: 'Размер', value: '200×400 мм' },
      { label: 'Толщина', value: '50 мм' },
      { label: 'Морозостойкость', value: 'F50' },
    ],
    applications: 'Нагруженные тротуары, городские площади.',
  },
  {
    slug: 'bruschatka-300-300-min',
    categorySlug: 'granitnaja-bruschatka',
    name: 'Брусчатка 300×300 (мин.)',
    images: [
      'https://kurty.kz/assets/cache_image/media/cat/IMG_3252_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/1-bruschatka_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/2-bruschatka_2000x2000_584.jpg',
    ],
    description: 'Гранитная брусчатка минимальный размер 300×300 мм. Доступны все толщины от 20 мм.',
    specs: [
      { label: 'Минимальный размер', value: '300×300 мм' },
      { label: 'Толщина', value: 'от 20 мм' },
      { label: 'Морозостойкость', value: 'F50' },
    ],
    applications: 'Широкое применение в благоустройстве.',
    advantages: 'Все толщины от 20 мм в наличии.',
  },
  {
    slug: 'bruschatka-100mm',
    categorySlug: 'granitnaja-bruschatka',
    name: 'Брусчатка 100 мм',
    images: [
      'https://kurty.kz/assets/cache_image/media/cat/IMG_3252_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/4-bruschatka_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/1-bruschatka_2000x2000_584.jpg',
    ],
    description: 'Гранитная брусчатка толщиной 100 мм. Для особо нагруженных дорог и площадей.',
    specs: [
      { label: 'Толщина', value: '100 мм' },
      { label: 'Вес 1 шт (100×200)', value: '5.4 кг' },
      { label: 'В фуре', value: '72 м²' },
      { label: 'Морозостойкость', value: 'F50' },
    ],
    applications: 'Мощение дорог с высокой нагрузкой, промышленные зоны.',
    advantages: 'Максимальная толщина — рассчитана на тяжёлый транспорт.',
  },

  // ГРАНИТНЫЕ БОРДЮРЫ (4 products)
  {
    slug: 'bordyur-gp-1',
    categorySlug: 'granitnye-bordjury',
    name: 'Бордюр ГП-1 (300×150×L)',
    images: [
      'https://kurty.kz/assets/cache_image/media/cat/bordyur-gp-1_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/1-bordyury_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/2-bordyury_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/3-bordyury_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/4-bordyury_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/5-bordyury_2000x2000_584.jpg',
    ],
    description: 'Гранитный бордюр ГП-1 сечением 300×150 мм, произвольная длина. Вес погонного метра — 122 кг.',
    specs: [
      { label: 'Сечение', value: '300×150 мм' },
      { label: 'Длина', value: 'L (произвольная)' },
      { label: 'Вес 1 п.м.', value: '122 кг' },
      { label: 'В вагоне 68т', value: '550 п.м.' },
      { label: 'В фуре 22т', value: '160 п.м.' },
    ],
    applications: 'Городское благоустройство, дорожное строительство, разделение зон.',
    advantages: 'Прямая добыча — бордюры из монолитного куртинского гранита.',
  },
  {
    slug: 'bordyur-gp-2',
    categorySlug: 'granitnye-bordjury',
    name: 'Бордюр ГП-2 (400×180×L)',
    images: [
      'https://kurty.kz/assets/cache_image/media/2_060918__2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/IMG_8060_2000x2000_584_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/3-bordyury_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/4-bordyury_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/1-bordyury_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/2-bordyury_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/5-bordyury_2000x2000_584.jpg',
    ],
    description: 'Гранитный бордюр ГП-2 сечением 400×180 мм. Вес погонного метра — 195 кг.',
    specs: [
      { label: 'Сечение', value: '400×180 мм' },
      { label: 'Длина', value: 'L (произвольная)' },
      { label: 'Вес 1 п.м.', value: '195 кг' },
      { label: 'В вагоне 68т', value: '340 п.м.' },
      { label: 'В фуре 22т', value: '100 п.м.' },
    ],
    applications: 'Дорожное строительство, разделение полос движения.',
    advantages: 'Усиленное сечение для нагруженных дорог.',
  },
  {
    slug: 'bordyur-gp-3',
    categorySlug: 'granitnye-bordjury',
    name: 'Бордюр ГП-3 (600×200×L)',
    images: [
      'https://kurty.kz/assets/cache_image/media/cat/bordyur-gp-3_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/1-bordyury_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/2-bordyury_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/3-bordyury_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/4-bordyury_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/5-bordyury_2000x2000_584.jpg',
    ],
    description: 'Гранитный бордюр ГП-3 сечением 600×200 мм. Крупный бордюр для городских магистралей.',
    specs: [
      { label: 'Сечение', value: '600×200 мм' },
      { label: 'Длина', value: 'L (произвольная)' },
      { label: 'Вес 1 п.м.', value: '325 кг' },
      { label: 'В вагоне 68т', value: '210 п.м.' },
      { label: 'В фуре 22т', value: '60 п.м.' },
    ],
    applications: 'Городские магистрали, крупные объекты благоустройства.',
    advantages: 'Максимальный размер — для масштабных городских проектов.',
  },
  {
    slug: 'bordyur-gp-4',
    categorySlug: 'granitnye-bordjury',
    name: 'Бордюр ГП-4 (200×100×L)',
    images: [
      'https://kurty.kz/assets/cache_image/media/cat/bordyur-gp-4_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/IMG_8855_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/1-bordyury_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/2-bordyury_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/3-bordyury_2000x2000_584.jpg',
    ],
    description: 'Гранитный бордюр ГП-4 сечением 200×100 мм. Малый бордюр для садовых дорожек.',
    specs: [
      { label: 'Сечение', value: '200×100 мм' },
      { label: 'Длина', value: 'L (произвольная)' },
      { label: 'Вес 1 п.м.', value: '55 кг' },
      { label: 'В вагоне 68т', value: '1200 п.м.' },
      { label: 'В фуре 22т', value: '380 п.м.' },
    ],
    applications: 'Садовые дорожки, парковые зоны, придомовое благоустройство.',
    advantages: 'Компактный размер, лёгкий монтаж, экономичная логистика.',
  },
  {
    slug: 'bordyur-gp-5',
    categorySlug: 'granitnye-bordjury',
    name: 'Бордюр ГП-5 (200×80×L)',
    images: [
      'https://kurty.kz/assets/cache_image/media/1-bordyury_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/2-bordyury_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/3-bordyury_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/4-bordyury_2000x2000_584.jpg',
    ],
    description: 'Гранитный бордюр ГП-5 сечением 200×80 мм. Облегчённый вариант для пешеходных зон.',
    specs: [
      { label: 'Сечение', value: '200×80 мм' },
      { label: 'Длина', value: 'L (произвольная)' },
      { label: 'Обработка', value: 'Пиленый' },
    ],
    applications: 'Пешеходные зоны, парковые дорожки, придомовые территории.',
    advantages: 'Меньшая высота — удобен там, где перепад уровней минимальный.',
  },
  {
    slug: 'bordyur-gp-6',
    categorySlug: 'granitnye-bordjury',
    name: 'Бордюр ГП-6 (200×150×L)',
    images: [
      'https://kurty.kz/assets/cache_image/media/1-bordyury_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/2-bordyury_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/4-bordyury_2000x2000_584.jpg',
      'https://kurty.kz/assets/cache_image/media/5-bordyury_2000x2000_584.jpg',
    ],
    description: 'Гранитный бордюр ГП-6 сечением 200×150 мм. Усиленный вариант для городских дорог.',
    specs: [
      { label: 'Сечение', value: '200×150 мм' },
      { label: 'Длина', value: 'L (произвольная)' },
      { label: 'Обработка', value: 'Пиленый' },
    ],
    applications: 'Городские дороги, тротуары, разделение проезжей части и газона.',
    advantages: 'Увеличенная высота — надёжная защита края дороги.',
  },

  // ЗАГОТОВКИ (9 products)
  {
    slug: 'polosa-l-400-20-termoobrabotannaya',
    categorySlug: 'zagotovki',
    name: 'Полоса L×400×20 термообработанная',
    images: [
      'https://kurty.kz/assets/cache_image/media/catalog/products/zagotovki/polosa-polirovannaya_1_2000x2000_584.jpg',
    ],
    description: 'Гранитная полоса шириной 400 мм, толщина 20 мм, произвольная длина. Термообработанная поверхность.',
    specs: [
      { label: 'Ширина', value: '400 мм' },
      { label: 'Толщина', value: '20 мм' },
      { label: 'Длина', value: 'L (произвольная)' },
      { label: 'Обработка', value: 'Термообработанная' },
    ],
    applications: 'Ступени, пороги, декоративные полосы в мощении.',
    advantages: 'Нескользкая термообработанная поверхность — идеально для ступеней.',
  },
  {
    slug: 'polosa-l-600-30-polirovannaya',
    categorySlug: 'zagotovki',
    name: 'Полоса L×600×30 полированная',
    images: [
      'https://kurty.kz/assets/cache_image/media/catalog/products/zagotovki/polosa-polirovannaya-600_2000x2000_584.jpg',
    ],
    description: 'Гранитная полоса шириной 600 мм, толщина 30 мм. Полированная поверхность.',
    specs: [
      { label: 'Ширина', value: '600 мм' },
      { label: 'Толщина', value: '30 мм' },
      { label: 'Длина', value: 'L (произвольная)' },
      { label: 'Обработка', value: 'Полированная' },
    ],
    applications: 'Столешницы, облицовка барных стоек, декоративные элементы.',
    advantages: 'Широкий формат для столешниц с минимальным количеством стыков.',
  },
  {
    slug: 'polosa-l-600-30-termoobrabotannaya',
    categorySlug: 'zagotovki',
    name: 'Полоса L×600×30 термообработанная',
    images: [
      'https://kurty.kz/assets/cache_image/media/catalog/products/zagotovki/polosa-polirovannaya-600_2000x2000_584.jpg',
    ],
    description: 'Гранитная полоса шириной 600 мм, толщина 30 мм. Термообработанная поверхность.',
    specs: [
      { label: 'Ширина', value: '600 мм' },
      { label: 'Толщина', value: '30 мм' },
      { label: 'Длина', value: 'L (произвольная)' },
      { label: 'Обработка', value: 'Термообработанная' },
    ],
    applications: 'Ступени, площадки, наружная облицовка.',
  },
  {
    slug: 'polosa-l-400-20-shlifovannaya',
    categorySlug: 'zagotovki',
    name: 'Полоса L×400×20 шлифованная',
    images: [
      'https://kurty.kz/assets/cache_image/media/cat/pilenaya-polosa_2000x2000_584.jpg',
    ],
    description: 'Гранитная полоса шириной 400 мм, толщина 20 мм. Шлифованная поверхность.',
    specs: [
      { label: 'Ширина', value: '400 мм' },
      { label: 'Толщина', value: '20 мм' },
      { label: 'Обработка', value: 'Шлифованная' },
    ],
    applications: 'Ступени, подоконники, декоративные элементы.',
  },
  {
    slug: 'polosa-l-600-30-shlifovannaya',
    categorySlug: 'zagotovki',
    name: 'Полоса L×600×30 шлифованная',
    images: [
      'https://kurty.kz/assets/cache_image/media/cat/pilenaya-polosa_2000x2000_584.jpg',
    ],
    description: 'Гранитная полоса шириной 600 мм, толщина 30 мм. Шлифованная поверхность.',
    specs: [
      { label: 'Ширина', value: '600 мм' },
      { label: 'Толщина', value: '30 мм' },
      { label: 'Обработка', value: 'Шлифованная' },
    ],
    applications: 'Столешницы, ступени, подоконники.',
  },
  {
    slug: 'stupeni-30-termoobrabotannye',
    categorySlug: 'zagotovki',
    name: 'Ступени 30 мм термообработанные',
    images: [
      'https://kurty.ru/assets/cache_image/media/1-stupeni_2000x2000_584.jpg',
      'https://kurty.ru/assets/cache_image/media/2-stupeni_2000x2000_584.jpg',
      'https://kurty.ru/assets/cache_image/media/3-stupeni_2000x2000_584.jpg',
      'https://kurty.ru/assets/cache_image/media/4-stupeni_2000x2000_584.jpg',
      'https://kurty.ru/assets/cache_image/media/5-stupeni_2000x2000_584.jpg',
      'https://kurty.ru/assets/cache_image/media/6-stupeni_2000x2000_584.jpg',
    ],
    description: 'Гранитные ступени толщиной 30 мм с термообработанной поверхностью. Нескользкие.',
    specs: [
      { label: 'Толщина', value: '30 мм' },
      { label: 'Обработка', value: 'Термообработанная' },
      { label: 'Применение', value: 'Лестницы' },
    ],
    applications: 'Наружные и внутренние лестницы, пороги.',
    advantages: 'Термообработка обеспечивает нескользкую поверхность — безопасность на лестницах.',
  },
  {
    slug: 'stupeni-30-shlifovannye',
    categorySlug: 'zagotovki',
    name: 'Ступени 30 мм шлифованные',
    images: [
      'https://kurty.ru/assets/cache_image/media/2-stupeni_2000x2000_584.jpg',
      'https://kurty.ru/assets/cache_image/media/1-stupeni_2000x2000_584.jpg',
      'https://kurty.ru/assets/cache_image/media/3-stupeni_2000x2000_584.jpg',
      'https://kurty.ru/assets/cache_image/media/4-stupeni_2000x2000_584.jpg',
      'https://kurty.ru/assets/cache_image/media/5-stupeni_2000x2000_584.jpg',
    ],
    description: 'Гранитные ступени толщиной 30 мм с шлифованной поверхностью.',
    specs: [
      { label: 'Толщина', value: '30 мм' },
      { label: 'Обработка', value: 'Шлифованная' },
    ],
    applications: 'Внутренние лестницы, пороги.',
  },
  {
    slug: 'stupeni-30-pilenye',
    categorySlug: 'zagotovki',
    name: 'Ступени 30 мм пиленые',
    images: [
      'https://kurty.ru/assets/cache_image/media/3-stupeni_2000x2000_584.jpg',
      'https://kurty.ru/assets/cache_image/media/1-stupeni_2000x2000_584.jpg',
      'https://kurty.ru/assets/cache_image/media/2-stupeni_2000x2000_584.jpg',
      'https://kurty.ru/assets/cache_image/media/4-stupeni_2000x2000_584.jpg',
    ],
    description: 'Гранитные ступени толщиной 30 мм с пиленой поверхностью. Экономичный вариант.',
    specs: [
      { label: 'Толщина', value: '30 мм' },
      { label: 'Обработка', value: 'Пиленая' },
    ],
    applications: 'Черновые лестницы, основа под дальнейшую обработку.',
    advantages: 'Минимальная стоимость среди гранитных ступеней.',
  },
  {
    slug: 'stupeni-polosa',
    categorySlug: 'zagotovki',
    name: 'Ступени-полоса',
    images: [
      'https://kurty.ru/assets/cache_image/media/4-stupeni_2000x2000_584.jpg',
      'https://kurty.ru/assets/cache_image/media/1-stupeni_2000x2000_584.jpg',
      'https://kurty.ru/assets/cache_image/media/2-stupeni_2000x2000_584.jpg',
      'https://kurty.ru/assets/cache_image/media/5-stupeni_2000x2000_584.jpg',
    ],
    description: 'Гранитные заготовки в формате полосы для изготовления ступеней под заказ.',
    specs: [
      { label: 'Тип', value: 'Полоса под ступени' },
      { label: 'Толщина', value: 'от 30 мм' },
    ],
    applications: 'Производство ступеней нестандартных размеров под заказ.',
    advantages: 'Изготовление под любые размеры проекта.',
  },

  // БЛОКИ (5 products — гранитные блоки + облицовочная плита скала)
  {
    slug: 'blok-kurty-1-kategoriya',
    categorySlug: 'bloki',
    name: 'Блоки Курты — 1 категория',
    images: [
      'https://kurty.kz/assets/cache_image/media/bloxs/dsc-00013_2000x2000_584.jpg',
    ],
    description: 'Гранитные блоки 1 категории. Монолитные блоки из куртинского гранита, добытые открытым способом. Подходят для последующей распиловки и изготовления любых изделий.',
    specs: [
      { label: 'Объём', value: 'от 2 м³ до 6 м³' },
      { label: 'Обработка', value: 'Пиленно-колотый' },
      { label: 'Категория', value: '1 (премиум)' },
      { label: 'Цвет', value: 'Светлый / Тёмный' },
    ],
    applications: 'Производство гранитных изделий: плиты, брусчатка, бордюры, памятники, скульптуры.',
    advantages: 'Блоки первой категории — минимальные трещины, максимальный выход готовой продукции.',
  },
  {
    slug: 'blok-kurty-2-kategoriya',
    categorySlug: 'bloki',
    name: 'Блоки Курты — 2 категория',
    images: [
      'https://kurty.kz/assets/cache_image/media/bloxs/dsc-00013_2000x2000_584.jpg',
    ],
    description: 'Гранитные блоки 2 категории из куртинского месторождения. Оптимальное соотношение цены и качества.',
    specs: [
      { label: 'Объём', value: 'от 2 м³ до 6 м³' },
      { label: 'Обработка', value: 'Пиленно-колотый' },
      { label: 'Категория', value: '2 (стандарт)' },
      { label: 'Цвет', value: 'Светлый / Тёмный' },
    ],
    applications: 'Производство стандартных гранитных изделий, строительство.',
    advantages: 'Экономичный вариант для крупных объёмов производства.',
  },
  {
    slug: 'blok-zakaz',
    categorySlug: 'bloki',
    name: 'Заказные блоки',
    images: [
      'https://kurty.kz/assets/cache_image/media/bloxs/dsc-00013_2000x2000_584.jpg',
    ],
    description: 'Гранитные блоки нестандартных размеров, изготовленные по индивидуальному заказу. Размеры и объём согласовываются индивидуально.',
    specs: [
      { label: 'Объём', value: 'по запросу' },
      { label: 'Размеры', value: 'под заказ' },
      { label: 'Обработка', value: 'Пиленно-колотый' },
    ],
    applications: 'Специализированные строительные проекты, нестандартные изделия.',
    advantages: 'Любые габариты под конкретный проект — изготовим по чертежу.',
  },
  {
    slug: 'oblicovochnaya-plita-skala-20',
    categorySlug: 'bloki',
    name: 'Облицовочная плита скала 20 мм',
    images: [
      'https://kurty.kz/assets/cache_image/media/bloxs/dsc-00013_2000x2000_584.jpg',
    ],
    description: 'Облицовочная плита с фактурой «скала» толщиной 20 мм. Натуральная рельефная поверхность.',
    specs: [
      { label: 'Толщина', value: '20 мм' },
      { label: 'Фактура', value: 'Скала (натуральный скол)' },
      { label: 'Морозостойкость', value: 'F50' },
    ],
    applications: 'Облицовка цоколей, заборов, декоративные стены, фасады.',
    advantages: 'Натуральная рельефная поверхность имитирует дикий камень — максимально природный вид.',
  },
  {
    slug: 'oblicovochnaya-plita-skala-30',
    categorySlug: 'bloki',
    name: 'Облицовочная плита скала 30 мм',
    images: [
      'https://kurty.kz/assets/cache_image/media/bloxs/dsc-00013_2000x2000_584.jpg',
    ],
    description: 'Облицовочная плита с фактурой «скала» толщиной 30 мм. Увеличенная толщина для фасадов.',
    specs: [
      { label: 'Толщина', value: '30 мм' },
      { label: 'Фактура', value: 'Скала (натуральный скол)' },
      { label: 'Морозостойкость', value: 'F50' },
    ],
    applications: 'Фасадная облицовка, цоколи многоквартирных домов, коммерческих объектов.',
    advantages: 'Большая толщина — повышенная надёжность для фасадного использования.',
  },
];

function parseSizeKey(name: string): [number, number, number] {
  const full = name.match(/(\d+)[×x](\d+)[×x](\d+)/);
  if (full) return [parseInt(full[1]), parseInt(full[2]), parseInt(full[3])];
  const two = name.match(/(\d+)[×x](\d+)/);
  if (two) return [parseInt(two[1]), parseInt(two[2]), 0];
  const oneMm = name.match(/(\d+)\s*мм/);
  if (oneMm) return [0, 0, parseInt(oneMm[1])];
  return [9999, 9999, 9999];
}

export function getProductsByCategorySlug(categorySlug: string): Product[] {
  return products
    .filter(p => p.categorySlug === categorySlug)
    .sort((a, b) => {
      const [aw, ah, at] = parseSizeKey(a.name);
      const [bw, bh, bt] = parseSizeKey(b.name);
      const aArea = aw * ah || at;
      const bArea = bw * bh || bt;
      if (aArea !== bArea) return aArea - bArea;
      return at - bt;
    });
}

export function getProductBySlug(categorySlug: string, productSlug: string): Product | undefined {
  return products.find(p => p.categorySlug === categorySlug && p.slug === productSlug);
}

export interface CategoryVariants {
  sizes: string[];
  finishes: { name: string; image: string }[];
  note?: string;
}

const cleanMm = (v: string) => v.replace(/\s*мм\s*$/i, '').trim();

const finishNotes: Record<string, string> = {
  'granitnaja-bruschatka': 'и другие размеры с толщиной 30, 50, 100 мм — на заказ',
};

// Для категорий с фиксированным набором размеров — задаём явно,
// чтобы не зависеть от того, как именно прописаны specs у каждого товара.
const hardcodedSizes: Record<string, string[]> = {
  // Сортировка: по площади (мм²) возрастающей, внутри одного формата — по толщине
  'granitnye-plity': [
    '300×300×20',   // 90 000 мм²
    '300×300×30',
    '300×600×20',   // 180 000 мм²
    '300×600×30',
    '600×600×20',   // 360 000 мм²
    '600×600×30',
    '1000×600×20',  // 600 000 мм²
    '1000×600×30',
  ],
};

export function getCategoryVariants(categorySlug: string): CategoryVariants {
  const items = products.filter(p => p.categorySlug === categorySlug);
  const finishesMap = new Map<string, string>();

  for (const product of items) {
    const finishSpec = product.specs.find(s => s.label === 'Обработка')?.value;
    if (finishSpec && !finishesMap.has(finishSpec)) {
      finishesMap.set(finishSpec, product.images[0]);
    }
  }

  // Если для категории задан явный список размеров — используем его.
  if (hardcodedSizes[categorySlug]) {
    return {
      sizes: hardcodedSizes[categorySlug],
      finishes: Array.from(finishesMap.entries()).map(([name, image]) => ({ name, image })),
      note: finishNotes[categorySlug],
    };
  }

  // Иначе — извлекаем размеры из specs товаров динамически.
  const sizes = new Set<string>();
  for (const product of items) {
    const sizeSpec = product.specs.find(s => s.label === 'Размер')?.value;
    const thicknessSpec = product.specs.find(s => s.label === 'Толщина')?.value;
    const sectionSpec = product.specs.find(s => s.label === 'Сечение')?.value;

    if (sectionSpec) {
      sizes.add(cleanMm(sectionSpec));
    } else if (sizeSpec && thicknessSpec) {
      sizes.add(`${cleanMm(sizeSpec)}×${cleanMm(thicknessSpec)}`);
    } else if (sizeSpec) {
      sizes.add(cleanMm(sizeSpec));
    } else if (thicknessSpec) {
      sizes.add(`толщина ${cleanMm(thicknessSpec)} мм`);
    }
  }

  const sortedSizes = Array.from(sizes).sort((a, b) => {
    const aNum = (a.match(/\d+/g) ?? ['9999']).map(Number);
    const bNum = (b.match(/\d+/g) ?? ['9999']).map(Number);
    const aArea = (aNum[0] ?? 0) * (aNum[1] ?? 1);
    const bArea = (bNum[0] ?? 0) * (bNum[1] ?? 1);
    return aArea - bArea;
  });

  return {
    sizes: sortedSizes,
    finishes: Array.from(finishesMap.entries()).map(([name, image]) => ({ name, image })),
    note: finishNotes[categorySlug],
  };
}

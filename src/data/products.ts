import { IProduct } from '../interfaces/product.interface';
import { NEW_ARTISTS } from './artists';

export const NEW_RESTAURANTS: IProduct[] = [
  {
    id: 'rock-crystal',
    name: 'Rock Crystal',
    places: '120 мест',
    price: '9000–12000 тенге на человека',
    address: 'пр. Гагарина, 2, уг. ул. Толе би',
    description:
      'Сцена, танцпол, зона для курящих, гримёрная, звуковая аппаратура, световая аппаратура, музыкальное сопровождение, ведущий (тамада), фотосъёмка, видеосъёмка, оформление зала',
    imgUrl: '/images/rock-crystal.png',
  },
  {
    id: 'premier-hall',
    name: 'Premier Hall',
    places: '320 мест',
    price: '18000–20000 тенге на человека',
    address: 'ул. Умурзакова, 76, уг. ул. Шевченко',
    description:
      'Сцена, танцпол, зона для курящих, гримёрная, звуковая аппаратура, световая аппаратура, музыкальное сопровождение, ведущий (тамада), фотосъёмка, видеосъёмка, оформление зала',
    imgUrl: '/images/premier-hall.png',
  },
];

export const RESTAURANTS: IProduct[] = [
  {
    id: 'panorama',
    name: 'Panorama',
    places: '120 мест',
    price: '9000–15800 тенге на человека',
    address: 'И.Коныра, 18, уг. Восточной объездной дороги',
    description:
      'Сцена, танцпол, зона для курящих, гримёрная, звуковая аппаратура, световая аппаратура, музыкальное сопровождение, ведущий (тамада), фотосъёмка, видеосъёмка, оформление зала',
    imgUrl: '/images/panorama.png',
    bigImg: '/images/panorama-big.png',
    kitchen: 'Восточная, европейская',
    workTime: 'с 10:00, без выходных',
    hasKaraoke: true,
    hasSmokingArea: false,
    parkingArea: 'неохраняемая, бесплатная',
  },
  {
    id: 'pugasov',
    name: 'Пугасов — Ballroom',
    places: '400 мест',
    price: '10000 тенге на человека',
    address: 'ул. Абдуллиных, 70',
    description:
      'Сцена, танцпол, зона для курящих, гримёрная, звуковая аппаратура, световая аппаратура, музыкальное сопровождение, ведущий (тамада), фотосъёмка, видеосъёмка, оформление зала',
    imgUrl: '/images/pugasov.png',
    bigImg: '/images/pugasov-big.png',
    kitchen: 'Восточная, европейская',
    workTime: '11:00–02:00, без выходных',
    hasKaraoke: true,
    hasSmokingArea: false,
    parkingArea: 'Охраняемая, бесплатная, на 200 мест',
  },
  {
    id: 'khan-saray',
    name: 'Khan Saray',
    places: '350 мест',
    price: '15000–23000 тенге на человека',
    address: 'ул. ​Толе би, 128',
    description:
      'VIP-зал, танцпол, гримёрная, зона для курящих, сцена, комната для молодожёнов, звуковая аппаратура, световая аппаратура, музыкальное сопровождение, оформление зала.',
    imgUrl: '/images/khan-saray.png',
    bigImg: '/images/khan-saray-big.png',
    kitchen: 'Европейская, казахская, восточная',
    workTime: '10:00–22:00, без выходных',
    hasKaraoke: true,
    hasSmokingArea: false,
    parkingArea: 'Неохраняемая, бесплатная',
  },
  ...NEW_RESTAURANTS,
  {
    id: 'resident-city',
    name: 'Resident City Hotel',
    places: '250 мест',
    price: '9000–12000 тенге на человека',
    address: 'ул. Желтоксан, 23',
    description:
      'Сцена, танцпол, зона для курящих, гримёрная, звуковая аппаратура, световая аппаратура, музыкальное сопровождение, ведущий (тамада), фотосъёмка, видеосъёмка, оформление зала',
    imgUrl: '/images/resident-city.png',
  },
  {
    id: 'uly-tau',
    name: 'Улы Тау',
    places: '100 мест',
    price: '12000–16000 тенге на человека',
    address: 'ул. Дулати, 3 А',
    description:
      'Сцена, танцпол, зона для курящих, гримёрная, звуковая аппаратура, световая аппаратура, музыкальное сопровождение, ведущий (тамада), фотосъёмка, видеосъёмка, оформление зала',
    imgUrl: '/images/uly-tau.png',
  },
];

export const FAVOURITES = [...NEW_RESTAURANTS, ...NEW_ARTISTS];

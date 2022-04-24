import { ReactComponent as FavouriteIcon } from '../assets/icons/favourite.svg';
import productImage from '../assets/images/product-detail.png';

const ProductCardBig = () => {
  return (
    <div className="flex h-[812px]">
      <div className="w-[626px] bg-background rounded-tl-2xl rounded-bl-2xl">
        <img src={productImage} alt="Product Image" className="w-full h-full rounded-2xl" />
      </div>
      <div className="relative flex-1 pt-10 pr-8 pl-7 bg-background rounded-tr-2xl rounded-br-2xl">
        <div className="mb-8">
          <h4 className="mb-4 text-2xl font-semibold text-black-text leading-tight truncate">
            Описание
          </h4>
          <p className="text-lg font-light leading-tight text-black-text">
            Светлый и просторный зал на 120 человек для проведения юбилеев, Асянди (годики) и
            Хангаби, Сундет той, Тусау кесу, свадеб, выпускных, корпоративных вечеров и других
            мероприятий.
          </p>
        </div>
        <div className="mb-8">
          <h4 className="mb-4 text-2xl font-semibold text-black-text leading-tight truncate">
            Информация
          </h4>
          <ul>
            <li className="flex justify-between mb-4 text-lg font-light leading-tight text-black-text">
              <span>Кухня</span>
              <span>Корейская, японская, казахская</span>
            </li>
            <li className="flex justify-between mb-4 text-lg font-light leading-tight text-black-text">
              <span>Средний счет</span>
              <span>9000–12000 ₸ на человека</span>
            </li>
            <li className="flex justify-between mb-4 text-lg font-light leading-tight text-black-text">
              <span>Количество мест</span>
              <span>120</span>
            </li>
            <li className="flex justify-between text-lg font-light leading-tight text-black-text">
              <span>Время работы</span>
              <span>13:00–00:00, без выходных</span>
            </li>
          </ul>
        </div>
        <div className="mb-8">
          <h4 className="mb-4 text-2xl font-semibold text-black-text leading-tight truncate">
            Адрес
          </h4>
          <p className="text-lg font-light leading-tight text-black-text">
            пр. Гагарина, 2, уг. ул. Толе би
          </p>
        </div>
        <div className="mb-8">
          <h4 className="mb-4 text-2xl font-semibold text-black-text leading-tight truncate">
            Дополнительные преимущества
          </h4>
          <ul>
            <li className="flex justify-between mb-4 text-lg font-light leading-tight text-black-text">
              <span>Зона для курящих</span>
              <span>есть</span>
            </li>
            <li className="flex justify-between mb-4 text-lg font-light leading-tight text-black-text">
              <span>Караоке</span>
              <span>есть</span>
            </li>
            <li className="flex justify-between text-lg font-light leading-tight text-black-text">
              <span>Парковка</span>
              <span>неохраняемая, бесплатная</span>
            </li>
          </ul>
        </div>
        <div className="flex justify-end">
          <button className="flex items-center justify-center px-6 h-[46px] text-white bg-primary rounded">
            Добавить в корзину
          </button>
        </div>
        <button className="absolute top-6 right-6">
          <FavouriteIcon />
        </button>
      </div>
    </div>
  );
};
export default ProductCardBig;

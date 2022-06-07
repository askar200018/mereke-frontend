import { useState } from 'react';
import { ReactComponent as FavouriteIcon } from '../assets/icons/favourite.svg';
import { ReactComponent as FavouriteFillIcon } from '../assets/icons/favourite-fill.svg';
import productImage from '../assets/images/product-detail.png';
import { IProduct } from '../interfaces/product.interface';

type Props = {
  product: IProduct;
};

const ProductCardBig = ({ product }: Props) => {
  const [isFavourite, setIsFavourite] = useState(false);

  return (
    <div className="flex h-[812px]">
      <div className="w-[626px] bg-background rounded-tl-2xl rounded-bl-2xl">
        <img
          src={process.env.PUBLIC_URL + `${product?.bigImg}`}
          alt="Product Image"
          className="w-full h-full rounded-2xl"
        />
      </div>
      <div className="relative flex-1 pt-10 pr-8 pl-7 bg-background rounded-tr-2xl rounded-br-2xl">
        <div className="mb-8">
          <h4 className="mb-4 text-2xl font-semibold text-black-text leading-tight truncate">
            Описание
          </h4>
          <p className="text-lg font-light leading-tight text-black-text">{product.description}</p>
        </div>
        <div className="mb-8">
          <h4 className="mb-4 text-2xl font-semibold text-black-text leading-tight truncate">
            Информация
          </h4>
          <ul>
            <li className="flex justify-between mb-4 text-lg font-light leading-tight text-black-text">
              <span>Кухня</span>
              <span>{product?.kitchen}</span>
            </li>
            <li className="flex justify-between mb-4 text-lg font-light leading-tight text-black-text">
              <span>Средний счет</span>
              <span>{product.price}</span>
            </li>
            <li className="flex justify-between mb-4 text-lg font-light leading-tight text-black-text">
              <span>Количество мест</span>
              <span>{product.places}</span>
            </li>
            <li className="flex justify-between text-lg font-light leading-tight text-black-text">
              <span>Время работы</span>
              <span>{product.workTime}</span>
            </li>
          </ul>
        </div>
        <div className="mb-8">
          <h4 className="mb-4 text-2xl font-semibold text-black-text leading-tight truncate">
            Адрес
          </h4>
          <p className="text-lg font-light leading-tight text-black-text">{product.address}</p>
        </div>
        <div className="mb-8">
          <h4 className="mb-4 text-2xl font-semibold text-black-text leading-tight truncate">
            Дополнительные преимущества
          </h4>
          <ul>
            <li className="flex justify-between mb-4 text-lg font-light leading-tight text-black-text">
              <span>Зона для курящих</span>
              <span>{product.hasSmokingArea ? 'есть' : 'нет'}</span>
            </li>
            <li className="flex justify-between mb-4 text-lg font-light leading-tight text-black-text">
              <span>Караоке</span>
              <span>{product.hasKaraoke ? 'есть' : 'нет'}</span>
            </li>
            <li className="flex justify-between text-lg font-light leading-tight text-black-text">
              <span>Парковка</span>
              <span>{product.parkingArea}</span>
            </li>
          </ul>
        </div>
        <div className="flex justify-end">
          <button className="flex items-center justify-center px-6 h-[46px] text-white bg-primary rounded">
            Забронировать
          </button>
        </div>
        <button className="absolute top-6 right-6" onClick={() => setIsFavourite(!isFavourite)}>
          <FavouriteIcon className={`${isFavourite ? 'fill-primary' : ''} stroke-primary`} />
        </button>
      </div>
    </div>
  );
};
export default ProductCardBig;

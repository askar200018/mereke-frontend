import productImage from '../assets/images/product-card.png';
import { ReactComponent as FavouriteIcon } from '../assets/icons/favourite.svg';

interface IProduct {
  id: string;
  name: string;
  places: string;
  price: string;
  address: string;
  description: string;
  imgUrl: string;
}

type Props = {
  showFavourite?: boolean;
  product?: IProduct;
};

const ProductCard = ({
  showFavourite = false,
  product = {
    id: 'rock',
    name: 'Rock Crystal',
    places: '120',
    price: '9000–12000 тенге на человека',
    address: 'пр. Гагарина, 2, уг. ул. Толе би',
    description:
      'Сцена, танцпол, зона для курящих, гримёрная, звуковая аппаратура, световая аппаратура, музыкальное сопровождение, ведущий (тамада), фотосъёмка, видеосъёмка, оформление зала',
    imgUrl: '/images/product-card.png',
  },
}: Props) => {
  return (
    <div className="relative inline-flex h-[360px]">
      <div className="w-[300px] bg-background rounded-tl-2xl rounded-bl-2xl">
        <img
          src={process.env.PUBLIC_URL + product.imgUrl}
          alt="Product Image"
          className="w-full h-full rounded-2xl"
        />
      </div>
      <div className="w-[320px] pt-6 pr-6 pl-7 bg-background rounded-tr-2xl rounded-br-2xl">
        <h4 className="mb-4 text-2xl font-semibold text-black-text leading-tight truncate">
          {product.name}
        </h4>
        <p className="mb-4 text-base leading-tight text-black-text">{product.places}</p>
        <p className="mb-4 text-base leading-tight text-black-text">{product.price}</p>
        <p className="mb-4 text-base leading-tight text-grey-text truncate">{product.address}</p>
        <p
          className="mb-4 text-base leading-normal text-black-text overflow-hidden text-ellipsis"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 7,
            WebkitBoxOrient: 'vertical',
          }}>
          {product.description}
        </p>
      </div>
      {showFavourite && (
        <button className="absolute top-6 right-6">
          <FavouriteIcon className="fill-primary stroke-primary" />
        </button>
      )}
    </div>
  );
};

export default ProductCard;

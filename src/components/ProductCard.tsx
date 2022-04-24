import productImage from '../assets/images/product-card.png';
import { ReactComponent as FavouriteIcon } from '../assets/icons/favourite.svg';

type Props = {
  showFavourite?: boolean;
};

const ProductCard = ({ showFavourite = false }: Props) => {
  return (
    <div className="relative inline-flex h-[360px]">
      <div className="w-[300px] bg-background rounded-tl-2xl rounded-bl-2xl">
        <img src={productImage} alt="Product Image" className="w-full h-full rounded-2xl" />
      </div>
      <div className="w-[320px] pt-6 pr-6 pl-7 bg-background rounded-tr-2xl rounded-br-2xl">
        <h4 className="mb-4 text-2xl font-semibold text-black-text leading-tight truncate">
          Rock Crystal
        </h4>
        <p className="mb-4 text-base leading-tight text-black-text">120 мест</p>
        <p className="mb-4 text-base leading-tight text-black-text">9000–12000 тенге на человека</p>
        <p className="mb-4 text-base leading-tight text-grey-text truncate">
          пр. Гагарина, 2, уг. ул. Толе би
        </p>
        <p
          className="mb-4 text-base leading-normal text-black-text overflow-hidden text-ellipsis"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 7,
            WebkitBoxOrient: 'vertical',
          }}>
          Сцена, танцпол, зона для курящих, гримёрная, звуковая аппаратура, световая аппаратура,
          музыкальное сопровождение, ведущий (тамада), фотосъёмка, видеосъёмка, оформление зала
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

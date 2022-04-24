import ProductCardBig from '../components/ProductCardBig';
import { ReactComponent as BackArrowIcon } from '../assets/icons/back-arrow.svg';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  return (
    <div>
      <a className="flex items-center space-x-2 mb-6 cursor-pointer">
        <BackArrowIcon />
        <span className=" text-xl font-normal text-primary">Назад</span>
      </a>
      <h3 className="mb-8 text-headline3 font-bold text-black-text">Rock Crystal</h3>
      <div className="mb-20">
        <ProductCardBig />
      </div>
      <div>
        <h3 className="mb-8 text-headline3 font-bold text-black-text">Вам может быть интересно</h3>
        <div className="flex justify-between">
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

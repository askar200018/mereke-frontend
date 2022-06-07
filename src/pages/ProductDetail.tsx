import ProductCardBig from '../components/ProductCardBig';
import { ReactComponent as BackArrowIcon } from '../assets/icons/back-arrow.svg';
import ProductCard from '../components/ProductCard';
import { useEffect, useState } from 'react';
import { IProduct } from '../interfaces/product.interface';
import { useParams } from 'react-router-dom';
import { NEW_RESTAURANTS, RESTAURANTS } from '../data/products';
import { ARTISTS } from '../data/artists';

const ProductDetail = () => {
  const params = useParams();
  const [product, setProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    console.log({ params });
    const restaurant = RESTAURANTS.find((r) => r.id === params.productId);
    const artist = ARTISTS.find((a) => a.id === params.productId);
    if (restaurant) {
      setProduct(restaurant);
    } else if (artist) {
      setProduct(artist);
    }
  }, []);
  return (
    <div className="pt-4 pb-20">
      <div className="container mx-auto">
        <a className="flex items-center space-x-2 mb-6 cursor-pointer">
          <BackArrowIcon />
          <span className=" text-xl font-normal text-primary">Назад</span>
        </a>
        <h3 className="mb-8 text-headline3 font-bold text-black-text">Rock Crystal</h3>
        <div className="mb-20">{product && <ProductCardBig product={product} />}</div>
        <div>
          <h3 className="mb-8 text-headline3 font-bold text-black-text">
            Вам может быть интересно
          </h3>
          <div className="flex justify-between">
            {NEW_RESTAURANTS.map((restaurant) => (
              <ProductCard key={restaurant.id} product={restaurant} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { ARTISTS } from '../data/artists';
import { RESTAURANTS } from '../data/products';
import { IProduct } from '../interfaces/product.interface';

const Category = () => {
  const location = useLocation();

  const [title, setTitle] = useState<string>('');
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    console.log({ location });
    if (location.pathname.includes('restaurants')) {
      setProducts(RESTAURANTS);
      setTitle('Рестораны');
    } else {
      setProducts(ARTISTS);
      setTitle('Певцы');
    }
  }, [location]);

  return (
    <div>
      <div>
        <h3 className="mb-8 text-headline3 font-bold text-black-text">{title}</h3>
        <div className="flex justify-between flex-wrap gap-y-8">
          {products.map((product) => (
            <Link key={product.id} to={`/products/${product.id}`}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;

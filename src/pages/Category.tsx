import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const Category = () => {
  return (
    <div>
      <h2 className="mb-5 text-5xl font-semibold text-black-text">Каталог</h2>
      <ul className="flex space-x-6 mb-8">
        <li className="inline-flex flex-col">
          <Link
            to="/catalog/restaurants"
            className="peer mb-2 text-lg font-medium leading-snug text-black-text cursor-pointer hover:text-black-text">
            Рестораны
          </Link>
          <span className="w-full h-1 bg-primary rounded-tl rounded-tr transition-all peer-hover:bg-primary"></span>
        </li>
        <li className="inline-flex flex-col">
          <Link
            to="/catalog/singers"
            className="peer mb-2 text-lg font-medium leading-snug text-grey-text cursor-pointer hover:text-black-text">
            Певцы
          </Link>
          <span className="w-full h-1 bg-transparent rounded-tl rounded-tr transition-all peer-hover:bg-primary"></span>
        </li>
        <li className="inline-flex flex-col">
          <a className="peer mb-2 text-lg font-medium leading-snug text-grey-text cursor-pointer hover:text-black-text">
            Тамада
          </a>
          <span className="w-full h-1 bg-transparent rounded-tl rounded-tr transition-all peer-hover:bg-primary"></span>
        </li>
        <li className="inline-flex flex-col">
          <a className="peer mb-2 text-lg font-medium leading-snug text-grey-text cursor-pointer hover:text-black-text">
            Танцоры
          </a>
          <span className="w-full h-1 bg-transparent rounded-tl rounded-tr transition-all peer-hover:bg-primary"></span>
        </li>
        <li className="inline-flex flex-col">
          <a className="peer mb-2 text-lg font-medium leading-snug text-grey-text cursor-pointer hover:text-black-text">
            Музыканты
          </a>
          <span className="w-full h-1 bg-transparent rounded-tl rounded-tr transition-all peer-hover:bg-primary"></span>
        </li>
      </ul>
      <div>
        <h3 className="mb-8 text-headline3 font-bold text-black-text">Рестораны</h3>
        <div className="flex justify-between flex-wrap gap-y-8">
          <Link to="product">
            <ProductCard />
          </Link>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Category;

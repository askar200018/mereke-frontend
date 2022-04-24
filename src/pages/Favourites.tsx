import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import ProductCard from '../components/ProductCard';

const Favourites = () => {
  return (
    <div className="pt-4 pb-20">
      <div className="container mx-auto">
        <div className="mb-4">
          <Breadcrumbs breadcrumbs={['Избранное']} />
        </div>
        <h2 className="mb-8 text-5xl font-semibold text-black-text">Избранное</h2>
        <div className="flex justify-between flex-wrap gap-y-8">
          <Link to="/catalog/restaurants/product">
            <ProductCard showFavourite={true} />
          </Link>
          <Link to="/catalog/restaurants/product">
            <ProductCard showFavourite={true} />
          </Link>
          <Link to="/catalog/restaurants/product">
            <ProductCard showFavourite={true} />
          </Link>
          <Link to="/catalog/restaurants/product">
            <ProductCard showFavourite={true} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Favourites;

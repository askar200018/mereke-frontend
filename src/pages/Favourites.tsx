import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import ProductCard from '../components/ProductCard';
import { FAVOURITES } from '../data/products';

const Favourites = () => {
  return (
    <div className="pt-4 pb-20">
      <div className="container mx-auto">
        <div className="mb-4">
          <Breadcrumbs breadcrumbs={['Избранное']} />
        </div>
        <h2 className="mb-8 text-5xl font-semibold text-black-text">Избранное</h2>
        <div className="flex justify-between flex-wrap gap-y-8">
          {FAVOURITES.map((product) => (
            <Link key={product.id} to={`/products/${product.id}`}>
              <ProductCard showFavourite={true} product={product} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favourites;

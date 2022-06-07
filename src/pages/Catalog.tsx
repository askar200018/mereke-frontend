import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';

const Catalog = () => {
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    if (!params.category) {
      navigate('/catalog/restaurants');
    }
  }, [params.category]);

  const breadcrumbs = ['Каталог', 'Рестораны'];
  return (
    <div className="pt-4 pb-20">
      <div className="container mx-auto">
        <div className="mb-4">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
        </div>
        <h2 className="mb-5 text-5xl font-semibold text-black-text">Каталог</h2>
        <ul className="flex space-x-6 mb-8">
          <li>
            <NavLink to="/catalog/restaurants">
              {({ isActive }) => (
                <div className="inline-flex flex-col">
                  <span
                    className={
                      isActive
                        ? 'peer mb-2 text-lg font-medium leading-snug text-black-text cursor-pointer hover:text-black-text'
                        : 'peer mb-2 text-lg font-medium leading-snug text-grey-text cursor-pointer hover:text-black-text'
                    }>
                    Рестораны
                  </span>
                  <span
                    className={
                      isActive
                        ? 'w-full h-1 bg-primary rounded-tl rounded-tr transition-all peer-hover:bg-primary'
                        : 'hidden'
                    }></span>
                </div>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/catalog/artists">
              {({ isActive }) => (
                <div className="inline-flex flex-col">
                  <span
                    className={
                      isActive
                        ? 'peer mb-2 text-lg font-medium leading-snug text-black-text cursor-pointer hover:text-black-text'
                        : 'peer mb-2 text-lg font-medium leading-snug text-grey-text cursor-pointer hover:text-black-text'
                    }>
                    Певцы
                  </span>
                  <span
                    className={
                      isActive
                        ? 'w-full h-1 bg-primary rounded-tl rounded-tr transition-all peer-hover:bg-primary'
                        : 'hidden'
                    }></span>
                </div>
              )}
            </NavLink>
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
        <Outlet />
      </div>
    </div>
  );
};

export default Catalog;

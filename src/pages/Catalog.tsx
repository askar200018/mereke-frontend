import { useEffect } from 'react';
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
        <Outlet />
      </div>
    </div>
  );
};

export default Catalog;

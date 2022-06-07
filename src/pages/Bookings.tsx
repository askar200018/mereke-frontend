import Breadcrumbs from '../components/Breadcrumbs';
import ProductCard from '../components/ProductCard';

const Bookings = () => {
  const breadcrumbs = ['Брони'];

  return (
    <div className="pt-4 pb-20">
      <div className="container mx-auto">
        <div className="mb-4">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
        </div>
        <h2 className="mb-8 text-5xl font-semibold text-black-text">Брони</h2>
        <div>
          <ul>
            <li>
              <h4 className=" mb-8 text-headline3 font-bold text-black-text">Бронь №12</h4>
              <div className="flex justify-between space-x-8">
                <ProductCard />
                <div className="flex-1 py-8 px-7 bg-background rounded-2xl">
                  <h5 className="mb-8 text-2xl font-semibold text-primary text-right">
                    Подтвержден
                  </h5>
                  <ul>
                    <li className="flex justify-between mb-2">
                      <span className="text-lg font-normal text-black">День банкета</span>
                      <span className="text-lg font-normal text-black">22.04.2022</span>
                    </li>
                    <li className="flex justify-between mb-2">
                      <span className="text-lg font-normal text-black">Предприниматель</span>
                      <span className="text-lg font-normal text-black">Нетуллина Н.</span>
                    </li>
                    <li className="flex justify-between mb-2">
                      <span className="text-lg font-normal text-black">Номер телефона</span>
                      <span className="text-lg font-normal text-black">+7 (777) 777 77 77</span>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Bookings;

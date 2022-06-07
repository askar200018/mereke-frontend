import { useSelector } from 'react-redux';
import Breadcrumbs from '../components/Breadcrumbs';
import ProductCard from '../components/ProductCard';
import { Status } from '../interfaces/status.enum';
import { RootState } from '../store';

const Bookings = () => {
  const breadcrumbs = ['Брони'];
  const bookings = useSelector((state: RootState) => state.bookings.bookings);

  const getDate = (timestamp: number) => {
    return new Date(timestamp).toDateString();
  };

  // renderSwitch(param) {
  //   switch(param) {
  //     case 'foo':
  //       return 'bar';
  //     default:
  //       return 'foo';
  //   }
  // }

  const renderStatus = (status: Status) => {
    switch (status) {
      case Status.Succeeded:
        return <h5 className="mb-8 text-2xl font-semibold text-primary text-right">Подтвержден</h5>;
      case Status.Canceled:
        return <h5 className="mb-8 text-2xl font-semibold  text-error text-right">Отменен</h5>;
      default:
        return (
          <h5 className="mb-8 text-2xl font-semibold text-grey-text text-right">В ожидании</h5>
        );
    }
  };

  return (
    <div className="pt-4 pb-20">
      <div className="container mx-auto">
        <div className="mb-4">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
        </div>
        <h2 className="mb-8 text-5xl font-semibold text-black-text">Брони</h2>
        <div>
          <ul>
            {bookings.map((booking) => (
              <li key={booking.id} className="mb-8">
                <h4 className=" mb-8 text-headline3 font-bold text-black-text">
                  Бронь №{booking.id}
                </h4>
                <div className="flex justify-between space-x-8">
                  <ProductCard product={booking.product as any} />
                  <div className="flex-1 py-8 px-7 bg-background rounded-2xl">
                    {renderStatus(booking.status)}
                    <ul>
                      <li className="flex justify-between mb-2">
                        <span className="text-lg font-normal text-black">День банкета</span>
                        <span className="text-lg font-normal text-black">
                          {getDate(booking.date)}
                        </span>
                      </li>
                      <li className="flex justify-between mb-2">
                        <span className="text-lg font-normal text-black">Предприниматель</span>
                        <span className="text-lg font-normal text-black">
                          {booking.managerEmail}
                        </span>
                      </li>
                      <li className="flex justify-between mb-2">
                        <span className="text-lg font-normal text-black">Номер телефона</span>
                        <span className="text-lg font-normal text-black">+7 (777) 777 77 77</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Bookings;

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import ProductCard from '../components/ProductCard';
import { Booking } from '../interfaces/booking.interface';
import { Status } from '../interfaces/status.enum';
import { RootState } from '../store';
import { changeStatusOfBooking } from '../store/bookingsStore';

const BookingsDetail = () => {
  const breadcrumbs = ['Брони'];
  const [booking, setBooking] = useState<Booking>();

  const params = useParams();
  const bookings = useSelector((state: RootState) => state.bookings.bookings);
  const dispatch = useDispatch();

  useEffect(() => {
    const paramsId = params.bookingId ? +params.bookingId : 0;
    const findBooking = bookings.find((b) => b.id === paramsId);
    setBooking(findBooking);
  }, [bookings]);

  if (!booking) {
    return <div>Loading...</div>;
  }

  const getDate = (timestamp: number) => {
    return new Date(timestamp).toDateString();
  };

  const cancelBooking = () => {
    dispatch(
      changeStatusOfBooking({
        status: Status.Canceled,
        id: booking.id,
      }),
    );
  };

  const confirmBooking = () => {
    dispatch(
      changeStatusOfBooking({
        status: Status.Succeeded,
        id: booking.id,
      }),
    );
  };

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
            <li key={booking.id} className="mb-8">
              <h4 className="mb-8 text-headline3 font-bold text-black-text">Бронь №{booking.id}</h4>
              <div className="flex justify-between space-x-8">
                <ProductCard product={booking.product as any} />
                <div className="flex-1 py-8 px-7 block bg-background rounded-2xl cursor-pointer">
                  {renderStatus(booking.status)}
                  <ul className="mb-4">
                    <li className="flex justify-between mb-2">
                      <span className="text-lg font-normal text-black">День банкета</span>
                      <span className="text-lg font-normal text-black">
                        {getDate(booking.date)}
                      </span>
                    </li>
                    <li className="flex justify-between mb-2">
                      <span className="text-lg font-normal text-black">Предприниматель</span>
                      <span className="text-lg font-normal text-black">{booking.managerEmail}</span>
                    </li>
                    <li className="flex justify-between mb-2">
                      <span className="text-lg font-normal text-black">Номер телефона</span>
                      <span className="text-lg font-normal text-black">+7 (777) 777 77 77</span>
                    </li>
                  </ul>
                  {booking.status === Status.Waiting && (
                    <div>
                      <button
                        onClick={confirmBooking}
                        className="mb-4 w-full h-[56px] text-lg font-medium text-white bg-primary rounded">
                        Подтвердить бронь
                      </button>
                      <button
                        onClick={cancelBooking}
                        className="w-full  text-lg font-medium text-primary rounded">
                        Отменить заказ
                      </button>
                    </div>
                  )}
                  {booking.status === Status.Succeeded && (
                    <button
                      onClick={cancelBooking}
                      className="mb-4 w-full h-[56px] text-lg font-medium text-white bg-primary rounded">
                      Отменить заказ
                    </button>
                  )}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BookingsDetail;

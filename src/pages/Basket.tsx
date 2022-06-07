import { TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import ProductCard from '../components/ProductCard';
import { ARTISTS } from '../data/artists';
import { RESTAURANTS } from '../data/products';
import { Booking, BookingRequest } from '../interfaces/booking.interface';
import { IProduct } from '../interfaces/product.interface';
import { Status } from '../interfaces/status.enum';
import { RootState } from '../store';
import { addBooking } from '../store/bookingsStore';

const Basket = () => {
  const breadcrumbs = ['Корзина'];
  const [bookingDate, setBooingDate] = useState(new Date());

  const params = useParams();
  const [product, setProduct] = useState<IProduct | null>(null);

  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const restaurant = RESTAURANTS.find((r) => r.id === params.productId);
    const artist = ARTISTS.find((a) => a.id === params.productId);
    if (restaurant) {
      setProduct(restaurant);
    } else if (artist) {
      setProduct(artist);
    }
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const booking: BookingRequest = {
      product,
      managerEmail: 'admin@admin.com',
      clientEmail: user?.mail || null,
      status: Status.Waiting,
      date: bookingDate.getTime(),
    };
    dispatch(addBooking(booking));
  };

  if (!product) {
    return <div>Still loading</div>;
  }

  return (
    <div className="pt-4 pb-20">
      <div className="container mx-auto">
        <div className="mb-4">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
        </div>
        <div>
          <ul>
            <li>
              <h4 className=" mb-8 text-headline3 font-bold text-black-text">Бронь №12</h4>
              <div className="flex justify-between space-x-8">
                <ProductCard product={product} />
                <div className="flex-1 py-8 px-7 max-w-[626px] bg-background rounded-2xl">
                  <form onSubmit={handleSubmit}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        label="Выберите время банкета"
                        value={bookingDate}
                        onChange={(newValue) => {
                          setBooingDate(newValue ? newValue : new Date());
                        }}
                        renderInput={(params) => (
                          <TextField {...params} fullWidth={true} sx={{ marginBottom: '24px' }} />
                        )}
                      />
                    </LocalizationProvider>
                    <button
                      className="
                        flex items-center justify-center w-full h-[56px] 
                        text-lg font-medium text-white 
                        rounded bg-primary
                      "
                      type="submit">
                      Забронировать
                    </button>
                  </form>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Basket;

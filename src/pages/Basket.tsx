import { TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import ProductCard from '../components/ProductCard';

const Basket = () => {
  const breadcrumbs = ['Корзина'];
  const [bookingDate, setBooingDate] = useState(new Date());

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
                <ProductCard />
                <div className="flex-1 py-8 px-7 max-w-[626px] bg-background rounded-2xl">
                  <form>
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

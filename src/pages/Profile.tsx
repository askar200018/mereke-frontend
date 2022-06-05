import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';

const Profile = () => {
  const breadcrumbs = ['Профиль', 'Личные данные'];

  const [dateOfBirth, setDateOfBirth] = useState(new Date(2000, 0, 18));
  const [name, setName] = useState('Askar');
  const [phone, setPhone] = useState('8 777 706 5179');

  return (
    <div className="pt-4 pb-20">
      <div className="container mx-auto">
        <div className="mb-4">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
        </div>
        <h2 className="mb-5 text-5xl font-semibold text-black-text">Профиль</h2>
        <ul className="flex space-x-6 mb-8">
          <li className="inline-flex flex-col">
            <Link
              to="/catalog/restaurants"
              className="peer mb-2 text-lg font-medium leading-snug text-black-text cursor-pointer hover:text-black-text">
              Личные данные
            </Link>
            <span className="w-full h-1 bg-primary rounded-tl rounded-tr transition-all peer-hover:bg-primary"></span>
          </li>
          <li className="inline-flex flex-col">
            <Link
              to="/catalog/singers"
              className="peer mb-2 text-lg font-medium leading-snug text-grey-text cursor-pointer hover:text-black-text">
              Служба поддержки
            </Link>
            <span className="w-full h-1 bg-transparent rounded-tl rounded-tr transition-all peer-hover:bg-primary"></span>
          </li>
          <li className="inline-flex flex-col">
            <a className="peer mb-2 text-lg font-medium leading-snug text-grey-text cursor-pointer hover:text-black-text">
              FAQ
            </a>
            <span className="w-full h-1 bg-transparent rounded-tl rounded-tr transition-all peer-hover:bg-primary"></span>
          </li>
        </ul>
        <div>
          <p className="mb-6 text-base font-normal text-grey-text">
            Вам будет удобнее, если Вы укажите эту информацию сразу
          </p>
          <form className="w-[626px]">
            <TextField
              id="outlined-basic"
              label="Имя"
              variant="outlined"
              fullWidth={true}
              sx={{ marginBottom: '24px' }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Дата рождения"
                value={dateOfBirth}
                onChange={(newValue) => {
                  setDateOfBirth(newValue ? newValue : new Date());
                }}
                renderInput={(params) => (
                  <TextField {...params} fullWidth={true} sx={{ marginBottom: '24px' }} />
                )}
              />
            </LocalizationProvider>
            <TextField
              id="outlined-basic"
              label="Номер телефона"
              variant="outlined"
              fullWidth={true}
              sx={{ marginBottom: '24px' }}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <TextField
              disabled
              id="outlined-basic"
              label="Адрес электронной почты"
              variant="outlined"
              fullWidth={true}
              type="email"
              sx={{ marginBottom: '24px' }}
              value={'mail@mail.ru'}
            />
            <div>
              <h4 className="mb-4 text-lg font-medium leading-snug text-black-text">
                Изменить пароль
              </h4>
              <div className="flex space-x-6">
                <TextField
                  label="Введите старый пароль"
                  variant="outlined"
                  fullWidth={true}
                  sx={{ marginBottom: '24px' }}
                />
                <TextField
                  label="Придумайте новый пароль"
                  variant="outlined"
                  fullWidth={true}
                  sx={{ marginBottom: '24px' }}
                />
              </div>
            </div>
            <button
              className="
                flex items-center justify-center w-full h-[56px] 
                text-lg font-medium text-white 
                rounded bg-primary
              "
              type="submit">
              Редактировать
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;

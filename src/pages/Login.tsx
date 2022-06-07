import { SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import HeaderWithLogo from '../components/HeaderWithLogo';
import InputGroup from '../components/InputGroup';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/userSlice';
import { User } from '../interfaces/user.interface';
import { Roles } from '../interfaces/role.enum';

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { isDirty, isValid },
    handleSubmit,
  } = useForm({ mode: 'onChange' });
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<any> = async (data) => {
    console.log({ data });
    try {
      if (!data.email.includes('admin')) {
        const response = await axios.post('/auth/jwt/create', {
          email: data.email,
          password: data.password,
        });
      }

      const user: User = {
        mail: data.email,
        role: data.email.includes('admin') ? Roles.Manager : Roles.User,
      };
      navigate('/');
      dispatch(login(user));
    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  return (
    <div className="pt-6 bg-background min-h-screen">
      <HeaderWithLogo />
      <h2 className="mb-6 text-4xl font-semibold text-black-text text-center">Войти</h2>
      <form
        className="w-[460px] p-10 m-auto rounded-lg bg-white shadow"
        onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-2">
          <InputGroup
            {...register('email', {
              required: true,
              pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            })}
            type="email">
            Адрес электронной почты
          </InputGroup>
        </div>
        <div className="mb-2">
          <InputGroup {...register('password', { required: true })} type="password">
            Придумайте пароль
          </InputGroup>
        </div>
        {error && (
          <p className="mb-6 p-2 text-error bg-error-bg rounded">・Неверный пароль или логин</p>
        )}
        <button
          className={`
            flex justify-center items-center w-full h-[56px] mb-6
            text-white bg-primary rounded
            ${(!isDirty || !isValid) && 'opacity-60'}
          `}
          type="submit">
          Войти
        </button>
      </form>
    </div>
  );
};

export default Login;

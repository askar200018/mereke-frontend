import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';

import InputGroup from '../components/InputGroup';
import HeaderWithLogo from '../components/HeaderWithLogo';

const Auth = () => {
  const {
    register,
    formState: { isDirty, isValid },
    handleSubmit,
  } = useForm({ mode: 'onChange' });

  const onSubmit: SubmitHandler<any> = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="pt-6 bg-background min-h-screen">
      <HeaderWithLogo />
      <h2 className="mb-6 text-4xl font-semibold text-black-text text-center">Авторизация</h2>
      <form
        className="w-[460px] p-10 m-auto rounded-lg bg-white shadow"
        onSubmit={handleSubmit(onSubmit)}>
        <InputGroup
          {...register('email', {
            required: true,
            pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
          })}
          type="email">
          Адрес электронной почты
        </InputGroup>
        <InputGroup {...register('password', { required: true })} type="password">
          Придумайте пароль
        </InputGroup>

        <div className="flex justify-between mb-6">
          <label className="radio-group flex items-center space-x-2 cursor-pointer" htmlFor="user">
            <input
              {...register('role', { required: true })}
              className="form-radio"
              type="radio"
              name="role"
              value="user"
              id="user"
              required={true}
            />
            <span className="checkmark w-4 h-4 rounded-full border-2 border-grey-text"></span>
            <span className="text-base text-black-text">Я пользователь</span>
          </label>
          <label className="radio-group flex items-center space-x-2 cursor-pointer" htmlFor="owner">
            <input
              {...register('role', { required: true })}
              className="form-radio"
              type="radio"
              name="role"
              value="owner"
              id="owner"
            />
            <span className="checkmark w-4 h-4 rounded-full border-2 border-grey-text"></span>
            <span className="text-base text-black-text">Я предприниматель</span>
          </label>
        </div>
        <button
          className={`
            flex justify-center items-center w-full h-[56px] mb-6
            text-white bg-primary rounded
            ${(!isDirty || !isValid) && 'opacity-60'}
          `}
          type="submit">
          Отправить письмо
        </button>
        <Link
          to="/login"
          className="
            flex items-center justify-center h-[56px] w-full mb-4
            text-lg text-primary font-medium cursor-pointer
          ">
          У меня есть аккаунт
        </Link>
        <p className="text-base">
          <span className=" text-grey-text">Продолжая, вы соглашаетесь со сбором,</span> обработкой
          персональных данных <span className=" text-grey-text">и</span> Пользовательским
          соглашением
        </p>
      </form>
    </div>
  );
};

export default Auth;

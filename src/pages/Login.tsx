import { SubmitHandler, useForm } from 'react-hook-form';
import HeaderWithLogo from '../components/HeaderWithLogo';
import InputGroup from '../components/InputGroup';

const Login = () => {
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
        <p className="mb-6 p-2 text-error bg-error-bg rounded">・Неверный пароль</p>
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

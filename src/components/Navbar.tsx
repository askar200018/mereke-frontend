import { NavLink } from 'react-router-dom';
import { ReactComponent as ProfileIcon } from '../assets/icons/profile.svg';

const Navbar = () => {
  // const navLinks = ['Главная', 'Каталог', 'Избранное', 'Корзина'];
  return (
    <div className="bg-background">
      <nav className="container mx-auto flex items-center justify-between h-10">
        <ul className="flex space-x-6">
          <li>
            <NavLink
              className={({ isActive }) => `
                text-sm cursor-pointer hover:text-primary
                ${isActive ? 'text-primary' : 'text-black-text'}
              `}
              to="/">
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/catalog"
              className={({ isActive }) => `
                text-sm cursor-pointer hover:text-primary
                ${isActive ? 'text-primary' : 'text-black-text'}
              `}>
              Каталог
            </NavLink>
          </li>
          <li>
            <NavLink
              to="favourites"
              className={({ isActive }) => `
                text-sm cursor-pointer hover:text-primary
                ${isActive ? 'text-primary' : 'text-black-text'}
              `}>
              Избранное
            </NavLink>
          </li>
          <li>
            <a className="text-sm text-black-text cursor-pointer hover:text-primary">Корзина</a>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <div>
            <NavLink
              to="/profile"
              className={({ isActive }) => `
                group profile-link flex items-center space-x-2 cursor-pointer
                ${isActive ? 'profile-link_active' : undefined}
              `}>
              <ProfileIcon className="icon stroke-black-text group-hover:stroke-primary" />
              <span className="text-sm text-black-text group-hover:text-primary">Мой профиль</span>
            </NavLink>
          </div>
          {/* <div className="w-[1px] h-5 bg-grey-text"></div>
          <ul className="flex space-x-5">
            <li>
              <button
                className="
                  text-xs 
                  text-grey-text 
                  decoration-primary 
                  decoration-2 
                  transition-all 
                  hover:underline 
                  hover:text-black-text
                ">
                Қаз
              </button>
            </li>
            <li className="underline decoration-sky-500">
              <button className="text-xs text-black-text underline decoration-primary decoration-2">
                Рус
              </button>
            </li>
            <li>
              <button className="text-xs text-grey-text decoration-primary decoration-2 hover:underline hover:text-black-text">
                Eng
              </button>
            </li>
          </ul> */}
        </div>
      </nav>
    </div>
  );
};
export default Navbar;

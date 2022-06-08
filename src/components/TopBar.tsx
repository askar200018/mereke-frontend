import { ReactComponent as Logo } from '../assets/images/logo.svg';
import { ReactComponent as FacebookIcon } from '../assets/icons/facebook.svg';
import { ReactComponent as InstagramIcon } from '../assets/icons/instagram.svg';
import { ReactComponent as YoutubeIcon } from '../assets/icons/youtube.svg';
import { ReactComponent as LoginIcon } from '../assets/icons/login.svg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { useDispatch } from 'react-redux';
import { logout } from '../store/userSlice';

const TopBar = () => {
  const isAuthorized = useSelector((state: RootState) => state.user.isAuthorized);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <div className="relative flex justify-between items-center container mx-auto py-2">
        <div>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="flex items-center justify-end w-[255px]">
          {/* <div className="flex space-x-3">
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
              <FacebookIcon className="fill-grey-text hover:fill-blue-600" />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
              <YoutubeIcon className="fill-grey-text hover:fill-red-600" />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
              <InstagramIcon className="fill-grey-text hover:fill-rose-500" />
            </a>
          </div> */}
          <div>
            {!isAuthorized && (
              <Link to="/auth" className="flex space-x-2 cursor-pointer">
                <span className="text-sm font-normal text-primary">Войти</span>
                <LoginIcon />
              </Link>
            )}
            {isAuthorized && (
              <button onClick={handleLogout} className="flex space-x-2 cursor-pointer">
                <span className="text-sm font-normal text-primary">Выйти</span>
                <LoginIcon />
              </button>
            )}
          </div>
        </div>
        <div className="absolute w-[1px] h-[89px] bg-grey-text top-0 right-[128px]"></div>
      </div>
    </div>
  );
};
export default TopBar;

import { ReactComponent as Logo } from '../assets/images/logo.svg';
import { ReactComponent as FacebookIcon } from '../assets/icons/facebook.svg';
import { ReactComponent as InstagramIcon } from '../assets/icons/instagram.svg';
import { ReactComponent as YoutubeIcon } from '../assets/icons/youtube.svg';
import { ReactComponent as LoginIcon } from '../assets/icons/login.svg';

const TopBar = () => {
  return (
    <div>
      <div className="relative flex justify-between items-center container mx-auto py-2">
        <div>
          <Logo />
        </div>
        <div className="flex items-center justify-between w-[255px]">
          <div className="flex space-x-3">
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
              <FacebookIcon className="fill-grey-text hover:fill-primary" />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
              <YoutubeIcon className="fill-grey-text hover:fill-primary" />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
              <InstagramIcon className="fill-grey-text hover:fill-primary" />
            </a>
          </div>
          <div>
            <a className="flex space-x-2 cursor-pointer">
              <span className="text-sm font-normal text-primary">Войти</span>
              <LoginIcon />
            </a>
          </div>
        </div>
        <div className="absolute w-[1px] h-[89px] bg-grey-text top-0 right-[264px]"></div>
      </div>
    </div>
  );
};
export default TopBar;

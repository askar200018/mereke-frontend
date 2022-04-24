import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/images/logo.svg';

const HeaderWithLogo = () => {
  return (
    <div className="container m-auto mb-16">
      <Link to="/">
        <Logo />
      </Link>
    </div>
  );
};

export default HeaderWithLogo;

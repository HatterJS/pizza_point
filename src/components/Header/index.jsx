import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../LoginForm';
import RegistrationForm from '../RegistrationForm';

import './index.css';
import userImg from '../../assets/img/userAvatar.png';
import { instagramSvg, telegramSvg } from '../SvgSprite';

function Header() {
  const [isAuthorised, setIsAuthorized] = React.useState(false);
  const [registration, setRegistration] = React.useState(false);

  return (
    <header className="header">
      {isAuthorised && (
        <LoginForm setIsAuthorized={setIsAuthorized} setRegistration={setRegistration} />
      )}
      {registration && <RegistrationForm setRegistration={setRegistration} />}
      <div className="header__cover cover unselectable">
        <div className="header__social">
          <p>Приєднуйтесь</p>
          {instagramSvg}
          {telegramSvg}
        </div>
        <ul className="header__about">
          <Link to={'/common/about'}>
            <li>Про нас</li>
          </Link>
          <Link to={'/common/delivery'}>
            <li>Доставка</li>
          </Link>
          <Link to={'/common/vacancy'}>
            <li>Вакансії</li>
          </Link>
        </ul>
        {/* <Link to={'/user/main'}> */}
        <div className="header__account" onClick={() => setIsAuthorized(true)}>
          <p>UserName</p>
          <img src={userImg} alt="user" />
        </div>
        {/* </Link> */}
      </div>
    </header>
  );
}

export default Header;

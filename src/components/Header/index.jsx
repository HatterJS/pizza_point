import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../LoginForm';
import RegistrationForm from '../RegistrationForm';

import './index.css';
import userImg from '../../assets/img/userAvatar.png';
import { instagramSvg, telegramSvg } from '../SvgSprite';

function Header() {
  const [showLoginForm, setShowLoginForm] = React.useState(false);
  const [showRegistrationForm, setShowRegistrationForm] = React.useState(false);
  // const [isAuthorized, setIsAuthorized] = React.useState(false);
  const [userName, setUserName] = React.useState('Авторизація');

  return (
    <header className="header">
      {showLoginForm && (
        <LoginForm
          setShowLoginForm={setShowLoginForm}
          setShowRegistrationForm={setShowRegistrationForm}
          setUserName={setUserName}
        />
      )}
      {showRegistrationForm && (
        <RegistrationForm setShowRegistrationForm={setShowRegistrationForm} />
      )}
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
        <div className="header__account" onClick={() => setShowLoginForm(true)}>
          <p>{userName}</p>
          <img src={userImg} alt="user" />
        </div>
        {/* </Link> */}
      </div>
    </header>
  );
}

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from '../LoginForm';
import RegistrationForm from '../RegistrationForm';

import { showLoginForm } from '../../redux/slices/authorizedUserSlice';

import './index.css';
import userImg from '../../assets/img/userAvatar.png';
import { instagramSvg, telegramSvg } from '../SvgSprite';

function Header() {
  //create dispatch for Redux
  const dispatch = useDispatch();
  //get user status (is authorized) from Redux
  const { userData, loginForm, registrationForm } = useSelector((state) => state.authorizedUser);

  return (
    <header className="header">
      {loginForm && <LoginForm />}
      {registrationForm && <RegistrationForm />}
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
        {!userData.name ? (
          <div className="header__account" onClick={() => dispatch(showLoginForm(true))}>
            <p>Авторизація</p>
            <img src={userImg} alt="user" />
          </div>
        ) : (
          <Link to={'/user/main'}>
            <div className="header__account">
              <p>{userData.name}</p>
              <img src={userImg} alt="user" />
            </div>
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;

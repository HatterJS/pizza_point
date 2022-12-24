import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import UserMain from './components/UserMain';
import UserContacts from './components/UserContacts';
import UserAdress from './components/UserAdress';
import UserHistory from './components/UserHistory';
import NotFound from '../NonFound';

import { logOut } from '../../redux/slices/authorizedUserSlice';

import './index.css';

import userImg from '../../assets/img/userAvatar.png';

function UserPage() {
  //create dispatch for Redux
  const dispatch = useDispatch();

  const menu = [
    { title: 'Головна', image: userImg, route: '/user/main' },
    { title: 'Контакти', image: userImg, route: '/user/contacts' },
    { title: 'Адреси', image: userImg, route: '/user/adress' },
    { title: 'Історія', image: userImg, route: '/user/history' }
  ];

  return (
    <div className="user">
      <header className="user__header">
        <div></div>
        <h1 className="unselectable">ОСОБИСТА СТОРІНКА</h1>
        <div></div>
      </header>
      <div className="user__main">
        <nav className="user__navigation">
          {menu.map((obj) => (
            <Link to={obj.route} key={obj.title}>
              <div className="user__menuItem">
                <img src={obj.image} alt="icon" width={25} height={25} />
                <p>{obj.title}</p>
              </div>
            </Link>
          ))}
          <Link to={'/'} onClick={() => dispatch(logOut())}>
            <div className="user__menuItem">
              <img src={userImg} alt="exit" width={25} height={25} />
              <p>Вихід</p>
            </div>
          </Link>
        </nav>
        <Routes>
          <Route path="/main" element={<UserMain />} />
          <Route path="/contacts" element={<UserContacts />} />
          <Route path="/adress" element={<UserAdress />} />
          <Route path="/history" element={<UserHistory />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default UserPage;

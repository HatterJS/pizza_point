import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
// import LoginForm from './components/LoginForm';
// import RegistrationForm from './components/RegistrationForm';
import UserMain from './components/UserMain';
import UserContacts from './components/UserContacts';
import UserAdress from './components/UserAdress';
import UserHistory from './components/UserHistory';
import NotFound from '../NonFound';
import './index.css';

import userImg from '../../assets/img/userAvatar.png';

function UserPage() {
  // const [isAuthorised, setIsAuthorized] = React.useState(false);
  // const [registration, setRegistration] = React.useState(true);

  const menu = [
    { title: 'Головна', image: userImg, route: '/user/main' },
    { title: 'Контакти', image: userImg, route: '/user/contacts' },
    { title: 'Адреси', image: userImg, route: '/user/adress' },
    { title: 'Історія', image: userImg, route: '/user/history' }
  ];

  // const [section, setSection] = React.useState('Головна');

  return (
    <div className="user">
      {/* {isAuthorised && <LoginForm setIsAuthorized={setIsAuthorized} />}
      {registration && <RegistrationForm setRegistration={setRegistration} />} */}
      <header className="user__header">
        <div></div>
        <h1 className="unselectable">ОСОБИСТА СТОРІНКА</h1>
        <div></div>
      </header>
      <div className="user__main">
        <nav className="user__navigation">
          {menu.map((obj) => (
            <div key={obj.title} className="user__menuItem">
              <img src={obj.image} alt="icon" width={25} height={25} />
              <Link to={obj.route}>{obj.title}</Link>
            </div>
          ))}
          <div className="user__logout">
            <img src={userImg} alt="exit" width={25} height={25} />
            {/* <button onClick={() => setIsAuthorized(true)}>Вихід</button> */}
          </div>
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

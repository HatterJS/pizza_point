import React from 'react';
import LoginForm from './components/LoginForm';
import './index.css';

function UserPage() {
  const isAutorised = false;
  const menu = [
    { title: 'Головна', image: '' },
    { title: 'Контактна інформація', image: '' },
    { title: 'Адреси доставки', image: '' },
    { title: 'Історія замовлень', image: '' },
    { title: 'Вихід', image: '' }
  ];

  const [section, setSection] = React.useState('Головна');

  return (
    <div className="user">
      {isAutorised && <LoginForm />}
      <header className="user__header">
        <div></div>
        <h1 className="unselectable">КОШИК</h1>
        <div></div>
      </header>
      <div className="user__main">
        <nav className="user__navigation">
          {menu.map((obj) => (
            <input
              key={obj.title}
              type="radio"
              name="menu"
              label={obj.title}
              onClick={() => setSection(obj.title)}
              defaultChecked={obj.title === 'Головна'}
            />
          ))}
        </nav>
        <div className="user__content">{section}</div>
      </div>
    </div>
  );
}

export default UserPage;

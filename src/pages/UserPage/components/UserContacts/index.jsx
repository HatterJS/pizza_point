import React from 'react';
import './index.css';

function UserContacts() {
  const [isActive, setIsActive] = React.useState(true);

  return (
    <div className="userContacts unselectable">
      <h2>Контакти</h2>
      <div className="userContacts__section">
        <h4>Телефон:</h4>
        <input type="text" placeholder="Телефон" disabled={isActive} />
        <h4>E-mail:</h4>
        <input type="text" placeholder="E-mail" disabled={isActive} />
      </div>
      <div className="userContacts__buttons">
        <button className="acceptButton" onClick={() => setIsActive(false)} disabled={!isActive}>
          Редагувати
        </button>
        <button className="acceptButton" onClick={() => setIsActive(true)} disabled={isActive}>
          Зберегти
        </button>
      </div>
    </div>
  );
}

export default UserContacts;

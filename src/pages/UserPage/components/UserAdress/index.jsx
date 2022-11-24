import React from 'react';
import './index.css';

function UserAdress() {
  const [isActive, setIsActive] = React.useState(true);

  return (
    <div className="userAdress unselectable">
      <h2>Адреси</h2>
      <div className="userAdress__section">
        <h4>Адреса 1:</h4>
        <div>
          <input type="text" placeholder="Вулиця" disabled={isActive} />
          <input
            className="userAdress__home"
            type="text"
            placeholder="Будинок"
            disabled={isActive}
          />
          <input
            className="userAdress__appartments"
            type="text"
            placeholder="Квартира"
            disabled={isActive}
          />
        </div>
      </div>
      <div className="userAdress__section">
        <h4>Адреса 2:</h4>
        <div>
          <input type="text" placeholder="Вулиця" disabled={isActive} />
          <input
            className="userAdress__home"
            type="text"
            placeholder="Будинок"
            disabled={isActive}
          />
          <input
            className="userAdress__appartments"
            type="text"
            placeholder="Квартира"
            disabled={isActive}
          />
        </div>
      </div>
      <div className="userAdress__buttons">
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

export default UserAdress;

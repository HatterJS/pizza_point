import React from 'react';
import './index.css';

function UserMain() {
  const [isActive, setIsActive] = React.useState(true);

  return (
    <div className="UserMain unselectable">
      <h2>Головна</h2>
      <div className="UserMain__section">
        <h4>ПІБ:</h4>
        <div>
          <input type="text" placeholder="Прізвище" disabled={isActive} />
          <input type="text" placeholder="Ім'я" disabled={isActive} />
          <h3>Бонуси: 85 грн.</h3>
        </div>
      </div>
      <div className="UserMain__buttons">
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

export default UserMain;

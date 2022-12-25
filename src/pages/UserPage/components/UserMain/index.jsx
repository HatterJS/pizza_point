import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { setUserData } from '../../../../redux/slices/authorizedUserSlice';

import './index.css';

function UserMain() {
  //create dispatch for Redux
  const dispatch = useDispatch();
  //get userData from Redux
  const { userData } = useSelector((state) => state.authorizedUser);

  const [isActive, setIsActive] = React.useState(true);

  const changedData = JSON.parse(JSON.stringify(userData));

  function handleSaveData() {
    delete changedData._id;
    axios.put(`http://localhost:8887/changeData/${userData._id}`, changedData).then(() => {
      dispatch(setUserData({ ...changedData, _id: userData._id }));
      setIsActive(true);
    });
  }

  return (
    <div className="UserMain unselectable">
      <h2>Персональні дані</h2>
      <div className="UserMain__section">
        <h4>Прізвище:</h4>
        <div>
          <input
            type="text"
            placeholder="Прізвище"
            disabled={isActive}
            defaultValue={userData.surname}
            onChange={(event) => (changedData.surname = event.target.value)}
          />
          <h4>Ім'я:</h4>
          <input
            type="text"
            placeholder="Ім'я"
            disabled={isActive}
            defaultValue={userData.name}
            onChange={(event) => (changedData.name = event.target.value)}
          />
          <h3>Бонуси: 85 грн.</h3>
        </div>
      </div>
      <h2>Контакти</h2>
      <div className="UserMain__section">
        <h4>Телефон:</h4>
        <input
          type="text"
          placeholder="Телефон"
          disabled={isActive}
          defaultValue={userData.phone}
          onChange={(event) => (changedData.phone = event.target.value)}
        />
        <h4>E-mail:</h4>
        <input
          type="text"
          placeholder="E-mail"
          disabled={isActive}
          defaultValue={userData.email}
          onChange={(event) => (changedData.email = event.target.value)}
        />
      </div>
      <h2>Адреса</h2>
      <div className="UserMain__section">
        <div>
          <h4>Вулиця:</h4>
          <input
            type="text"
            placeholder="Вулиця"
            disabled={isActive}
            defaultValue={userData.address.street}
            onChange={(event) => (changedData.address.street = event.target.value)}
          />
          <h4>Будинок:</h4>
          <input
            className="UserMain__home"
            type="text"
            placeholder="Будинок"
            disabled={isActive}
            defaultValue={userData.address.building}
            onChange={(event) => (changedData.address.building = event.target.value)}
          />
          <h4>Квартира:</h4>
          <input
            className="UserMain__appartments"
            type="text"
            placeholder="Квартира"
            disabled={isActive}
            defaultValue={userData.address.apartment}
            onChange={(event) => (changedData.address.apartment = event.target.value)}
          />
        </div>
      </div>
      <div className="UserMain__buttons">
        <button className="acceptButton" onClick={() => setIsActive(false)} disabled={!isActive}>
          Редагувати
        </button>
        <button className="acceptButton" onClick={handleSaveData} disabled={isActive}>
          Зберегти
        </button>
      </div>
    </div>
  );
}

export default UserMain;

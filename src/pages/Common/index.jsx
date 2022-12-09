import React from 'react';
import { Link, useParams } from 'react-router-dom';

import About from './components/About';
import Delivery from './components/Delivery';
import Vacancies from './components/Vacancies';

import './index.css';

function Common({ setShowFavorite }) {
  //get link params
  const params = useParams();

  function defineContent() {
    if (params) {
      if (params.type === 'about') {
        return <About />;
      } else if (params.type === 'delivery') {
        return <Delivery />;
      } else if (params.type === 'vacancy') {
        return <Vacancies />;
      }
    } else {
      return (
        <div className="common unselectable">
          <h3>Ой-ой! Щось пішло не так!</h3>
          <img src="../img/wrongPath.png" alt="empty" />
          <p>Нажаль Ви трохи заблукали</p>
          <Link to="/">
            <button className="acceptButton" onClick={setShowFavorite}>
              Повернутись до кращого місця
            </button>
          </Link>
        </div>
      );
    }
  }
  return <div className="common">{defineContent()}</div>;
}

export default Common;

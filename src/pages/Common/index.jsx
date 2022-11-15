import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import About from './components/About';
import Delivery from './components/Delivery';
import Vacancies from './components/Vacancies';

import './index.css';

function Common({ setShowFavorite }) {
  //get link state
  const contentType = useLocation().state;
  return (
    <div className="common">
      {contentType ? (
        contentType.type === 'about' ? (
          <About />
        ) : contentType.type === 'delivery' ? (
          <Delivery />
        ) : (
          <Vacancies />
        )
      ) : (
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
      )}
    </div>
  );
}

export default Common;

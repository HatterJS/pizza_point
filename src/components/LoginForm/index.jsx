import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './index.css';

import { googleSvg, instagramSvg, faceBookSvg } from '../SvgSprite';

function LoginForm({ setShowLoginForm, setShowRegistrationForm, setUserName }) {
  const [authoriationData, setAuthoriationData] = React.useState({
    email: '',
    password: ''
  });

  function handleRegistration() {
    setShowLoginForm(false);
    setShowRegistrationForm(true);
  }

  function handleAcceptButton() {
    axios.post('http://localhost:8887/authorization', authoriationData).then((res) => {
      if (res.data.name) {
        setUserName(res.data.name);
        setShowLoginForm(false);
      } else {
        alert('Не вірний логін або пароль');
      }
    });
  }

  return (
    <section className="loginForm unselectable">
      <div className="loginForm__shadow" onClick={() => setShowLoginForm(false)}></div>
      <div className="loginForm__card">
        <h2>Авторизація</h2>
        <p className="mb-3">для входу введіть E-mail та пароль</p>
        <input
          type="email"
          id="typeEmailX"
          placeholder="E-mail"
          value={authoriationData.email}
          onChange={(event) =>
            setAuthoriationData((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <input
          type="password"
          id="typePasswordX"
          placeholder="Пароль"
          value={authoriationData.password}
          onChange={(event) =>
            setAuthoriationData((prev) => ({ ...prev, password: event.target.value }))
          }
        />

        <div className="loginForm__forgot">
          <Link to={'/forgot'}>Забули пароль?</Link>
        </div>

        <button className="loginForm__acceptButton acceptButton" onClick={handleAcceptButton}>
          Вхід
        </button>

        <div className="loginForm__socialBlock">
          <Link to={'/social'}>{googleSvg}</Link>
          <Link to={'/social'}>{faceBookSvg}</Link>
          <Link to={'/social'}>{instagramSvg}</Link>
        </div>
        <div className="loginForm__registration">
          Відсутній акаунт?
          <Link to={'/'} onClick={handleRegistration}>
            Реєстрація
          </Link>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;

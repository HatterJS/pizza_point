import { Link } from 'react-router-dom';

import './index.css';

import { googleSvg, instagramSvg, faceBookSvg } from '../../../../components/SvgSprite';

function LoginForm({ setIsAuthorized }) {
  return (
    <section className="loginForm unselectable">
      <div className="loginForm__card">
        <h2>Авторизація</h2>
        <p className="mb-3">для входу введіть E-mail та пароль</p>
        <input type="email" id="typeEmailX" placeholder="E-mail" />
        <input type="password" id="typePasswordX" placeholder="Пароль" />

        <div className="loginForm__forgot">
          <Link to={'/forgot'}>Забули пароль?</Link>
        </div>

        <button
          className="loginForm__acceptButton acceptButton"
          onClick={() => setIsAuthorized(false)}>
          Вхід
        </button>

        <div className="loginForm__socialBlock">
          <Link to={'/social'}>{googleSvg}</Link>
          <Link to={'/social'}>{faceBookSvg}</Link>
          <Link to={'/social'}>{instagramSvg}</Link>
        </div>
        <div className="loginForm__registration">
          Відсутній акаунт?
          <Link to={'/signIn'}>Реєстрація</Link>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;

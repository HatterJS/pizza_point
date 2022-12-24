import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';

import { setUserData, showRegistrationForm } from '../../redux/slices/authorizedUserSlice';

import './index.css';

function RegistrationForm() {
  //create dispatch for Redux
  const dispatch = useDispatch();

  const [registrationData, setRegistrationData] = React.useState({
    name: '',
    email: '',
    password: ''
  });
  const [confirmPassword, setConfirmPassword] = React.useState('');

  //registration forn verification
  function verificationForm() {
    const regex = { name: /.{3,}/, email: /^\S+@\S+\.\S+$/, password: /.{6,}/ };
    return (
      !regex.name.test(registrationData.name) ||
      !regex.email.test(registrationData.email) ||
      !regex.password.test(registrationData.password) ||
      registrationData.password !== confirmPassword
    );
  }
  //text for accept button
  function buttonText() {
    const regex = { name: /.{3,}/, email: /^\S+@\S+\.\S+$/, password: /.{6,}/ };
    if (!regex.name.test(registrationData.name)) {
      return 'перевірте імя';
    } else if (!regex.email.test(registrationData.email)) {
      return 'перевірте email';
    } else if (!regex.password.test(registrationData.password)) {
      return 'перевірте пароль';
    } else if (registrationData.password !== confirmPassword) {
      return 'підтвердіть пароль';
    } else {
      return 'Реєстрація';
    }
  }
  //send data to mongoDB
  function sendData() {
    try {
      axios.post('http://localhost:8887/registration', registrationData).then((res) => {
        if (res.data) {
          console.log(res.data);
          dispatch(showRegistrationForm(false));
          dispatch(setUserData(res.data));
          alert('Ви успішно зареєструвались і тепер можете користуватись особистим кабінетом.');
        } else {
          alert('Зазначений E-mail вже використовується');
        }
      });
    } catch (error) {
      alert('Помилочка! Перезавантажте сторінку.');
      console.log(error);
    }
  }

  return (
    <section className="registrationForm unselectable">
      <div
        className="registrationForm__shadow"
        onClick={() => dispatch(showRegistrationForm(false))}></div>
      <div className="registrationForm__card">
        <h2>Реєстрація</h2>
        <p className="mb-1">Введіть повне ім'я:</p>
        <input
          type="text"
          id="typeEmailX"
          placeholder="Ім'я"
          onChange={(event) =>
            setRegistrationData((prev) => ({ ...prev, name: event.target.value }))
          }
          value={registrationData.name}
          style={
            /.{3,}/.test(registrationData.name)
              ? { outline: 'none' }
              : { outline: '1px dashed lightcoral' }
          }
        />
        <p className="mb-1">Введіть E-mail:</p>
        <input
          type="email"
          id="typeEmailX"
          placeholder="E-mail"
          onChange={(event) =>
            setRegistrationData((prev) => ({ ...prev, email: event.target.value }))
          }
          value={registrationData.email}
          style={
            /^\S+@\S+\.\S+$/.test(registrationData.email)
              ? { outline: 'none' }
              : { outline: '1px dashed lightcoral' }
          }
        />
        <p>Вигадайте пароль:</p>
        <p className="registrationForm__password-notification mb-1">*мінімум 6 символів</p>
        <input
          type="password"
          id="typePasswordX"
          placeholder="Пароль"
          onChange={(event) =>
            setRegistrationData((prev) => ({ ...prev, password: event.target.value }))
          }
          value={registrationData.password}
          style={
            /.{6,}/.test(registrationData.password)
              ? { outline: 'none' }
              : { outline: '1px dashed lightcoral' }
          }
        />
        <input
          type="password"
          id="typePasswordX"
          placeholder="Підтвердження"
          onChange={(event) => setConfirmPassword(event.target.value)}
          value={confirmPassword}
          style={
            registrationData.password === confirmPassword
              ? { outline: 'none' }
              : { outline: '1px dashed lightcoral' }
          }
        />
        {/* <Link to={'/'}> */}
        <button
          className="registrationForm__acceptButton acceptButton"
          onClick={sendData}
          disabled={verificationForm()}>
          {buttonText()}
        </button>
        {/* </Link> */}
      </div>
    </section>
  );
}

export default RegistrationForm;

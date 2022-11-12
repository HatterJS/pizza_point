import React from 'react';
import axios from 'axios';
import Empty from '../../components/Empty';
import GoodsItem from '../../components/GoodsItem';
import './index.css';

function Order({ localCart, setLocalCart, localFavorites, setLocalFavorites }) {
  //client data
  const [clientName, setClientName] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [street, setStreet] = React.useState('');
  const [house, setHouse] = React.useState('');
  const [apartment, setApartment] = React.useState('');
  //set adress depends on delivery type
  const [deliveryType, setDeliveryType] = React.useState('За адресою');
  //state of total price
  const [totalPrice, setTotalPrice] = React.useState(0);
  //price change tracking
  React.useEffect(() => {
    //multiplying the cost and amount for each item from the cart => as a result multiple array
    const costAmountArr = localCart.map((item) =>
      item.cost.map((cost, index) => cost * item.sizeAmount[index]),
    );
    //multiplying all values => as a result total sum
    setTotalPrice(
      costAmountArr
        .map((item) => item.reduce((sum, elem) => sum + elem, 0))
        .reduce((sum, elem) => sum + elem, 0),
    );
  }, [localCart]);
  //Начало блока отправки информации в Telegram канал
  const messageToTelegram =
    `<b>НОВЕ ЗАМОВЛЕННЯ!</b>\n` +
    `<b>_______________________________</b>\n` +
    localCart.map(
      (obj) =>
        `<b>Назва товару: </b>${obj.goodsTitle} <b>x ${obj.sizeAmount}</b>\n` +
        `<b>Розмір: </b>${obj.size} \n` +
        `<b>Ціна: </b>${obj.cost} грн.\n` +
        `\n`,
    ) +
    `<b>Загальна сума: </b>${totalPrice} грн.\n` +
    `<b>_______________________________</b>\n` +
    `\n` +
    `<b>Ім'я: </b>${clientName}\n` +
    `<b>Телефон: </b>${phoneNumber}\n` +
    `<b>E-mail: </b>${email}\n` +
    `<b>Спосіб доставки: </b>${deliveryType}\n` +
    `<b>Адреса: </b>вул.${street}, буд.${house}, кв.${apartment}\n`;
  // `<b>Спосіб оплати: </b>${paymentType}\n` +
  // (discontCode && `<b>Дисконт: </b>${discontCode}\n`) +
  // (message && `<b>Повідомлення: </b>${message}\n`);
  const token = '5688263270:AAGV_0VzX7ie-wj_lSzpzlONAKite6DTEJQ';
  const chatId = '-1001882394576';
  const URI_API = `https://api.telegram.org/bot${token}/sendMessage`;

  async function acceptOrder() {
    try {
      await axios.post(URI_API, {
        chat_id: chatId,
        parse_mode: 'html',
        text: messageToTelegram,
      });
    } catch (error) {
      alert('Помилочка ;( Скористайтесь, будь ласка, телефоном для замовлення.');
    }
    setClientName('');
    setPhoneNumber('');
    setEmail('');
    setDeliveryType(0);
    setStreet('');
    setHouse('');
    setApartment('');
    setLocalCart([]);
  }

  //Конец блока отправки информации в Telegram канал
  return (
    <div className="order">
      <div className="order__title">
        <div></div>
        <h1 className="unselectable">КОШИК</h1>
        <div></div>
      </div>
      {localCart.length ? (
        <div className="order__content">
          <div className="order__customerBlock">
            <div className="order__customerContactsBlock m-tb-20">
              <h3 className="unselectable">Контакти:</h3>
              <div className="order__customerContacts">
                <input
                  type="text"
                  placeholder="Ім`я"
                  onChange={(event) => setClientName(event.target.value)}
                  value={clientName}
                />
                <input
                  type="tel"
                  placeholder="+38(0xx)xxx-xx-xx"
                  onChange={(event) => setPhoneNumber(event.target.value)}
                  value={phoneNumber}
                />
                <input
                  type="email"
                  placeholder="E-mail (для програми лояльності)"
                  onChange={(event) => setEmail(event.target.value)}
                  value={email}
                />
              </div>
            </div>
            <div className="order__customerDeliveryBlock m-tb-20">
              <h3 className="unselectable">Доставка:</h3>
              <div className="order__customerDelivery">
                <input
                  className="selectDelivery"
                  type="radio"
                  name="delivery"
                  value={'За адресою'}
                  checked={deliveryType === 'За адресою' ? true : false}
                  onChange={(event) => setDeliveryType(event.target.value)}
                  label={'За адресою'}
                />
                <input
                  className="selectDelivery"
                  type="radio"
                  name="delivery"
                  value={'Заберу сам'}
                  checked={deliveryType === 'Заберу сам' ? true : false}
                  onChange={(event) => setDeliveryType(event.target.value)}
                  label={'Заберу сам'}
                />
              </div>
            </div>
            <div className="order__customerAdressBlock m-tb-20">
              <h3 className="unselectable">Адреса:</h3>
              {deliveryType === 'За адресою' ? (
                <div className="order__customerAdress">
                  <input
                    type="text"
                    placeholder="Вулиця"
                    onChange={(event) => setStreet(event.target.value)}
                    value={street}
                  />
                  <input
                    type="text"
                    placeholder="Будинок"
                    onChange={(event) => setHouse(event.target.value)}
                    value={house}
                  />
                  <input
                    type="text"
                    placeholder="Квартира"
                    onChange={(event) => setApartment(event.target.value)}
                    value={apartment}
                  />
                </div>
              ) : (
                <div className="order__pizzaPointAdress">
                  <p>м.Київ, вул.Вокзальна 35, +38(066)503-34-00</p>
                  <iframe
                    className="order__googleMap unselectable"
                    title="googleMap"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1270.5626208166402!2d30.4844463735958!3d50.43876780517004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1668276135074!5m2!1sru!2sua"
                    // width="340"
                    height="300"
                    // style={{ border: '0' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
              )}
            </div>
          </div>
          <div className="order__goodsBlock">
            {/* <h2>Замовлення:</h2> */}
            <div className="order__goods">
              {localCart.map((obj) => (
                <GoodsItem
                  key={obj.goodsTitle + obj.id}
                  className={'goods__item-cart'}
                  {...obj}
                  localCart={localCart}
                  setLocalCart={setLocalCart}
                  localFavorites={localFavorites}
                  setLocalFavorites={setLocalFavorites}
                />
              ))}
            </div>
            <div className="order__totalPrice">
              <h3>Загальна сума:</h3>
              <h3>{totalPrice} грн.</h3>
            </div>
            <button className="acceptButton" onClick={() => acceptOrder()}>
              Замовити
            </button>
          </div>
        </div>
      ) : (
        <Empty />
      )}
    </div>
  );
}

export default Order;

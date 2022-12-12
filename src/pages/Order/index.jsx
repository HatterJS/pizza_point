import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../redux/slices/localCartSlice';
import Empty from '../../components/Empty';
import GoodsItem from '../../components/GoodsItem';
import { chatId, URI_API } from '../../components/TelegrammBot';
import './index.css';

function Order() {
  //connect dispatch for redux
  const dispatch = useDispatch();
  //get local cart items from redux store
  const { localCart } = useSelector((state) => state.localCart);
  //ref for input phone number
  const phoneInput = React.useRef();
  //client data ------------>
  const [clientName, setClientName] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [street, setStreet] = React.useState('');
  const [house, setHouse] = React.useState('');
  const [apartment, setApartment] = React.useState('');
  // <------------ client data
  //set adress depends on delivery type
  const [deliveryType, setDeliveryType] = React.useState('За адресою');
  //state of total price
  const [totalPrice, setTotalPrice] = React.useState(0);
  //price change tracking
  React.useEffect(() => {
    //multiplying the cost and amount for each item from the cart => as a result multiple array
    const costAmountArr = localCart.map((item) =>
      item.cost.map((cost, index) => cost * item.sizeAmount[index])
    );
    //multiplying all values => as a result total sum
    setTotalPrice(
      costAmountArr
        .map((item) => item.reduce((sum, elem) => sum + elem, 0))
        .reduce((sum, elem) => sum + elem, 0)
    );
  }, [localCart]);

  //send message to Telegram ------------>
  const messageToTelegram =
    `<b>НОВЕ ЗАМОВЛЕННЯ!</b>\n` +
    `<b>_______________________________</b>\n` +
    localCart.map((obj) => {
      let arr = [];
      for (let isBuy in obj.sizeAmount) {
        if (obj.sizeAmount[isBuy] > 0) {
          arr = [...arr, isBuy];
        }
      }
      return arr.map(
        (item) =>
          `<b>Назва товару: </b>${obj.goodsTitle} \n` +
          `<b>Розмір: </b>${obj.size[item]} <b>x ${obj.sizeAmount[item]}</b> \n` +
          `<b>Ціна: </b>${obj.cost[item]} грн. \n` +
          `\n`
      );
    }) +
    `<b>Загальна сума: </b>${totalPrice} грн.\n` +
    `<b>_______________________________</b>\n` +
    `\n` +
    `<b>Ім'я: </b>${clientName}\n` +
    `<b>Телефон: </b>${phoneNumber}\n` +
    `<b>E-mail: </b>${email}\n` +
    '<b>Доставка: </b>' +
    (deliveryType === 'За адресою'
      ? `вул.${street}, буд.${house}, кв.${apartment}\n`
      : `${deliveryType}\n`);
  // `<b>Спосіб оплати: </b>${paymentType}\n` +
  // (discontCode && `<b>Дисконт: </b>${discontCode}\n`) +
  // (message && `<b>Повідомлення: </b>${message}\n`);

  async function acceptOrder() {
    try {
      await axios.post(URI_API, {
        chat_id: chatId,
        parse_mode: 'html',
        text: messageToTelegram
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
    dispatch(clearCart());
  }
  //<------------ send message to Telegram

  //client data validation
  function isValidData() {
    return (
      !(clientName && phoneNumber) ||
      !(deliveryType === 'Заберу сам' || street || house || apartment)
    );
  }
  //text for accept button depends on client data
  function btnText() {
    if (!clientName) {
      return "Вкажіть ім'я";
    } else if (!phoneNumber) {
      return 'Вкажіть телефон';
    } else if (deliveryType === 'За адресою' && !street && !house && !apartment) {
      return 'Вкажіть адресу';
    } else {
      return 'Замовити';
    }
  }

  //phone number templating ------------>
  function correctPhoneNumber(event, value) {
    let start = event.target.selectionStart;
    let end = event.target.selectionEnd;
    let phonePattern = '+38(___)___-__-__';
    if (value.length >= phoneNumber.length) {
      //checking for add or remove digits
      value
        .match(/[\d]/g)
        .join('')
        .slice(value.length <= 2 ? 0 : 2)
        .split('')
        .forEach((item) => {
          phonePattern = phonePattern.replace(/_/, item);
        });
      setPhoneNumber(phonePattern);
      //set start/end values for input cursor
      if (value.match(/[\d]/g).join('') === phoneNumber.match(/[\d]/g).join('')) {
        --start;
        --end;
      } else {
        //jumping over ) ( -
        if ([3, 7, 11, 14].includes(start)) {
          ++start;
          ++end;
        } else if (start < 3) {
          start = 4 + value.length;
          end = 4 + value.length;
        }
      }
    } else {
      setPhoneNumber(value);
    }
    //set position of input cursor
    setTimeout(() => {
      phoneInput.current.setSelectionRange(start, end);
    }, 0);
  }
  //set template of phone number for input field on focus
  function phoneInputFocus(value) {
    console.log(value);
    if (value.length === 0) {
      setPhoneNumber('+38(___)___-__-__');
      //set position of input cursor
      setTimeout(() => {
        phoneInput.current.setSelectionRange(4, 4);
      }, 0);
    }
  }
  //<------------ phone number templating

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
                  placeholder="+38(xxx)xxx-xx-xx"
                  onChange={(event) => correctPhoneNumber(event, event.target.value)}
                  onFocus={(event) => phoneInputFocus(event.target.value)}
                  value={phoneNumber}
                  ref={phoneInput}
                />
                <input
                  type="email"
                  placeholder="E-mail"
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
                  checked={deliveryType === 'За адресою'}
                  onChange={(event) => setDeliveryType(event.target.value)}
                  label={'За адресою'}
                />
                <input
                  className="selectDelivery"
                  type="radio"
                  name="delivery"
                  value={'Заберу сам'}
                  checked={deliveryType === 'Заберу сам'}
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
                <GoodsItem key={obj.goodsTitle + obj.id} className={'goods__item-cart'} {...obj} />
              ))}
            </div>
            <div className="order__totalPrice">
              <h3>Загальна сума:</h3>
              <h3>{totalPrice} грн.</h3>
            </div>
            <button className="acceptButton" onClick={() => acceptOrder()} disabled={isValidData()}>
              {btnText()}
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

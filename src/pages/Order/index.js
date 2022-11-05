import React from 'react';
import Empty from '../../components/Empty';
import GoodsItem from '../../components/GoodsItem';
import './index.css';

function Order({ localCart, setLocalCart, localFavorites, setLocalFavorites }) {
  return (
    <div className="order">
      <div className="order__title">
        <div></div>
        <h1>КОШИК</h1>
        <div></div>
      </div>
      {localCart.length ? (
        <div className="order__content">
          <div className="order__customerBlock">
            <div className="order__customerContactsBlock m-tb-20">
              <h3>Контакти:</h3>
              <div className="order__customerContacts">
                <input type="text" placeholder="Ім`я" />
                <input type="tel" placeholder="+38(0xx)xxx-xx-xx" />
                <input type="email" placeholder="E-mail (для програми лояльності)" />
              </div>
            </div>
            <div className="order__customerDeliveryBlock m-tb-20">
              <h3>Доставка:</h3>
              <div className="order__customerDelivery">
                <input
                  className="selectDelivery"
                  type="radio"
                  name="delivery"
                  value={'За адресою'}
                  label={'За адресою'}
                  defaultChecked
                />
                <input
                  className="selectDelivery"
                  type="radio"
                  name="delivery"
                  value={'Заберу сам'}
                  label={'Заберу сам'}
                />
              </div>
            </div>
            <div className="order__customerAdressBlock m-tb-20">
              <h3>Адреса:</h3>
              <div className="order__customerAdress">
                <input type="text" placeholder="Вулиця" />
                <input type="tel" placeholder="Будинок" />
                <input type="email" placeholder="Квартира" />
              </div>
            </div>
            {/* <div className="order__pizzaPointAdress m-tb-20">
              <h3>Адреса магазину:</h3>
              <p>м.Київ, вул.Вокзальна 35, тел.+38(066)503-34-00</p>
            </div> */}
          </div>
          <div className="order__goodsBlock">
            {/* <h2>Замовлення:</h2> */}
            <div className="order__goods">
              {localCart.map((obj) => (
                <GoodsItem
                  key={obj.goodsTitle + obj.id}
                  className={'goods__item-cart'}
                  {...obj}
                  setLocalCart={setLocalCart}
                  localFavorites={localFavorites}
                  setLocalFavorites={setLocalFavorites}
                />
              ))}
            </div>
            <div className="order__totalPrice">
              <h3>Загальна сума:</h3>
              <h3>999 uah</h3>
            </div>
            <button className="acceptButton">Замовити</button>
          </div>
        </div>
      ) : (
        <Empty />
      )}
    </div>
  );
}

export default Order;

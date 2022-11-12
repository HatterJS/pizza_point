import React from 'react';
import Empty from '../../components/Empty';
import GoodsItem from '../../components/GoodsItem';
import './index.css';

function Order({ localCart, setLocalCart, localFavorites, setLocalFavorites }) {
  //set adress depends on delivery type
  const [deliveryType, setDeliveryType] = React.useState(0);
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
                  value={0}
                  checked={deliveryType === 0 ? true : false}
                  onChange={(event) => setDeliveryType(Number(event.target.value))}
                  label={'За адресою'}
                />
                <input
                  className="selectDelivery"
                  type="radio"
                  name="delivery"
                  value={1}
                  checked={deliveryType === 1 ? true : false}
                  onChange={(event) => setDeliveryType(Number(event.target.value))}
                  label={'Заберу сам'}
                />
              </div>
            </div>
            <div className="order__customerAdressBlock m-tb-20">
              <h3>Адреса:</h3>
              {deliveryType === 0 ? (
                <div className="order__customerAdress">
                  <input type="text" placeholder="Вулиця" />
                  <input type="tel" placeholder="Будинок" />
                  <input type="email" placeholder="Квартира" />
                </div>
              ) : (
                <div className="order__pizzaPointAdress">
                  м.Київ, вул.Вокзальна 35, тел.+38(066)503-34-00
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

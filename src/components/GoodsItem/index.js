import React from 'react';
import './index.css';
import { heartSVG, deleteSVG } from '../SvgSprite';

function GoodsItem({
  className,
  id,
  image,
  goodsTitle,
  goodsDescription,
  size,
  checkedSize,
  cost,
  localCart,
  setLocalCart,
  setLocalFavorites,
  localFavorites,
}) {
  //checked size of goods
  const [checkSize, setCheckSize] = React.useState(Number(checkedSize) || 0);
  //amount of goods added to cart depends on size
  const [sizeAmount, setSizeAmount] = React.useState([0, 1, 2]);
  //state for counter
  const [counter, setCounter] = React.useState(0);
  //get amount of goods from localstorage
  React.useEffect(() => {
    const currentGoods = JSON.parse(localStorage.getItem('cart')).filter(
      (item) => item.goodsTitle + item.checkedSize === goodsTitle + checkSize,
    );
    setCounter(currentGoods.length ? currentGoods[0].amount : null);
  }, [checkSize, goodsTitle]);
  //set mark of favorite goods
  const [isFavorite, setIsFavorite] = React.useState(
    localFavorites.find((item) => item.goodsTitle === goodsTitle),
  );
  //add/remove from favorite
  function handleFavorite() {
    const favoriteItem = {
      id: id,
      image: image,
      goodsTitle: goodsTitle,
      goodsDescription: goodsDescription,
      size: size,
      cost: cost,
    };
    !isFavorite
      ? setLocalFavorites((prev) => [...prev, favoriteItem])
      : setLocalFavorites(
          JSON.parse(localStorage.getItem('favorites')).filter(
            (item) => item.goodsTitle !== goodsTitle,
          ),
        );
    setIsFavorite(!isFavorite);
  }
  //add to cart
  function handleBuy() {
    const cartItem = {
      id: id,
      image: image,
      goodsTitle: goodsTitle,
      goodsDescription: goodsDescription,
      size: size,
      cost: cost,
      checkedSize: checkSize,
      amount: 1,
    };
    setLocalCart((prev) => [...prev, cartItem]);
    setCounter(1);
  }
  //increase amount of guds at cart (localstorage)
  function handleCounterPlus() {
    setCounter((prev) => prev + 1);
    setLocalCart(
      localCart.map((item) =>
        item.goodsTitle + item.checkedSize === goodsTitle + checkSize
          ? { ...item, amount: item.amount + 1 }
          : item,
      ),
    );
  }
  //decrease amount of guds at cart (localstorage)
  function handleCounterMinus() {
    counter > 1 && setCounter((prev) => --prev);
    counter > 1 &&
      setLocalCart(
        localCart.map((item) =>
          item.goodsTitle + item.checkedSize === goodsTitle + checkSize
            ? { ...item, amount: item.amount - 1 }
            : item,
        ),
      );
  }
  //get actual items from localstorage(cart) then filter and send to App component for set new localstorage
  function deleteFromCart(goodsTitle) {
    setLocalCart(
      JSON.parse(localStorage.getItem('cart')).filter((item) => item.goodsTitle !== goodsTitle),
    );
  }
  //set amount of goods added to cart depends on size
  React.useEffect(() => {
    setSizeAmount(
      size.map((obj) => {
        const filteredGoods = localCart.filter(
          (item) => item.goodsTitle + item.size[item.checkedSize] === goodsTitle + obj,
        );
        if (filteredGoods.length) {
          return filteredGoods[0].amount;
        } else {
          return 0;
        }
      }),
    );
  }, [localCart, goodsTitle, size]);

  return (
    <div className="goods__itemBlock">
      <div className={className + ' unselectable'}>
        <div
          className={
            !localFavorites.find((item) => item.goodsTitle === goodsTitle)
              ? 'goods__favorite'
              : 'goods__favorite-checked'
          }
          onClick={() => handleFavorite()}>
          {heartSVG}
        </div>
        <img src={image} alt="goods" />
        <div className="goodsItem__description">
          <div className="goods__name">
            <h2>{goodsTitle}</h2>
            <p>{goodsDescription}</p>
          </div>
          <div className="goods__size">
            {size.map((obj, index) => (
              <div className="goods__size-wrapper" key={obj}>
                <input
                  type="radio"
                  name={goodsTitle}
                  label={obj}
                  value={index}
                  onClick={(event) => setCheckSize(event.target.value)}
                  defaultChecked={index === checkSize ? true : false}
                />
                {sizeAmount.some((item) => !!item) && (
                  <div className="goods__size-counter">{sizeAmount[index]}</div>
                )}
              </div>
            ))}
          </div>
          <div className="goods__cost unselectable">
            <h3>{cost[checkSize]}</h3>
            {localCart
              .map((item) => item.goodsTitle + item.checkedSize)
              .includes(goodsTitle + checkSize) ? (
              <div className="goods__goodsCounter">
                <div onClick={() => handleCounterMinus()}>-</div>
                <div>{counter}</div>
                <div onClick={() => handleCounterPlus()}>+</div>
              </div>
            ) : (
              <button className="acceptButton" onClick={() => handleBuy()}>
                В кошик
              </button>
            )}
          </div>
        </div>
      </div>
      <div className={className + '-counterBlock unselectable'}>
        <div className="order__goodsDelete" onClick={() => deleteFromCart(goodsTitle)}>
          {deleteSVG}
        </div>
      </div>
    </div>
  );
}

export default GoodsItem;

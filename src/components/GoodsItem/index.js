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
  const [sizeAmount, setSizeAmount] = React.useState(Array(size.length).fill(0));
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
      sizeAmount: sizeAmount,
    };
    ++cartItem.sizeAmount[checkSize];
    localCart.map((item) => item.goodsTitle).includes(goodsTitle)
      ? setLocalCart((prev) =>
          prev.map((item) =>
            item.goodsTitle === goodsTitle
              ? {
                  ...item,
                  sizeAmount: item.sizeAmount.map((item, index) =>
                    index === Number(checkSize) ? ++item : item,
                  ),
                }
              : item,
          ),
        )
      : setLocalCart((prev) => [...prev, cartItem]);
    console.log(cartItem.sizeAmount);
    // setLocalCart(
    //   localCart.map((item) =>
    //     item.goodsTitle + item.checkedSize === goodsTitle + checkSize
    //       ? { ...item, amount: item.amount - 1 }
    //       : item,
    //   ),
    // );
    // setSizeAmount(
    //   size.map((obj) => {
    //     const filteredGoods = localCart.filter(
    //       (item) => item.goodsTitle + item.size[item.checkedSize] === goodsTitle + obj,
    //     );
    //     if (filteredGoods.length) {
    //       return filteredGoods[0].amount;
    //     } else {
    //       return 0;
    //     }
    //   }),
    // );
    setCounter(1);
  }
  //increase amount of guds at cart (localstorage)
  function handleCounterPlus() {
    setCounter((prev) => prev + 1);
    // setLocalCart(
    //   localCart.map((item) =>
    //     item.goodsTitle + item.checkedSize === goodsTitle + checkSize
    //       ? { ...item, amount: item.amount + 1 }
    //       : item,
    //   ),
    // );
    setLocalCart(
      localCart.map((item) =>
        item.goodsTitle === goodsTitle
          ? {
              ...item,
              sizeAmount: item.sizeAmount.map((item, index) =>
                index === Number(checkSize) ? ++item : item,
              ),
            }
          : item,
      ),
    );
    console.log(checkSize);
    console.log(goodsTitle);
    console.log(localCart);
  }
  //decrease amount of guds at cart (localstorage)
  function handleCounterMinus() {
    sizeAmount[checkSize] > 0 && setCounter((prev) => --prev);
    sizeAmount[checkSize] > 0 &&
      // setLocalCart(
      //   localCart.map((item) =>
      //     item.goodsTitle + item.checkedSize === goodsTitle + checkSize
      //       ? { ...item, amount: item.amount - 1 }
      //       : item,
      //   ),
      // );
      setLocalCart(
        localCart.map((item) =>
          item.goodsTitle === goodsTitle
            ? {
                ...item,
                sizeAmount: item.sizeAmount.map((item, index) =>
                  index === Number(checkSize) ? --item : item,
                ),
              }
            : item,
        ),
      );
    // localCart.forEach(
    //   (item) => item.sizeAmount.every((elem) => elem === 0) && deleteFromCart(item.goodsTitle),
    // );
  }
  //get actual items from localstorage(cart) then filter and send to App component for set new localstorage
  function deleteFromCart(goodsTitle) {
    setLocalCart(
      JSON.parse(localStorage.getItem('cart')).filter((item) => item.goodsTitle !== goodsTitle),
    );
  }
  //set amount of goods added to cart depends on size
  React.useEffect(() => {
    // setSizeAmount(
    //   size.map((obj) => {
    //     const filteredGoods = localCart.filter(
    //       (item) => item.goodsTitle + item.size[item.checkedSize] === goodsTitle + obj,
    //     );
    //     if (filteredGoods.length) {
    //       return filteredGoods[0].amount;
    //     } else {
    //       return 0;
    //     }
    //   }),
    // );
    const goodsAmount = localCart.map((item) => item.goodsTitle === goodsTitle && item.sizeAmount);
    // console.log(goodsAmount);
    goodsAmount.forEach((item) => item && setSizeAmount(item));
  }, [localCart, goodsTitle]);
  // console.log(sizeAmount);

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
            {localCart.map((item) => item.goodsTitle).includes(goodsTitle) &&
            sizeAmount.some((item) => !!item) ? (
              <div className="goods__goodsCounter">
                <div onClick={() => handleCounterMinus()}>-</div>
                <div>{sizeAmount[checkSize]}</div>
                <div onClick={() => handleCounterPlus()}>+</div>
              </div>
            ) : localCart.map((item) => item.goodsTitle).includes(goodsTitle) ? (
              <button
                style={{ backgroundColor: 'rgb(255, 200, 200)' }}
                className="acceptButton"
                onClick={() => deleteFromCart(goodsTitle)}>
                Видалити
              </button>
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

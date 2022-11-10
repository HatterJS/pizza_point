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
  cost,
  localCart,
  setLocalCart,
  localFavorites,
  setLocalFavorites,
}) {
  //state for checking selected size of goods
  const [selectedSize, setSelectedSize] = React.useState(0);
  //amount of goods added to cart dependsing on the size
  const [sizeAmount, setSizeAmount] = React.useState(Array(size.length).fill(0));
  //set mark of favorite goods
  const [isFavorite, setIsFavorite] = React.useState(
    localFavorites.find((item) => item.goodsTitle === goodsTitle),
  );
  //base model of goods for adding to cart/favorite
  const addedItem = {
    id: id,
    image: image,
    goodsTitle: goodsTitle,
    goodsDescription: goodsDescription,
    size: size,
    cost: cost,
    sizeAmount: sizeAmount,
  };
  //add/remove from favorite
  function handleFavorite() {
    !isFavorite
      ? setLocalFavorites((prev) => [...prev, addedItem])
      : setLocalFavorites(
          JSON.parse(localStorage.getItem('favorites')).filter(
            (item) => item.goodsTitle !== goodsTitle,
          ),
        );
    setIsFavorite(!isFavorite);
  }
  //add goods to cart (localStorage)
  function handleBuy() {
    ++addedItem.sizeAmount[selectedSize];
    localCart.map((item) => item.goodsTitle).includes(goodsTitle)
      ? setLocalCart((prev) =>
          prev.map((item) =>
            item.goodsTitle === goodsTitle
              ? {
                  ...item,
                  sizeAmount: item.sizeAmount.map((item, index) =>
                    index === Number(selectedSize) ? ++item : item,
                  ),
                }
              : item,
          ),
        )
      : setLocalCart((prev) => [...prev, addedItem]);
  }
  //increase amount of guds at cart (localStorage)
  function handleCounterPlus() {
    setLocalCart(
      localCart.map((item) =>
        item.goodsTitle === goodsTitle
          ? {
              ...item,
              sizeAmount: item.sizeAmount.map((item, index) =>
                index === selectedSize ? ++item : item,
              ),
            }
          : item,
      ),
    );
  }
  //decrease amount of guds at cart (localStorage)
  function handleCounterMinus() {
    sizeAmount[selectedSize] > 0 &&
      setLocalCart(
        localCart.map((item) =>
          item.goodsTitle === goodsTitle
            ? {
                ...item,
                sizeAmount: item.sizeAmount.map((item, index) =>
                  index === selectedSize ? --item : item,
                ),
              }
            : item,
        ),
      );
  }
  //get actual items from cart (localStorage) then filter and send to App component for set new localStorage
  function deleteFromCart() {
    setLocalCart(
      JSON.parse(localStorage.getItem('cart')).filter((item) => item.goodsTitle !== goodsTitle),
    );
  }
  //set amount of goods added to cart depends on size
  React.useEffect(() => {
    const goodsAmount = localCart.map((item) =>
      item.goodsTitle === goodsTitle ? item.sizeAmount : null,
    );
    goodsAmount.forEach((item) => item && setSizeAmount(item));
  }, [localCart, goodsTitle]);

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
                  onClick={(event) => setSelectedSize(Number(event.target.value))}
                  defaultChecked={index === selectedSize ? true : false}
                />
                {sizeAmount.some((item) => !!item) && (
                  <div className="goods__size-counter">{sizeAmount[index]}</div>
                )}
              </div>
            ))}
          </div>
          <div className="goods__cost unselectable">
            <h3>{cost[selectedSize]} грн.</h3>
            {localCart.map((item) => item.goodsTitle).includes(goodsTitle) &&
            sizeAmount.some((item) => !!item) ? (
              <div className="goods__goodsCounter">
                <div onClick={() => handleCounterMinus()}>-</div>
                <div>{sizeAmount[selectedSize]}</div>
                <div onClick={() => handleCounterPlus()}>+</div>
              </div>
            ) : localCart.map((item) => item.goodsTitle).includes(goodsTitle) ? (
              <button
                style={{ backgroundColor: 'rgb(255, 200, 200)' }}
                className="acceptButton"
                onClick={() => deleteFromCart()}>
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
        <div className="order__goodsDelete" onClick={() => deleteFromCart()}>
          {deleteSVG}
        </div>
      </div>
    </div>
  );
}

export default GoodsItem;

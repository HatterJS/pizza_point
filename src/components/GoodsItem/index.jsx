import React from 'react';
import './index.css';
import { heartSVG, deleteSVG } from '../SvgSprite';
import { useDispatch, useSelector } from 'react-redux';

import {
  addToCart,
  deleteFromCart,
  increaseAmount,
  decreaseAmount
} from '../../redux/slices/localCartSlice';
import { addToFavorites, deleteFromFavorites } from '../../redux/slices/localFavoritesSlice';

function GoodsItem({ className, id, image, goodsTitle, goodsDescription, size, cost }) {
  //connect dispatch for redux
  const dispatch = useDispatch();
  //get local cart items from redux
  const { localCart } = useSelector((state) => state.localCart);
  //get local favorites from redux
  const { localFavorites } = useSelector((state) => state.localFavorites);
  //checking selected size of goods (default is max amount by cart)
  const [selectedSize, setSelectedSize] = React.useState(
    localCart.filter((item) => item.goodsTitle === goodsTitle).length
      ? localCart
          .filter((item) => item.goodsTitle === goodsTitle)[0]
          .sizeAmount.indexOf(
            Math.max(...localCart.filter((item) => item.goodsTitle === goodsTitle)[0].sizeAmount)
          )
      : 0
  );
  //amount of goods added to cart dependsing on the size
  const [sizeAmount, setSizeAmount] = React.useState(Array(size.length).fill(0));
  //set mark of favorite goods
  const [isFavorite, setIsFavorite] = React.useState(
    localFavorites.find((item) => item.goodsTitle === goodsTitle)
  );
  //base model of goods for adding to cart/favorite
  const addedItem = {
    id: id,
    image: image,
    goodsTitle: goodsTitle,
    goodsDescription: goodsDescription,
    size: size,
    cost: cost,
    sizeAmount: sizeAmount
  };
  //add/remove from favorite
  function handleFavorite() {
    dispatch(isFavorite ? deleteFromFavorites(addedItem) : addToFavorites(addedItem));
    setIsFavorite(!isFavorite);
  }
  //add goods to cart (localStorage)
  function handleBuy() {
    dispatch(addToCart({ addedItem, selectedSize }));
  }
  //delete goods from cart (localStorage)
  function handleRemove() {
    dispatch(deleteFromCart(goodsTitle));
  }
  //increase amount of guds at cart (localStorage)
  function handleCounterPlus() {
    dispatch(increaseAmount({ goodsTitle, selectedSize }));
  }
  //decrease amount of guds at cart (localStorage)
  function handleCounterMinus() {
    sizeAmount[selectedSize] > 0 && dispatch(decreaseAmount({ goodsTitle, selectedSize }));
  }
  //set amount of goods added to cart depends on size
  React.useEffect(() => {
    const goodsAmount = localCart.map((item) =>
      item.goodsTitle === goodsTitle ? item.sizeAmount : null
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
                  defaultChecked={index === selectedSize}
                />
                {sizeAmount.some((item) => !!item) && (
                  <div className="goods__size-counter">{sizeAmount[index]}</div>
                )}
              </div>
            ))}
          </div>
          <div className="goods__cost unselectable">
            <h3>{cost[selectedSize]} ??????.</h3>
            {localCart.map((item) => item.goodsTitle).includes(goodsTitle) ? (
              <div className="goods__goodsCounter">
                {sizeAmount.some((item) => !!item) ? (
                  <div onClick={() => handleCounterMinus()}>-</div>
                ) : (
                  <div
                    onClick={() => handleRemove()}
                    style={{ backgroundColor: 'rgb(255, 200, 200)' }}>
                    x
                  </div>
                )}
                <div>{sizeAmount[selectedSize]}</div>
                <div onClick={() => handleCounterPlus()}>+</div>
              </div>
            ) : (
              <button className="acceptButton" onClick={() => handleBuy()}>
                ?? ??????????
              </button>
            )}
          </div>
        </div>
      </div>
      <div className={className + '-counterBlock unselectable'}>
        <div className="order__goodsDelete" onClick={() => handleRemove()}>
          {deleteSVG}
        </div>
      </div>
    </div>
  );
}

export default GoodsItem;

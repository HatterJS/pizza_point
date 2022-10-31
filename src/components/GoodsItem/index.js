import React from 'react';
import './index.css';

const favoriteSVG = (
  <svg width="40" height="40" viewBox="0 0 50 50" fill="none">
    <path
      d="M24.6636 38.495L24.9999 38.8007L25.3363 38.495C26.4679 37.4662 27.8426 36.3667 29.2944 35.2079L29.3688 35.1486C30.793 34.0119 32.2844 32.8215 33.6597 31.6058C35.058 30.3697 36.3519 29.0938 37.3441 27.8031C38.3333 26.5164 39.0509 25.1789 39.2449 23.8207C39.5731 21.5233 39.0843 19.2096 37.916 17.457C36.7409 15.6944 34.8742 14.5 32.4999 14.5C30.141 14.5 28.5598 15.5218 27.3728 16.764C26.7864 17.3778 26.2935 18.0476 25.8528 18.6646C25.7925 18.7491 25.7333 18.8323 25.6751 18.9141C25.4375 19.2481 25.2167 19.5586 24.9999 19.8389C24.7832 19.5586 24.5624 19.2482 24.3248 18.9142C24.2666 18.8324 24.2074 18.7491 24.147 18.6646C23.7063 18.0476 23.2135 17.3778 22.6271 16.7641C21.4401 15.5219 19.8589 14.5001 17.4999 14.5001C15.1257 14.5001 13.259 15.6945 12.0839 17.4572C10.9155 19.2097 10.4268 21.5235 10.755 23.8208C10.949 25.1791 11.6666 26.5165 12.6557 27.8032C13.648 29.0939 14.9419 30.3697 16.3402 31.6058C17.7154 32.8216 19.2068 34.0119 20.6309 35.1485L20.7054 35.208C22.1572 36.3667 23.5319 37.4662 24.6636 38.495Z"
      stroke="#404040"
      strokeOpacity="0.6"
    />
  </svg>
);

function GoodsItem({
  className,
  id,
  image,
  goodsTitle,
  goodsDescription,
  size,
  cost,
  setLocalFavorites,
  favorites,
}) {
  const [isFavorite, setIsFavorite] = React.useState(
    favorites.find((item) => item.goodsTitle === goodsTitle),
  );
  const [checkSize, setCheckSize] = React.useState(1);

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

  return (
    <div className={className + ' unselectable'}>
      <div
        className={
          !favorites.find((item) => item.goodsTitle === goodsTitle)
            ? 'goods__favorite'
            : 'goods__favorite-checked'
        }
        onClick={() => handleFavorite()}>
        {favoriteSVG}
      </div>
      <img src={image} alt="goods" />
      <div className="goodsItem__description">
        <div className="goods__name">
          <h2>{goodsTitle}</h2>
          <p>{goodsDescription}</p>
        </div>
        <div className="goods__size">
          {size.map((obj, index) => (
            <input
              key={obj}
              type="radio"
              name={goodsTitle}
              label={obj}
              value={index}
              onClick={(event) => setCheckSize(event.target.value)}
              defaultChecked={index === checkSize ? true : false}
            />
          ))}
        </div>
        <div className="goods__cost unselectable">
          <h3>{cost[checkSize]}</h3>
          <button className="acceptButton" onClick={() => console.log(goodsTitle, size[checkSize])}>
            В кошик
          </button>
        </div>
      </div>
    </div>
  );
}

export default GoodsItem;

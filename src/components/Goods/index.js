import React from 'react';
import GoodsItem from '../GoodsItem';
import Loader from '../Loader';
import './index.css';

function Goods({
  isLoadingFirst,
  goodsData,
  goodsCategory,
  setLocalFavorites,
  setLocalCart,
  localFavorites,
  searchValue,
}) {
  return (
    <div className="goods">
      <div className="goods__title">
        <div></div>
        <h1>Піцца</h1>
        <div></div>
      </div>
      <div className="goods__itemBlock">
        {isLoadingFirst
          ? goodsData.current[goodsCategory]
              .filter((item) => item.goodsTitle.toLowerCase().includes(searchValue.toLowerCase()))
              .map((obj) => (
                <GoodsItem
                  key={obj.goodsTitle + obj.id}
                  className={'goods__item'}
                  {...obj}
                  setLocalCart={setLocalCart}
                  setLocalFavorites={setLocalFavorites}
                  localFavorites={localFavorites}
                />
              ))
          : [...new Array(8)].map((_, index) => <Loader key={index} className={'goods__item'} />)}
      </div>
      <div className="goods__pages">
        <input type="radio" name="page" label="1" defaultChecked />
        <input type="radio" name="page" label="2" />
        <input type="radio" name="page" label="3" />
        <input type="radio" name="page" label="4" />
      </div>
    </div>
  );
}

export default Goods;

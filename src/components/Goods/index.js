import React from 'react';
import GoodsItem from '../GoodsItem';
import Loader from '../Loader';
import './index.css';

function Goods({ isLoading, goodsData, setLocalFavorites, favorites }) {
  return (
    <div className="goods">
      <div className="goods__tittle">
        <div></div>
        <h1>Піцца</h1>
        <div></div>
      </div>
      <div className="goods__itemBlock">
        {isLoading
          ? goodsData.map((obj) => (
              <GoodsItem
                key={obj.goodsTitle + obj.id}
                className={'goods__item'}
                {...obj}
                setLocalFavorites={setLocalFavorites}
                favorites={favorites}
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

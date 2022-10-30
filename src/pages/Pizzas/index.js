import React from 'react';
import GoodsItem from '../../components/GoodsItem';

function Pizzas({ pizzasData, setLocalFavorites, favorites }) {
  return (
    <div className="goods">
      <div className="goods__tittle">
        <div></div>
        <h1>Піцца</h1>
        <div></div>
      </div>
      <div className="goods__itemBlock">
        {pizzasData.map((obj) => (
          <GoodsItem
            key={obj.id}
            className={'goods__item'}
            {...obj}
            setLocalFavorites={setLocalFavorites}
            favorites={favorites}
          />
        ))}
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

export default Pizzas;

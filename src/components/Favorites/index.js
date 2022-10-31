import './index.css';
import GoodsItem from '../GoodsItem';

function Favorites(props) {
  return (
    <div className="favorites">
      <div className="favorites__shadow" onClick={() => props.setShowFavorite(false)}></div>
      <div className="favorites__block">
        <div className="favorites__title">
          <h2>УЛЮБЛЕНІ</h2>
        </div>
        <div className="favorites__goods">
          {props.localFavorites.map((obj) => (
            <GoodsItem
              className="goods__item-added"
              key={obj.goodsTitle + obj.id}
              {...obj}
              setLocalFavorites={props.setLocalFavorites}
              favorites={props.favorites}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Favorites;

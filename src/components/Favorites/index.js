import Empty from '../Empty';
import GoodsItem from '../GoodsItem';
import './index.css';

function Favorites({ setShowFavorite, localFavorites, setLocalFavorites, favorites }) {
  return (
    <div className="favorites unselectable">
      <div className="favorites__shadow" onClick={() => setShowFavorite(false)}></div>
      <div className="favorites__block">
        <div className="favorites__title">
          <h2>УЛЮБЛЕНІ</h2>
        </div>
        <div className="favorites__goods">
          {localFavorites.length ? (
            localFavorites.map((obj) => (
              <GoodsItem
                className="goods__item-added"
                key={obj.goodsTitle + obj.id}
                {...obj}
                setLocalFavorites={setLocalFavorites}
                favorites={favorites}
              />
            ))
          ) : (
            <Empty setShowFavorite={() => setShowFavorite(false)} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Favorites;

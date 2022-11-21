import Empty from '../Empty';
import GoodsItem from '../GoodsItem';
import './index.css';
import { closeFavoriteSVG } from '../SvgSprite';

function Favorites({
  localCart,
  setLocalCart,
  setShowFavorite,
  localFavorites,
  setLocalFavorites
}) {
  return (
    <div className="favorites unselectable">
      <div className="favorites__shadow" onClick={() => setShowFavorite(false)}></div>
      <div className="favorites__block">
        <div className="favorites__title">
          <h2>УЛЮБЛЕНІ</h2>
          <div onClick={() => setShowFavorite(false)}>{closeFavoriteSVG}</div>
        </div>
        <div className="favorites__goods">
          {localFavorites.length ? (
            localFavorites.map((obj) => (
              <GoodsItem
                className="goods__item-favorite"
                key={obj.goodsTitle + obj.id}
                {...obj}
                localCart={localCart}
                setLocalCart={setLocalCart}
                setLocalFavorites={setLocalFavorites}
                localFavorites={localFavorites}
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

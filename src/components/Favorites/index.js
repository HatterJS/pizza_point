import Empty from '../Empty';
import GoodsItem from '../GoodsItem';
import './index.css';

const favoriteSVG = (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <rect width="40" height="40" rx="10" fill="none" fillOpacity="0.25" />
    <rect x="0.5" y="0.5" width="39" height="39" rx="10" stroke="black" strokeOpacity="0.3" />
    <path
      d="M23.2504 26.0279L24.3111 27.0885L26.4324 24.9672L25.3717 23.9065L22.6735 21.2083L25.9336 17.9482L26.9942 16.8875L24.8729 14.7662L23.8123 15.8269L20.5522 19.087L17.5936 16.1284L16.5329 15.0677L14.4116 17.189L15.4723 18.2497L18.4308 21.2083L15.327 24.3121L14.2663 25.3728L16.3876 27.4941L17.4483 26.4335L20.5522 23.3296L23.2504 26.0279Z"
      fill="black"
      fillOpacity="0.3"
    />
  </svg>
);

function Favorites({ setLocalCart, setShowFavorite, localFavorites, setLocalFavorites }) {
  return (
    <div className="favorites unselectable">
      <div className="favorites__shadow" onClick={() => setShowFavorite(false)}></div>
      <div className="favorites__block">
        <div className="favorites__title">
          <h2>УЛЮБЛЕНІ</h2>
          <div onClick={() => setShowFavorite(false)}>{favoriteSVG}</div>
        </div>
        <div className="favorites__goods">
          {localFavorites.length ? (
            localFavorites.map((obj) => (
              <GoodsItem
                className="goods__item-favorite"
                key={obj.goodsTitle + obj.id}
                {...obj}
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

import Empty from '../Empty';
import GoodsItem from '../GoodsItem';
import { useDispatch, useSelector } from 'react-redux';
import { showFavorite } from '../../redux/slices/localFavoritesSlice';
import './index.css';
import { closeFavoriteSVG } from '../SvgSprite';

function Favorites() {
  //connect dispatch for redux
  const dispatch = useDispatch();
  //get local favorites from redux
  const { localFavorites, isShowFavorites } = useSelector((state) => state.localFavorites);

  console.log('favorites');
  return (
    <div
      className="favorites unselectable"
      style={!isShowFavorites ? { display: 'none' } : { display: 'block' }}>
      <div className="favorites__shadow" onClick={() => dispatch(showFavorite())}></div>
      <div className="favorites__block">
        <div className="favorites__title">
          <h2>УЛЮБЛЕНІ</h2>
          <div onClick={() => dispatch(showFavorite())}>{closeFavoriteSVG}</div>
        </div>
        <div className="favorites__goods">
          {localFavorites.length ? (
            localFavorites.map((obj) => (
              <GoodsItem className="goods__item-favorite" key={obj.goodsTitle + obj.id} {...obj} />
            ))
          ) : (
            <Empty showFavorite={() => dispatch(showFavorite())} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Favorites;

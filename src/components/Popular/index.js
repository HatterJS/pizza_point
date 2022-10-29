import './index.css';
import GoodsItem from '../GoodsItem';

function Popular() {
  return (
    <div className="popular">
      <div className="popular__tittle">
        <div></div>
        <h2>Популярні</h2>
        <div></div>
      </div>
      <div className="popular__goods">
        <GoodsItem className="goods__item" />
        <GoodsItem className="goods__item" />
        <GoodsItem className="goods__item" />
        <GoodsItem className="goods__item" />
      </div>
    </div>
  );
}

export default Popular;

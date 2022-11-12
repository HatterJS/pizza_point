import React from 'react';
import GoodsItem from '../GoodsItem';
import Loader from '../Loader';
import './index.css';

function Goods({
  isLoadingFirst,
  goodsData,
  goodsCategory,
  setLocalFavorites,
  localCart,
  setLocalCart,
  localFavorites,
  searchValue,
}) {
  //goods pagination
  const [pagination, setPagination] = React.useState(0);
  const paginationIndex = 8;
  //set page checked
  const [pageChecked, setPageChecked] = React.useState(0);
  //set page when category changed
  React.useEffect(() => {
    changePage(0);
  }, [goodsCategory]);
  //change page
  function changePage(index) {
    setPagination(index * paginationIndex);
    setPageChecked(index);
  }
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
              .slice(pagination, pagination + paginationIndex)
              .filter((item) => item.goodsTitle.toLowerCase().includes(searchValue.toLowerCase()))
              .map((obj) => (
                <GoodsItem
                  key={obj.goodsTitle + obj.id}
                  className={'goods__item'}
                  {...obj}
                  localCart={localCart}
                  setLocalCart={setLocalCart}
                  setLocalFavorites={setLocalFavorites}
                  localFavorites={localFavorites}
                />
              ))
          : [...new Array(paginationIndex)].map((_, index) => (
              <Loader key={index} className={'goods__item'} />
            ))}
      </div>
      <div className="goods__pages">
        {isLoadingFirst &&
          Array(Math.ceil(goodsData.current[goodsCategory].length / 8))
            .fill(0)
            .map((item, index) => (
              <input
                key={index}
                type="radio"
                name="page"
                label={index + 1}
                checked={index === pageChecked ? true : false}
                onChange={() => changePage(index)}
              />
            ))}
      </div>
    </div>
  );
}

export default Goods;

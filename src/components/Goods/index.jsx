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
  sortingType
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
  //sorting goods depends on sorting type
  function sortByType(a, b) {
    if (sortingType === 'rating') {
      return b[sortingType] - a[sortingType];
    } else if (sortingType === 'cost') {
      return a[sortingType][0] - b[sortingType][0];
    } else if (sortingType === 'goodsTitle') {
      return a[sortingType] >= b[sortingType] ? 1 : -1;
    }
  }
  const categories = {
    pizzas: 'Піца',
    drinks: 'Напої',
    desserts: 'Десерти',
    additionals: 'Доповнення'
  };

  return (
    <div className="goods">
      <div className="goods__title">
        <div></div>
        <h1>{categories[goodsCategory]}</h1>
        <div></div>
      </div>
      <div className="goods__itemBlock">
        {isLoadingFirst
          ? goodsData.current[goodsCategory]
              .sort((a, b) => sortByType(a, b))
              .filter((item) => item.goodsTitle.toLowerCase().includes(searchValue.toLowerCase()))
              .slice(pagination, pagination + paginationIndex)
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
                checked={index === pageChecked}
                onChange={() => changePage(index)}
              />
            ))}
      </div>
    </div>
  );
}

export default Goods;

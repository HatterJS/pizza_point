import React from 'react';
import GoodsItem from '../GoodsItem';
import Loader from '../Loader';
import { useSelector } from 'react-redux';
import './index.css';

const categories = {
  pizzas: 'Піца',
  drinks: 'Напої',
  desserts: 'Десерти',
  additionals: 'Доповнення'
};

function Goods({ isLoadingFirst, goodsData }) {
  //goods pagination
  const [pagination, setPagination] = React.useState(0);
  //set amount of elements on a page
  const paginationIndex = 8;
  //set page checked
  const [pageChecked, setPageChecked] = React.useState(0);
  //get goods category, sorting and search value type from redux store
  const { goodsCategory, sortingType, searchValue } = useSelector((state) => state.goodsFilter);
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
                <GoodsItem key={obj.goodsTitle + obj.id} className={'goods__item'} {...obj} />
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

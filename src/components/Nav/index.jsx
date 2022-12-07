import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setGoodsCategory,
  setSortingType,
  setSearchValue
} from '../../redux/slices/goodsFilterSlice';

import './index.css';

import pizzaImg from '../../assets/img/nav/pizza.png';
import drinkImg from '../../assets/img/nav/drink.png';
import cakeImg from '../../assets/img/nav/cake.png';
import additionalImg from '../../assets/img/nav/additional.png';
import { menuSvg } from '../SvgSprite';

const categories = [
  { title: 'Піца', image: pizzaImg, link: 'pizzas' },
  { title: 'Напої', image: drinkImg, link: 'drinks' },
  { title: 'Десерти', image: cakeImg, link: 'desserts' },
  { title: 'Доповнення', image: additionalImg, link: 'additionals' }
];

function Nav({ isLoadingGlobal }) {
  //get goods category and search value from redux store
  const { goodsCategory, searchValue } = useSelector((state) => state.goodsFilter);
  //connect dispatch for redux
  const dispatch = useDispatch();

  return (
    <nav className="nav__bar">
      <div className="cover">
        <ul
          className={`${
            isLoadingGlobal ? 'nav__category' : 'nav__category-disabled'
          } unselectable`}>
          {categories.map((obj) => (
            <li
              className={obj.link === goodsCategory ? 'nav__category-selected' : ''}
              onClick={isLoadingGlobal ? () => dispatch(setGoodsCategory(obj.link)) : null}
              key={obj.title}>
              <img src={obj.image} alt="icon" />
              <h3>{obj.title}</h3>
            </li>
          ))}
        </ul>
        <input
          type="search"
          placeholder="пошук"
          value={searchValue}
          onChange={(event) => dispatch(setSearchValue(event.target.value))}
        />
        <div className="nav_sort unselectable">
          {menuSvg}
          <h3>Сортувати</h3>
          <ul>
            <li onClick={() => dispatch(setSortingType('rating'))}>популярні</li>
            <li onClick={() => dispatch(setSortingType('cost'))}>ціна</li>
            <li onClick={() => dispatch(setSortingType('goodsTitle'))}>назва</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

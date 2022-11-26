import React from 'react';
import { SearchContext } from '../../pages/Home';

import './index.css';

import pizzaImg from '../../assets/img/nav/pizza.png';
import drinkImg from '../../assets/img/nav/drink.png';
import cakeImg from '../../assets/img/nav/cake.png';
import additionalImg from '../../assets/img/nav/additional.png';
import { menuSvg } from '../SvgSprite';

function Nav({ isLoadingGlobal, goodsCategory, setGoodsCategory, setSortingType }) {
  const categories = [
    { title: 'Піца', image: pizzaImg, link: 'pizzas' },
    { title: 'Напої', image: drinkImg, link: 'drinks' },
    { title: 'Десерти', image: cakeImg, link: 'desserts' },
    { title: 'Доповнення', image: additionalImg, link: 'additionals' }
  ];
  //get searchValue and setSearchValue from SearchContext
  const { searchValue, setSearchValue } = React.useContext(SearchContext);

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
              onClick={isLoadingGlobal ? () => setGoodsCategory(obj.link) : null}
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
          onChange={(event) => setSearchValue(event.target.value)}
        />
        <div className="nav_sort unselectable">
          {menuSvg}
          <h3>Сортувати</h3>
          <ul>
            <li onClick={() => setSortingType('rating')}>популярні</li>
            <li onClick={() => setSortingType('cost')}>ціна</li>
            <li onClick={() => setSortingType('goodsTitle')}>назва</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

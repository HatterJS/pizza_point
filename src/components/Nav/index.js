import React from 'react';
import './index.css';

import pizzaImg from '../../assets/img/nav/pizza.png';
import drinkImg from '../../assets/img/nav/drink.png';
import cakeImg from '../../assets/img/nav/cake.png';
import additionalImg from '../../assets/img/nav/additional.png';
// import discountImg from '../../assets/img/nav/discount.png';
import { menuSvg } from '../SvgSprite';

function Nav({ isLoadingGlobal, goodsCategory, setGoodsCategory, searchValue, setSearchValue }) {
  const categories = [
    { title: 'Піцца', image: pizzaImg, link: 'pizzas' },
    { title: 'Напої', image: drinkImg, link: 'drinks' },
    { title: 'Десерти', image: cakeImg, link: 'desserts' },
    { title: 'Доповнення', image: additionalImg, link: 'additionals' },
    // { title: 'Акції', image: discountImg, link: 'discounts' },
  ];

  return (
    <nav>
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
        <div className="nav_sort">
          {menuSvg}
          <h3>Сортувати</h3>
          <ul>
            <li>популярні</li>
            <li>ціна</li>
            <li>назва</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

import React from 'react';
import './index.css';

import pizzaImg from '../../assets/img/nav/pizza.png';
import drinkImg from '../../assets/img/nav/drink.png';
import cakeImg from '../../assets/img/nav/cake.png';
import additionalImg from '../../assets/img/nav/additional.png';
import discountImg from '../../assets/img/nav/discount.png';

const menuSVG = (
  <svg width="29" height="29" viewBox="0 0 29 29" fill="none">
    <circle cx="14.5" cy="14.5" r="13.5" stroke="white" strokeWidth="2" />
    <line
      x1="7.5"
      y1="19.5"
      x2="21.5"
      y2="19.5"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <line
      x1="7.5"
      y1="14.5"
      x2="21.5"
      y2="14.5"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <line
      x1="7.5"
      y1="9.5"
      x2="21.5"
      y2="9.5"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

function Nav({ goodsCategory, setGoodsCategory }) {
  const categories = [
    { title: 'Піцца', image: pizzaImg, link: 'pizzas' },
    { title: 'Напої', image: drinkImg, link: 'drinks' },
    { title: 'Десерти', image: cakeImg, link: 'desserts' },
    { title: 'Доповнення', image: additionalImg, link: 'additionals' },
    { title: 'Акції', image: discountImg, link: 'discounts' },
  ];

  return (
    <nav>
      <div className="cover">
        <ul className="nav__category unselectable">
          {categories.map((obj) => (
            <li
              className={obj.link === goodsCategory ? 'nav__category-selected' : ''}
              onClick={() => setGoodsCategory(obj.link)}
              key={obj.title}>
              <img src={obj.image} alt="icon" />
              <h3>{obj.title}</h3>
            </li>
          ))}
        </ul>
        <input type="search" placeholder="пошук" />
        <div className="nav_sort">
          {menuSVG}
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

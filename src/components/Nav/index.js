import React from 'react';
import './index.css';

import pizzaImg from '../../assets/img/nav/pizza.png';
import drinkImg from '../../assets/img/nav/drink.png';
import cakeImg from '../../assets/img/nav/cake.png';
import additionalImg from '../../assets/img/nav/additional.png';
import discountImg from '../../assets/img/nav/discount.png';

function Nav() {
  const categories = [
    { title: 'Піцца', image: pizzaImg },
    { title: 'Напої', image: drinkImg },
    { title: 'Десерти', image: cakeImg },
    { title: 'Доповнення', image: additionalImg },
    { title: 'Акції', image: discountImg },
  ];

  const [categorySelected, setCategorySelected] = React.useState('Піцца');

  function selectCategory(category) {
    setCategorySelected(category);
  }

  return (
    <nav>
      <div className="cover">
        <ul className="nav__category unselectable">
          {categories.map((obj) => (
            <li
              className={obj.title === categorySelected ? 'nav__category-selected' : ''}
              onClick={() => selectCategory(obj.title)}
              key={obj.title}>
              <img src={obj.image} alt="icon" />
              <h3>{obj.title}</h3>
            </li>
          ))}
        </ul>
        <input type="search" placeholder="пошук" />
        <div className="nav_sort">
          Сортувати
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

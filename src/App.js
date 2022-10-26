import './css/App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div className="cover">
          <div className="header">
            <div className="header__social">
              <p>Приєднуйтесь</p>
              <img src="/img/social/instagram.svg" alt="instagram" />
              <img src="/img/social/telegram.svg" alt="telegramm" />
            </div>
            <div className="header__about">
              <ul>
                <li>Про нас</li>
                <li>Доставка</li>
                <li>Вакансії</li>
              </ul>
            </div>
            <div className="header__account">
              <p></p>
              <img src="/img/userAvatar.png" alt="user" />
            </div>
          </div>
        </div>
      </header>
      <div className="information">
        <div className="information__logo">
          <img src="/img/logo.png" alt="" />
        </div>
        <div className="information__contacts">
          <div className="information__phones">
            <img src="/img/phones_img.png" alt="phone" />
            <ul>
              <li>+38(066)503-34-00</li>
              <li>+38(067)777-34-00</li>
            </ul>
          </div>
          <div className="information__workTime">
            <img src="/img/time_img.png" alt="time" />
            <ul>
              <li>ПН-ПТ: 09:00 - 18:00</li>
              <li>СБ-ВС: 10:00 - 16:00</li>
            </ul>
          </div>
        </div>
        <div className="information__goodsChoice">
          <div className="information__favorite">
            <img src="/img/favorite.svg" alt="favorite" />
            <div className="information__counter">
              <p>0</p>
            </div>
          </div>
          <div className="information__cart">
            <img src="/img/cart.png" alt="cart" />
            <div className="information__counter">
              <p>0</p>
            </div>
          </div>
        </div>
      </div>
      <nav>
        <div className="cover">
          {/* <div className="category__pizza"></div>
              <div className="category__drink"></div>
              <div className="category__additional"></div>
              <div className="category__dessert"></div>
              <div className="category__discounts"></div> */}
          <ul className="nav__category">
            <li>
              <img src="/img/nav/pizza.png" alt="icon" />
              <p>Піцца</p>
            </li>
            <li>
              <img src="/img/nav/drink.png" alt="icon" />
              <p>Напої</p>
            </li>
            <li>
              <img src="/img/nav/cake.png" alt="icon" />
              <p>Десерти</p>
            </li>
            <li>
              <img src="/img/nav/additional.png" alt="icon" />
              <p>Доповнення</p>
            </li>
            <li>
              <img src="/img/nav/Union.png" alt="icon" />
              <p>Акції</p>
            </li>
          </ul>
          <div className="nav__search">
            <img src="/img/lens.svg" alt="lens" />
            <input type="text" placeholder="Пошук" />
          </div>
          <ul className="nav_sort">
            <li>Популярні</li>
            <li>Ціна</li>
            <li>Назва</li>
          </ul>
        </div>
      </nav>
      <div className="banner"></div>
      <div className="goods">
        <div className="goods__tittle">
          <div></div>
          <h1>Піцца</h1>
          <div></div>
        </div>
        <div className="goods__itemBlock">
          <div className="goods__item">
            <img src="" alt="goods" />
            <div className="goods__name">
              <h4>Пепероні</h4>
              <p>description</p>
            </div>
            <div className="goods__size">
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div className="goods__cost">
              <h3>250 uah</h3>
              <button className="acceptButton">add to cart</button>
            </div>
          </div>
        </div>
        <div className="goods__pages">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </div>
      </div>
      <div className="popular">
        <div className="popular__tittle">
          <div></div>
          <h2>Популярні</h2>
          <div></div>
        </div>
        <div className="popular__goods">
          <div className="popular__item"></div>
        </div>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;

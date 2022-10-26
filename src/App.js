import './css/App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div className="cover">
          <div className="header unselectable">
            <div className="header__social">
              <p>Приєднуйтесь</p>
              <img src="/img/social/instagram.svg" alt="instagram" />
              <img src="/img/social/telegram.svg" alt="telegramm" />
            </div>
            <ul className="header__about">
              <li>Про нас</li>
              <li>Доставка</li>
              <li>Вакансії</li>
            </ul>
            <div className="header__account">
              <p>UserName</p>
              <img src="/img/userAvatar.png" alt="user" />
            </div>
          </div>
        </div>
      </header>
      <div className="information">
        <div className="information__logo">
          <img src="/img/logo.png" alt="logo" />
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
          <ul className="nav__category unselectable">
            <li>
              <img src="/img/nav/pizza.png" alt="icon" />
              <h3>Піцца</h3>
            </li>
            <li>
              <img src="/img/nav/drink.png" alt="icon" />
              <h3>Напої</h3>
            </li>
            <li>
              <img src="/img/nav/cake.png" alt="icon" />
              <h3>Десерти</h3>
            </li>
            <li>
              <img src="/img/nav/additional.png" alt="icon" />
              <h3>Доповнення</h3>
            </li>
            <li>
              <img src="/img/nav/Union.png" alt="icon" />
              <h3>Акції</h3>
            </li>
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
      <div className="banner"></div>
      <div className="goods">
        <div className="goods__tittle">
          <div></div>
          <h1>Піцца</h1>
          <div></div>
        </div>
        <div className="goods__itemBlock">
          <div className="goods__item">
            <img src="/img/goods/pizza/pizza_margarita.png" alt="goods" />
            <div className="goods__name">
              <h2>Маргаріта</h2>
              <p>моцарела, помідори, рукола</p>
            </div>
            <div className="goods__size">
              <input type="radio" name="size" label="26 см" />
              <input type="radio" name="size" label="30 см" />
              <input type="radio" name="size" label="40 см" />
            </div>
            <div className="goods__cost unselectable">
              <h3>250 грн.</h3>
              <button className="acceptButton">В кошик</button>
            </div>
          </div>
          <div className="goods__item">
            <img src="/img/goods/pizza/pizza_pepperoni.png" alt="goods" />
            <div className="goods__name">
              <h2>Пепероні</h2>
              <p>салямі, моцарела, чедер</p>
            </div>
            <div className="goods__size">
              <input type="radio" name="size" label="26 см" />
              <input type="radio" name="size" label="30 см" />
              <input type="radio" name="size" label="40 см" />
            </div>
            <div className="goods__cost unselectable">
              <h3>250 грн.</h3>
              <button className="acceptButton" disabled>
                В кошик
              </button>
            </div>
          </div>
          <div className="goods__item">
            <img src="/img/goods/pizza/pizza_pepperoni.png" alt="goods" />
            <div className="goods__name">
              <h2>Пепероні</h2>
              <p>салямі, моцарела, чедер</p>
            </div>
            <div className="goods__size">
              <input type="radio" name="size" label="26 см" />
              <input type="radio" name="size" label="30 см" />
              <input type="radio" name="size" label="40 см" />
            </div>
            <div className="goods__cost unselectable">
              <h3>250 грн.</h3>
              <button className="acceptButton" disabled>
                В кошик
              </button>
            </div>
          </div>
          <div className="goods__item">
            <img src="/img/goods/pizza/pizza_pepperoni.png" alt="goods" />
            <div className="goods__name">
              <h2>Пепероні</h2>
              <p>салямі, моцарела, чедер</p>
            </div>
            <div className="goods__size">
              <input type="radio" name="size" label="26 см" />
              <input type="radio" name="size" label="30 см" />
              <input type="radio" name="size" label="40 см" />
            </div>
            <div className="goods__cost unselectable">
              <h3>250 грн.</h3>
              <button className="acceptButton" disabled>
                В кошик
              </button>
            </div>
          </div>
          <div className="goods__item">
            <img src="/img/goods/pizza/pizza_pepperoni.png" alt="goods" />
            <div className="goods__name">
              <h2>Пепероні</h2>
              <p>салямі, моцарела, чедер</p>
            </div>
            <div className="goods__size">
              <input type="radio" name="size" label="26 см" />
              <input type="radio" name="size" label="30 см" />
              <input type="radio" name="size" label="40 см" />
            </div>
            <div className="goods__cost unselectable">
              <h3>250 грн.</h3>
              <button className="acceptButton" disabled>
                В кошик
              </button>
            </div>
          </div>
          <div className="goods__item">
            <img src="/img/goods/pizza/pizza_pepperoni.png" alt="goods" />
            <div className="goods__name">
              <h2>Пепероні</h2>
              <p>салямі, моцарела, чедер</p>
            </div>
            <div className="goods__size">
              <input type="radio" name="size" label="26 см" />
              <input type="radio" name="size" label="30 см" />
              <input type="radio" name="size" label="40 см" />
            </div>
            <div className="goods__cost unselectable">
              <h3>250 грн.</h3>
              <button className="acceptButton" disabled>
                В кошик
              </button>
            </div>
          </div>
          <div className="goods__item">
            <img src="/img/goods/pizza/pizza_pepperoni.png" alt="goods" />
            <div className="goods__name">
              <h2>Пепероні</h2>
              <p>салямі, моцарела, чедер</p>
            </div>
            <div className="goods__size">
              <input type="radio" name="size" label="26 см" />
              <input type="radio" name="size" label="30 см" />
              <input type="radio" name="size" label="40 см" />
            </div>
            <div className="goods__cost unselectable">
              <h3>250 грн.</h3>
              <button className="acceptButton" disabled>
                В кошик
              </button>
            </div>
          </div>
        </div>
        <div className="goods__pages">
          <input type="radio" name="page" label="1" defaultChecked />
          <input type="radio" name="page" label="2" />
          <input type="radio" name="page" label="3" />
          <input type="radio" name="page" label="4" />
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

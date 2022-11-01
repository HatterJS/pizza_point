import { Link } from 'react-router-dom';
import './index.css';

import logoImg from '../../assets/img/logo.png';
import phonesImg from '../../assets/img/phones_img.png';
import timeImg from '../../assets/img/time_img.png';
import favoriteSvg from '../../assets/img/favorite.svg';
import cartImg from '../../assets/img/cart.png';

function Information({ cartCounter, favoriteCounter, setShowFavorite }) {
  return (
    <div className="information">
      <Link className="information__logo-link" to={'/'}>
        <div className="information__logo">
          <img src={logoImg} alt="logo" />
        </div>
      </Link>
      <div className="information__contacts">
        <div className="information__phones">
          <img src={phonesImg} alt="phone" />
          <ul>
            <li>+38(066)503-34-00</li>
            <li>+38(067)777-34-00</li>
          </ul>
        </div>
        <div className="information__workTime">
          <img src={timeImg} alt="time" />
          <ul>
            <li>ПН-ПТ: 09:00 - 18:00</li>
            <li>СБ-ВС: 10:00 - 16:00</li>
          </ul>
        </div>
      </div>
      <div className="information__goodsChoice">
        <div className="information__favorite" onClick={() => setShowFavorite(true)}>
          <img src={favoriteSvg} alt="favorite" />
          <div className="information__counter">
            <p>{favoriteCounter}</p>
          </div>
        </div>
        <Link to={'/order'}>
          <div className="information__cart">
            <img src={cartImg} alt="cart" />
            <div className="information__counter">
              <p>{cartCounter}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Information;

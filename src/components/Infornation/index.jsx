import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showFavorite } from '../../redux/slices/localFavoritesSlice';
import './index.css';

import logoImg from '../../assets/img/logo.jpg';
// import logoImgLight from '../../assets/img/logo-light.jpg';
import phonesImg from '../../assets/img/phones_img.png';
import timeImg from '../../assets/img/time_img.png';
import cartImg from '../../assets/img/cart.png';
import { favoriteSvg } from '../SvgSprite';

function Information() {
  //connect dispatch for redux
  const dispatch = useDispatch();
  //get local cart items from redux
  const { localCart } = useSelector((state) => state.localCart);
  //get local favorites from redux
  const { localFavorites } = useSelector((state) => state.localFavorites);

  return (
    <div className="information">
      <Link className="information__logo-link" to={'/'}>
        <picture className="information__logo">
          {/* <source media="(max-width: 380px)" srcSet={logoImgLight} /> */}
          <img src={logoImg} alt="logo" />
        </picture>
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
        <div className="information__favorite" onClick={() => dispatch(showFavorite())}>
          {favoriteSvg}
          <div className="information__counter">
            <p>{localFavorites.length}</p>
          </div>
        </div>
        <Link to={'/order'}>
          <div className="information__cart">
            <img src={cartImg} alt="cart" />
            <div className="information__counter">
              <p>{localCart.length}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Information;

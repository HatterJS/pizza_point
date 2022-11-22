import { Link } from 'react-router-dom';

import './index.css';
import userImg from '../../assets/img/userAvatar.png';
import { instagramSvg, telegramSvg } from '../SvgSprite';

function Header() {
  return (
    <header>
      <div className="cover">
        <div className="header unselectable">
          <div className="header__social">
            <p>Приєднуйтесь</p>
            {instagramSvg}
            {telegramSvg}
          </div>
          <ul className="header__about">
            <Link to={'/common'} state={{ type: 'about' }}>
              <li>Про нас</li>
            </Link>
            <Link to={'/common'} state={{ type: 'delivery' }}>
              <li>Доставка</li>
            </Link>
            <Link to={'/common'} state={{ type: 'vacancy' }}>
              <li>Вакансії</li>
            </Link>
          </ul>
          <Link to={'/user'}>
            <div className="header__account">
              <p>UserName</p>
              <img src={userImg} alt="user" />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;

import './index.css';

import instagramSvg from '../../assets/img/social/instagram.svg';
import telegrammSvg from '../../assets/img/social/telegram.svg';
import userSvg from '../../assets/img/userAvatar.png';

function Header() {
  return (
    <header>
      <div className="cover">
        <div className="header unselectable">
          <div className="header__social">
            <p>Приєднуйтесь</p>
            <img src={instagramSvg} alt="instagram" />
            <img src={telegrammSvg} alt="telegramm" />
          </div>
          <ul className="header__about">
            <li>Про нас</li>
            <li>Доставка</li>
            <li>Вакансії</li>
          </ul>
          <div className="header__account">
            <p>UserName</p>
            <img src={userSvg} alt="user" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

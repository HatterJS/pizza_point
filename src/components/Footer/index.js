import './index.css';

import instagramSvg from '../../assets/img/social/instagram.svg';
import telegrammSvg from '../../assets/img/social/telegram.svg';

function Footer() {
  return (
    <footer>
      <div className="cover">
        <div className="footer">
          <div className="footer__about unselectable">
            <ul>
              <h3>Pizza point</h3>
              <li>Про нас</li>
              <li>Доставка</li>
              <li>Вакансії</li>
            </ul>
          </div>
          <div className="footer__legal unselectable">
            <ul>
              <h3>Юридична інформація</h3>
              <li>Публічна оферта</li>
              <li>Політика конфіденційності</li>
            </ul>
          </div>
          <div className="footer__contacts">
            <ul>
              <h3 className=" unselectable">Контакти</h3>
              <li>+38(066)503-34-00</li>
              <li>+38(067)777-34-00</li>
            </ul>
          </div>
          <div className="footer__social unselectable">
            <h3>Приєднуйтесь</h3>
            <div className="footer__socialImg">
              <img src={instagramSvg} alt="instagram" />
              <img src={telegrammSvg} alt="telegram" />
            </div>
          </div>
        </div>
        <div className="footer__additional">
          <p>Усi права захищенi ©2022 Pizza point</p>
          <p>Розроблено mr.Hatter - formarkets.ua@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
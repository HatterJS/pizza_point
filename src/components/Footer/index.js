import { Link } from 'react-router-dom';

import './index.css';

import { instagramSvg, telegramSvg } from '../SvgSprite';

function Footer() {
  return (
    <footer>
      <div className="cover">
        <div className="footer">
          <div className="footer__about unselectable">
            <ul>
              <h3>Pizza point</h3>
              <Link to={'/common'}>
                <li>Про нас</li>
              </Link>
              <Link to={'/common'}>
                <li>Доставка</li>
              </Link>
              <Link to={'/common'}>
                <li>Вакансії</li>
              </Link>
            </ul>
          </div>
          <div className="footer__legal unselectable">
            <ul>
              <h3>Юридична інформація</h3>
              <Link to={'/common'}>
                <li>Публічна оферта</li>
              </Link>
              <Link to={'/common'}>
                <li>Політика конфіденційності</li>
              </Link>
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
              {instagramSvg}
              {telegramSvg}
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

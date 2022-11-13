import { Link } from 'react-router-dom';
import './index.css';

function Empty({ setShowFavorite }) {
  return (
    <div className="empty unselectable">
      <h3>Ой-ой! Тут порожньо.</h3>
      <img src="../img/emptyCart.webp" alt="empty" />
      <p>Нажаль Ви не додали жодного товару</p>
      <Link to="/">
        <button className="acceptButton" onClick={setShowFavorite}>
          Повернутись до товарів
        </button>
      </Link>
    </div>
  );
}

export default Empty;

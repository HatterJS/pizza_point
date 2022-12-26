import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import GoodsItem from '../../../../components/GoodsItem';

import './index.css';

function UserHistory() {
  //get user data from Redux
  const { userData } = useSelector((state) => state.authorizedUser);
  //loading state for orders history
  const [isLoad, setIsLoad] = React.useState(false);
  //history data
  const historyData = React.useRef([]);
  React.useEffect(() => {
    try {
      axios.get(`http://localhost:8887/order/${userData.email}`).then((res) => {
        historyData.current = res.data;
        setIsLoad(true);
        console.log(historyData.current);
      });
    } catch (error) {
      alert('Помилочка ;( Щось пішло не так.');
    }
  }, [userData]);
  return (
    <div className="UserHistory unselectable">
      <h2>Історія</h2>
      {isLoad ? (
        historyData.current.map((item, index) => (
          <div className="UserHistory__section" key={item._id}>
            <h4>Замовлення {index + 1}:</h4>
            <p>({item.date})</p>
            {item.goods.map((obj) => (
              <GoodsItem className="goods__item-history" key={obj.goodsTitle + obj.id} {...obj} />
            ))}
          </div>
        ))
      ) : (
        <div>Пусто</div>
      )}
    </div>
  );
}

export default UserHistory;

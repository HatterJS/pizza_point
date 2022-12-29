import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import './index.css';
import HistoryItem from './HistoryItem';

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
          <HistoryItem key={item._id} index={index} {...item} />
        ))
      ) : (
        <div>Пусто</div>
      )}
    </div>
  );
}

export default UserHistory;

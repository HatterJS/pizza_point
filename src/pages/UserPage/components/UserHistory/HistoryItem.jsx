import React from 'react';

import GoodsItem from '../../../../components/GoodsItem';

function HistoryItem({ index, date, goods }) {
  //close/open full information
  const [isFullInformation, setIsFullInformation] = React.useState(false);

  //date dd.mon.yyyy ---------------------->
  const fullDate = new Date(date);
  const months = [
    'січня',
    'лютого',
    'березня',
    'квітня',
    'травня',
    'червня',
    'липня',
    'серпня',
    'вересня',
    'жовтня',
    'листопада',
    'грудня'
  ];
  const orderDate =
    fullDate.getDate() + ' ' + months[fullDate.getMonth()] + ' ' + fullDate.getFullYear();
  //<---------------------- date dd.mon.yyyy
  return (
    <div
      className={
        isFullInformation ? 'historyItem historyItem-open' : 'historyItem historyItem-close'
      }>
      <div className="historyItem__header" onClick={() => setIsFullInformation((prev) => !prev)}>
        <h4>Замовлення {index + 1}</h4>
        <span style={{ fontWeight: '400', fontSize: '0.9em' }}> ({orderDate})</span>
        <div>{isFullInformation ? '▲' : '▼'}</div>
      </div>
      <div className="historyItem__body">
        {goods.map((obj) => (
          <GoodsItem className="goods__item-history" key={obj.goodsTitle + obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
}

export default HistoryItem;

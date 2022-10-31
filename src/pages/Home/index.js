import React from 'react';
import Nav from '../../components/Nav';
import Goods from '../../components/Goods';

function Home({
  goodsData,
  isLoading,
  setLocalFavorites,
  localFavorites,
  goodsCategory,
  setGoodsCategory,
}) {
  return (
    <React.Fragment>
      <Nav goodsCategory={goodsCategory} setGoodsCategory={setGoodsCategory} />
      <div className="banner"></div>
      <Goods
        goodsData={goodsData}
        isLoading={isLoading}
        setLocalFavorites={setLocalFavorites}
        favorites={localFavorites}
      />
    </React.Fragment>
  );
}

export default Home;
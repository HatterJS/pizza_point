import React from 'react';
import Nav from '../../components/Nav';
import Goods from '../../components/Goods';
import Banner from '../../components/Banner';

function Home({
  goodsData,
  isLoadingFirst,
  isLoadingGlobal,
  setLocalFavorites,
  localCart,
  setLocalCart,
  localFavorites
}) {
  return (
    <React.Fragment>
      <Nav isLoadingGlobal={isLoadingGlobal} />
      <div className="banner"></div>
      <Banner />
      <Goods
        goodsData={goodsData}
        isLoadingFirst={isLoadingFirst}
        localCart={localCart}
        setLocalCart={setLocalCart}
        setLocalFavorites={setLocalFavorites}
        localFavorites={localFavorites}
      />
    </React.Fragment>
  );
}

export default Home;

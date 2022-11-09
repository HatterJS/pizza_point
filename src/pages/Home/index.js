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
  localFavorites,
  goodsCategory,
  setGoodsCategory,
  searchValue,
  setSearchValue,
}) {
  return (
    <React.Fragment>
      <Nav
        isLoadingGlobal={isLoadingGlobal}
        goodsCategory={goodsCategory}
        setGoodsCategory={setGoodsCategory}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <div className="banner"></div>
      <Banner />
      <Goods
        goodsData={goodsData}
        goodsCategory={goodsCategory}
        isLoadingFirst={isLoadingFirst}
        localCart={localCart}
        setLocalCart={setLocalCart}
        setLocalFavorites={setLocalFavorites}
        localFavorites={localFavorites}
        searchValue={searchValue}
      />
    </React.Fragment>
  );
}

export default Home;

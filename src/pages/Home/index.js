import React from 'react';
import Nav from '../../components/Nav';
import Goods from '../../components/Goods';
import Banner from '../../components/Banner';

function Home({
  goodsData,
  isLoading,
  setLocalFavorites,
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
        goodsCategory={goodsCategory}
        setGoodsCategory={setGoodsCategory}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <div className="banner"></div>
      <Banner />
      <Goods
        goodsData={goodsData}
        isLoading={isLoading}
        setLocalCart={setLocalCart}
        setLocalFavorites={setLocalFavorites}
        localFavorites={localFavorites}
        searchValue={searchValue}
      />
    </React.Fragment>
  );
}

export default Home;

import React from 'react';
import Nav from '../../components/Nav';
import Goods from '../../components/Goods';
import Banner from '../../components/Banner';

//create context for searching
export const SearchContext = React.createContext('');

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
  sortingType,
  setSortingType
}) {
  //set search value
  const [searchValue, setSearchValue] = React.useState('');
  return (
    <React.Fragment>
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Nav
          isLoadingGlobal={isLoadingGlobal}
          goodsCategory={goodsCategory}
          setGoodsCategory={setGoodsCategory}
          setSortingType={setSortingType}
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
          sortingType={sortingType}
        />
      </SearchContext.Provider>
    </React.Fragment>
  );
}

export default Home;

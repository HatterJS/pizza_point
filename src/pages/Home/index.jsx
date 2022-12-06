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
  localFavorites
}) {
  //set search value
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <React.Fragment>
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
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
      </SearchContext.Provider>
    </React.Fragment>
  );
}

export default Home;

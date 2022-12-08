import React from 'react';
import Nav from '../../components/Nav';
import Goods from '../../components/Goods';
import Banner from '../../components/Banner';

function Home({ goodsData, isLoadingFirst, isLoadingGlobal, setLocalFavorites, localFavorites }) {
  return (
    <React.Fragment>
      <Nav isLoadingGlobal={isLoadingGlobal} />
      <div className="banner"></div>
      <Banner />
      <Goods
        goodsData={goodsData}
        isLoadingFirst={isLoadingFirst}
        setLocalFavorites={setLocalFavorites}
        localFavorites={localFavorites}
      />
    </React.Fragment>
  );
}

export default Home;

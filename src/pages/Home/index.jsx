import React from 'react';
import Nav from '../../components/Nav';
import Goods from '../../components/Goods';
import Banner from '../../components/Banner';

function Home({ goodsData, isLoadingFirst, isLoadingGlobal }) {
  return (
    <React.Fragment>
      <Nav isLoadingGlobal={isLoadingGlobal} />
      <div className="banner"></div>
      <Banner />
      <Goods goodsData={goodsData} isLoadingFirst={isLoadingFirst} />
    </React.Fragment>
  );
}

export default Home;

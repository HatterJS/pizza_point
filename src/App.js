import React from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Order from './pages/Order';
import NotFound from './pages/NonFound';
import Header from './components/Header';
import Information from './components/Infornation';
// import Popular from './components/Popular';
import Footer from './components/Footer';
import Favorites from './components/Favorites';
import './css/App.css';

function App() {
  //loading indicator while getting data from backend
  const [isLoading, setIsLoading] = React.useState(false);
  //goods data from backend
  const [goodsData, setGoodsData] = React.useState([]);
  //get data from localstorage(favorites) or set empty array
  const [localFavorites, setLocalFavorites] = React.useState(
    JSON.parse(localStorage.getItem('favorites')) || [],
  );
  //get data from localstorage(cart) or set empty array
  const [localCart, setLocalCart] = React.useState(JSON.parse(localStorage.getItem('cart')) || []);
  //change favorite state of items
  const [showFavorite, setShowFavorite] = React.useState(false);
  //set goods category
  const [goodsCategory, setGoodsCategory] = React.useState('pizzas');
  //get goods data from backend and set local goods data
  React.useEffect(() => {
    //for called once
    async function getData() {
      try {
        await axios
          .get(`https://632db5102cfd5ccc2af512de.mockapi.io/${goodsCategory}`)
          .then((res) => setGoodsData(res.data));
      } catch (error) {
        alert('контент ще в розробці');
        setGoodsCategory('pizzas');
      }
      setIsLoading(true);
    }
    getData();
  }, [goodsCategory]);
  //set data at localstorage(favorites) when clicked on favorite button (heart)
  React.useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(localFavorites));
  }, [localFavorites]);
  //set data at localstorage(cart) when clicked on buy button
  React.useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(localCart));
  }, [localCart]);

  return (
    <div className="App">
      <Header />
      <Information
        cartCounter={localCart.length}
        favoriteCounter={localFavorites.length}
        setShowFavorite={setShowFavorite}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              goodsData={goodsData}
              isLoading={isLoading}
              setLocalFavorites={setLocalFavorites}
              localFavorites={localFavorites}
              setLocalCart={setLocalCart}
              goodsCategory={goodsCategory}
              setGoodsCategory={setGoodsCategory}
            />
          }
        />
        <Route
          path="/order"
          element={
            <Order
              localCart={localCart}
              setLocalCart={setLocalCart}
              localFavorites={localFavorites}
              setLocalFavorites={setLocalFavorites}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {showFavorite && (
        <Favorites
          setLocalCart={setLocalCart}
          setShowFavorite={setShowFavorite}
          localFavorites={localFavorites}
          setLocalFavorites={setLocalFavorites}
        />
      )}
      {/* <Popular /> */}
      <Footer />
    </div>
  );
}

export default App;

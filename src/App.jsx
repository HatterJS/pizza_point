import React from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Order from './pages/Order';
import UserPage from './pages/UserPage';
import Common from './pages/Common';
import NotFound from './pages/NonFound';
import Header from './components/Header';
import Information from './components/Infornation';
// import Popular from './components/Popular';
import Footer from './components/Footer';
import Favorites from './components/Favorites';
import './css/App.css';

function App() {
  //goods data from backend
  const goodsData = React.useRef;
  //loading indicator while getting data from backend for main page
  const [isLoadingFirst, setIsLoadingFirst] = React.useState(false);
  //loading indicator while getting data from backend for others pages
  const [isLoadingGlobal, setIsLoadingGlobal] = React.useState(false);
  //get data from localstorage(favorites) or set empty array
  const [localFavorites, setLocalFavorites] = React.useState(
    JSON.parse(localStorage.getItem('favorites')) || []
  );
  //get data from localstorage(cart) or set empty array
  const [localCart, setLocalCart] = React.useState(JSON.parse(localStorage.getItem('cart')) || []);
  //set favorite state of items
  const [showFavorite, setShowFavorite] = React.useState(false);
  //get goods data from backend and set local goods data
  React.useEffect(() => {
    //for called once
    async function getData() {
      goodsData.current = { pizzas: null, desserts: null, drinks: null, additionals: null };
      try {
        await axios
          .get('https://632db5102cfd5ccc2af512de.mockapi.io/pizzas')
          .then((res) => (goodsData.current.pizzas = res.data));
        setIsLoadingFirst(true); //disable loading for main page
        await axios
          .get('https://632db5102cfd5ccc2af512de.mockapi.io/desserts')
          .then((res) => (goodsData.current.desserts = res.data));
        await axios
          .get('https://632db5102cfd5ccc2af512de.mockapi.io/drinks')
          .then((res) => (goodsData.current.drinks = res.data));
        await axios
          .get('https://632db5102cfd5ccc2af512de.mockapi.io/additionals')
          .then((res) => (goodsData.current.additionals = res.data));
        setIsLoadingGlobal(true); //disable loading for others pages
      } catch (error) {
        alert('контент ще в розробці');
      }
    }
    getData();
  }, [goodsData]);
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
              isLoadingFirst={isLoadingFirst}
              isLoadingGlobal={isLoadingGlobal}
              setLocalFavorites={setLocalFavorites}
              localFavorites={localFavorites}
              localCart={localCart}
              setLocalCart={setLocalCart}
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
        <Route path="/user/*" element={<UserPage />} />
        <Route path="/common" element={<Common />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {showFavorite && (
        <Favorites
          localCart={localCart}
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

import React from 'react';
import axios from 'axios';
import Header from './components/Header';
import Information from './components/Infornation';
import Nav from './components/Nav';
import Pizzas from './pages/Pizzas';
// import Popular from './components/Popular';
import Footer from './components/Footer';
import Favorites from './components/Favorites';
import './css/App.css';

function App() {
  //get data from localstorage(favorites) or set empty array
  const [localFavorites, setLocalFavorites] = React.useState(
    JSON.parse(localStorage.getItem('favorites')) || [],
  );
  //pizzas data from backend
  const [pizzasData, setPizzasData] = React.useState([]);
  //drinks data from backend
  const [drinksData, setDrinksData] = React.useState([]);
  //change favorite state of items
  const [showFavorite, setShowFavorite] = React.useState(false);
  //get pizzas data from backend and set local pizzas data
  React.useEffect(() => {
    axios
      .get('https://632db5102cfd5ccc2af512de.mockapi.io/pizzas')
      .then((res) => setPizzasData(res.data));
    axios
      .get('https://632db5102cfd5ccc2af512de.mockapi.io/drinks')
      .then((res) => setDrinksData(res.data));
  }, []);
  console.log(drinksData);
  //set data at localstorage(favorites) when clicked on favorite button (heart)
  React.useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(localFavorites));
  }, [localFavorites]);

  return (
    <div className="App">
      <Header />
      <Information counter={localFavorites.length} setShowFavorite={setShowFavorite} />
      <Nav />
      <div className="banner"></div>
      <Pizzas
        pizzasData={pizzasData}
        setLocalFavorites={setLocalFavorites}
        favorites={localFavorites}
      />
      {showFavorite && (
        <Favorites
          setShowFavorite={setShowFavorite}
          localFavorites={localFavorites}
          setLocalFavorites={setLocalFavorites}
          favorites={localFavorites}
        />
      )}
      {/* <Popular /> */}
      <Footer />
    </div>
  );
}

export default App;

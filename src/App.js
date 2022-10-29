import React from 'react';
import Header from './components/Header';
import Information from './components/Infornation';
import Nav from './components/Nav';
import Pizzas from './pages/Pizzas';
// import Popular from './components/Popular';
import Footer from './components/Footer';
import Favorites from './components/Favorites';
import './css/App.css';

function App() {
  const [localFavorites, setLocalFavorites] = React.useState(
    JSON.parse(localStorage.getItem('favorites')) || [],
  );
  const [showFavorite, setShowFavorite] = React.useState(false);
  React.useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(localFavorites));
  }, [localFavorites]);

  return (
    <div className="App">
      <Header />
      <Information counter={localFavorites.length} setShowFavorite={setShowFavorite} />
      <Nav />
      <div className="banner"></div>
      <Pizzas setLocalFavorites={setLocalFavorites} favorites={localFavorites} />
      <Favorites
        showFavorite={showFavorite}
        setShowFavorite={setShowFavorite}
        localFavorites={localFavorites}
        setLocalFavorites={setLocalFavorites}
        favorites={localFavorites}
      />
      {/* <Popular /> */}
      <Footer />
    </div>
  );
}

export default App;

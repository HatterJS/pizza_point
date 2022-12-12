import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  //get data from localstorage(favorites) or set empty array
  localFavorites: JSON.parse(localStorage.getItem('favorites')) || [],
  isShowFavorites: false
};

const localFavoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state.localFavorites = [...state.localFavorites, action.payload];
      setLocalStorage(state.localFavorites);
    },
    deleteFromFavorites: (state, action) => {
      state.localFavorites = state.localFavorites.filter(
        (item) => item.goodsTitle !== action.payload.goodsTitle
      );
      setLocalStorage(state.localFavorites);
    },
    showFavorite: (state) => {
      state.isShowFavorites = !state.isShowFavorites;
    }
  }
});
function setLocalStorage(favorites) {
  localStorage.setItem('favorites', JSON.stringify(favorites));
}
export const { addToFavorites, deleteFromFavorites, showFavorite } = localFavoriteSlice.actions;
export default localFavoriteSlice.reducer;

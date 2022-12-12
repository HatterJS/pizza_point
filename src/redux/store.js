import { configureStore } from '@reduxjs/toolkit';
import goodsFilter from './slices/goodsFilterSlice';
import localCart from './slices/localCartSlice';
import localFavorites from './slices/localFavoritesSlice';

export const store = configureStore({
  reducer: {
    goodsFilter,
    localCart,
    localFavorites
  }
});

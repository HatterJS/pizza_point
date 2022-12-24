import { configureStore } from '@reduxjs/toolkit';
import goodsFilter from './slices/goodsFilterSlice';
import localCart from './slices/localCartSlice';
import localFavorites from './slices/localFavoritesSlice';
import authorizedUser from './slices/authorizedUserSlice';

export const store = configureStore({
  reducer: {
    goodsFilter,
    localCart,
    localFavorites,
    authorizedUser
  }
});

import { configureStore } from '@reduxjs/toolkit';
import goodsFilter from './slices/goodsFilterSlice';
import localCart from './slices/localCartSlice';

export const store = configureStore({
  reducer: {
    goodsFilter,
    localCart
  }
});

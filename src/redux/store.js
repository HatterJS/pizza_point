import { configureStore } from '@reduxjs/toolkit';
import goodsFilter from './slices/goodsFilterSlice';
import localCart from './slices/localCart';

export const store = configureStore({
  reducer: {
    goodsFilter,
    localCart
  }
});

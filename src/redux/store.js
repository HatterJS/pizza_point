import { configureStore } from '@reduxjs/toolkit';
import goodsFilter from './slices/goodsFilterSlice';

export const store = configureStore({
  reducer: {
    goodsFilter
  }
});

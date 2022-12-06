import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  goodsCategory: 'pizzas',
  sortingType: 'rating'
};

const goodsFilterSlice = createSlice({
  name: 'goodsFilter',
  initialState,
  reducers: {
    setGoodsCategory: (state, action) => {
      state.goodsCategory = action.payload;
    },
    setSortingType: (state, action) => {
      state.sortingType = action.payload;
    }
  }
});

export const { setGoodsCategory, setSortingType } = goodsFilterSlice.actions;
export default goodsFilterSlice.reducer;

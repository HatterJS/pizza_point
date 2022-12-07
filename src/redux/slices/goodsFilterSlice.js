import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  goodsCategory: 'pizzas',
  sortingType: 'rating',
  searchValue: ''
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
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    }
  }
});

export const { setGoodsCategory, setSortingType, setSearchValue } = goodsFilterSlice.actions;
export default goodsFilterSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  localCart: JSON.parse(localStorage.getItem('cart')) || []
};

const localCart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setLocalCart: (state, action) => {
      state.localCart = action.payload;
    }
  }
});

export const { setLocalCart } = localCart.actions;
export default localCart.reducer;

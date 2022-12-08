import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  //get data from localstorage(cart) or set empty array
  localCart: JSON.parse(localStorage.getItem('cart')) || []
};

const localCartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const addedItem = action.payload.addedItem;
      const selectedSize = action.payload.selectedSize;
      const sizeAmount = [...addedItem.sizeAmount];
      ++sizeAmount[selectedSize];
      state.localCart.push({ ...addedItem, sizeAmount });
      localStorage.setItem('cart', JSON.stringify(state.localCart));
    },
    deleteFromCart: (state, action) => {
      state.localCart = state.localCart.filter((item) => item.goodsTitle !== action.payload);
      localStorage.setItem('cart', JSON.stringify(state.localCart));
    },
    increaseAmount: (state, action) => {
      state.localCart = state.localCart.map((item) =>
        item.goodsTitle === action.payload.goodsTitle
          ? {
              ...item,
              sizeAmount: item.sizeAmount.map((item, index) =>
                index === action.payload.selectedSize ? ++item : item
              )
            }
          : item
      );
      localStorage.setItem('cart', JSON.stringify(state.localCart));
    },
    decreaseAmount: (state, action) => {
      state.localCart = state.localCart.map((item) =>
        item.goodsTitle === action.payload.goodsTitle
          ? {
              ...item,
              sizeAmount: item.sizeAmount.map((item, index) =>
                index === action.payload.selectedSize ? --item : item
              )
            }
          : item
      );
      localStorage.setItem('cart', JSON.stringify(state.localCart));
    },
    clearCart: (state) => {
      state.localCart = [];
      localStorage.setItem('cart', JSON.stringify(state.localCart));
    }
  }
});

export const { addToCart, deleteFromCart, increaseAmount, decreaseAmount, clearCart } =
  localCartSlice.actions;
export default localCartSlice.reducer;

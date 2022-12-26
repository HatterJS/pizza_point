const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  loginForm: false,
  registrationForm: false,
  userData: JSON.parse(localStorage.getItem('user')) || {
    _id: '',
    name: '',
    surname: '',
    email: '',
    phone: '',
    address: { street: '', building: '', apartment: '' }
  }
};

const authorizedUserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
      localStorage.setItem('user', JSON.stringify(state.userData));
    },
    logOut: (state) => {
      state.userData = {};
      localStorage.removeItem('user');
    },
    showLoginForm: (state, action) => {
      state.loginForm = action.payload;
    },
    showRegistrationForm: (state, action) => {
      state.registrationForm = action.payload;
    }
  }
});

export const { setUserData, logOut, showLoginForm, showRegistrationForm } =
  authorizedUserSlice.actions;
export default authorizedUserSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const shoppingCardSlice = createSlice({
  name: 'shoppingCard',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    addToWishlist: (state, action) => {
      // չեմ շարունակում․․․․
    },
  },
});

export const { addToCart, addToWishlist } = shoppingCardSlice.actions;

export default shoppingCardSlice.reducer;

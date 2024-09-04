import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice";
import data from "./store/dataSlice";

const cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 1, name: "Grey Yordan", count: 1 },
    { id: 2, name: "Blue and White", count: 3 },
  ],
  reducers: {
    increase: (state, action) => {
      const id = action.payload;
      const item = state.find((item) => item.id === id);
      if (item) {
        item.count += 1;
      }
    },
    addCart: (state, action) => {
      state.push({ id: 3, name: "red and orange", count: 5 });
    },
  },
});
export const { increase, addCart } = cart.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
    data: data.reducer,
  },
});

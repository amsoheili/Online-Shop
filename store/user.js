import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
  isLoggedIn: false,
  username: "",
  password: "",
  cartItems: [],
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    addItemToCart(state, action) {
      //check if there are any item in cartItem with the same
      // id
      // if there is just increase the amount of it's quantity
      // else push the item to the array

      const specifiedCartItem = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload.item.id
      );

      if (specifiedCartItem) {
        state.cartItems.forEach((element, index) => {
          if (element.id === specifiedCartItem.id) {
            state.cartItems[index] = {
              ...specifiedCartItem,
              quantity: specifiedCartItem.quantity + 1,
            };
          }
        });
      } else {
        state.cartItems.push({ ...action.payload.item, quantity: 1 });
      }
    },
    deleteItemInCart(state, action) {
      const specifiedCartItem = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload.item.id
      );
      if (specifiedCartItem) {
        state.cartItems.forEach((element, index) => {
          if (element.id === specifiedCartItem.id) {
            state.cartItems[index] = {
              ...specifiedCartItem,
              quantity: specifiedCartItem.quantity - 1,
            };
          }
        });
      }
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.quantity > 0
      );
    },
    clearCart(state, action) {
      state.cartItems = [];
    },
    // orderCart(state, action) {
    //   state.orders = [...state.orders, ...state.cartItems];
    // },
    toggleIsLoggedIn(state, action) {
      state.isLoggedIn = !state.isLoggedIn;
    },
    setUsername(state, action) {
      state.username = action.payload.username;
    },
    setPassword(state, action) {
      state.password = action.payload.password;
    },
    logoutCompletely(state, action) {
      state.username = "";
      state.password = "";
      state.isLoggedIn = false;
      state.cartItems = [];
    },
    setCart(state, action) {
      state.cartItems = action.payload.cartItems;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;

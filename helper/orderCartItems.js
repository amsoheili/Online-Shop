import axios from "axios";
import { userActions } from "../store/user";
import getUserData from "./getUserData";

export const orderCartItems = (dispatch, user) => {
  // add cart Items to orders in database
  // delete cart items in redux and data base
  axios.post("/api/add-cart-to-orders", {
    username: user.username,
    cartItems: user.cartItems,
  });
  axios.post("/api/clear-cart", { username: user.username });
  dispatch(userActions.clearCart());
};

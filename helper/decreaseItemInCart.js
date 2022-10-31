import { userActions } from "../store/user";
import axios from "axios";

const decreaseItemInCart = (dispatch, data) => {
  dispatch(
    userActions.deleteItemInCart({
      item: data.item,
    })
  );

  const cartItems = data.cartItems;

  const specifiedCartItem = cartItems.find(
    (cartItem) => cartItem.id == data.item.id
  );

  if (specifiedCartItem.quantity > 1) {
    console.log(specifiedCartItem);
    axios.post("/api/decrease-item-in-cart", {
      ...data,
      itemQuantity: specifiedCartItem.quantity,
    });
  } else {
    axios.post("/api/delete-item-in-cart", {
      username: data.username,
      item: data.item,
    });
  }
};

export default decreaseItemInCart;

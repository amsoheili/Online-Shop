import { userActions } from "../store/user";
import axios from "axios";

export const increaseItemInCart = (dispatch, data) => {
  //adding to redux
  // adding to database
  dispatch(
    userActions.addItemToCart({
      item: data.item,
    })
  );

  // we should check that is the item unique
  // if the item is unique i mean that it is not in the cart yet
  // so the quantity should be 1
  // else if the item is already in the cart we should just increase the
  // item 's quantity in the data base
  // so we build two api's one for adding an item in the cart
  // other for increasing the quantity of an item

  // we should ask the redux that he has the cart item
  // if he has the cart item then we post a request to increase the
  // item 's quantity in the database
  // else if the redux does not have the cart item then
  // we should append a quantity property of number 1 to the cart item
  // and post a request to add the cart item to the
  // data base

  const cartItems = data.cartItems;

  const specifiedCartItem = cartItems.find(
    (cartItem) => cartItem.id == data.item.id
  );

  if (specifiedCartItem) {
    console.log(specifiedCartItem);
    axios.post("/api/increase-item-in-cart", {
      ...data,
      itemQuantity: specifiedCartItem.quantity,
    });
  } else {
    axios.post("/api/add-item-to-cart", {
      username: data.username,
      item: { ...data.item, quantity: 1 },
    });
  }
};

import { userActions } from "../store/user";

export const addItemToCart = (dispatch, product) => {
  //adding to redux
  // adding to database
  dispatch(
    userActions.addItemToCart({
      item: product,
    })
  );
};

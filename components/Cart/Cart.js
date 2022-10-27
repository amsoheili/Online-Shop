import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import { orderCartItems } from "../../helper/shopping";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.user.cartItems);
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.username);

  const orderHandler = () => {
    orderCartItems(dispatch, { username, cartItems });
  };

  return (
    <div className={classes.main}>
      {cartItems.length > 0 ? (
        <>
          <div className={classes.cartItems}>
            {cartItems.map((cartItem) => (
              <CartItem
                key={cartItem.id}
                id={cartItem.id}
                name={cartItem.name}
                image={cartItem.image}
                quantity={cartItem.quantity}
                price={cartItem.price}
              />
            ))}
          </div>
          <div className={classes.controls}>
            <button className="first-button" onClick={orderHandler}>
              Order
            </button>
          </div>
        </>
      ) : (
        <h2>Your Cart is empty</h2>
      )}
    </div>
  );
};

export default Cart;

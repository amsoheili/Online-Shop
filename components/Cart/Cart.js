import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import { orderCartItems } from "../../helper/orderCartItems";
import { useRouter } from "next/router";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.user.cartItems);
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.username);
  const [message, setMessage] = useState(null);
  const [isOrdering, setIsOrdering] = useState(false);
  const router = useRouter();

  const orderHandler = () => {
    if (isOrdering) {
      return;
    }
    setIsOrdering(true);
    setMessage("Ordering...");
    setTimeout(() => {
      orderCartItems(dispatch, { username, cartItems });
      setMessage(null);
      setIsOrdering(false);
    }, 3000);
    // setTimeout(router.push("/products"), 4000);
  };
  console.log(cartItems);
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
          {!isOrdering && (
            <div className={classes.controls}>
              <button className="first-button" onClick={orderHandler}>
                Order
              </button>
            </div>
          )}
          {isOrdering && <button className="first-button">{message}</button>}
        </>
      ) : (
        <h2>Your Cart is empty</h2>
      )}
    </div>
  );
};

export default Cart;

import { useDispatch, useSelector } from "react-redux";
import decreaseItemInCart from "../../helper/decreaseItemInCart";
import { increaseItemInCart } from "../../helper/increaseItemInCart";
import { userActions } from "../../store/user";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.username);
  const cartItems = useSelector((state) => state.user.cartItems);

  const increaseItemHandler = () => {
    increaseItemInCart(dispatch, {
      username,
      cartItems,
      item: {
        id: props.id,
        name: props.name,
        price: props.price,
        description: props.description,
        image: props.image,
      },
    });
  };

  const decreaseItemHandler = () => {
    decreaseItemInCart(dispatch, {
      username,
      cartItems,
      item: {
        id: props.id,
        name: props.name,
        price: props.price,
        description: props.description,
        image: props.image,
      },
    });
  };

  return (
    <div className={classes.main}>
      <div className={classes.image}>Item Image</div>
      <div className={classes.info}>
        <div className={classes.name}>Name: {props.name}</div>
        <div className={classes.quantity}>X {props.quantity}</div>
        <div className={classes.totalPrice}>{props.price * props.quantity}</div>
        <div className={classes.controls}>
          <button
            className={"third-button " + classes.increase}
            onClick={increaseItemHandler}
          >
            +
          </button>
          <button
            className={"third-button " + classes.decrease}
            onClick={decreaseItemHandler}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

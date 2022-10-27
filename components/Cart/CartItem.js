import { useDispatch } from "react-redux";
import { userActions } from "../../store/user";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const increaseItemHandler = () => {
    dispatch(
      userActions.addItemToCart({
        item: {
          id: props.id,
          name: props.name,
          price: props.price,
          description: props.description,
          image: props.image,
        },
      })
    );
  };

  const decreaseItemHandler = () => {
    dispatch(
      userActions.deleteItemInCart({
        item: {
          id: props.id,
          name: props.name,
          price: props.price,
          description: props.description,
          image: props.image,
        },
      })
    );
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

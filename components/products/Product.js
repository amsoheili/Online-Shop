import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../helper/addProductToCart";
import { userActions } from "../../store/user";
import classes from "./Product.module.css";

const Product = (props) => {
  const dispatch = useDispatch();
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const router = useRouter();

  const addItemToCartHandler = () => {
    if (!isUserLoggedIn) {
      router.push("/login");
      return;
    }
    //console.log(props.id);
    addItemToCart(dispatch, {
      id: props.id,
      name: props.name,
      price: props.price,
      description: props.description,
      image: props.image,
    });
  };

  return (
    <div className={classes.product}>
      <div className={classes.image}>{/* <image /> */}</div>
      <div className={classes.info}>
        <div>Name: {props.name}</div>
        <div>Price: {props.price}</div>
        <div>Description: {props.description}</div>
      </div>
      <div className={classes.addToChart} onClick={addItemToCartHandler}>
        <button className="second-button">Add To Chart</button>
      </div>
    </div>
  );
};

export default Product;

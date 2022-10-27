import Link from "next/link";
import { useRef } from "react";
import useInput from "../../hooks/use-input";

import classes from "./AddingProduct.module.css";

const isNumeric = (str) => {
  console.log(str);
  if (typeof str != "string") return false; // we only process strings!
  return (
    !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
    !isNaN(parseFloat(str))
  ); // ...and ensure strings of whitespace fail
};

const AddingProduct = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredPrice,
    isValid: enteredPriceIsValid,
    hasError: priceInputHasError,
    valueChangeHandler: priceChangeHandler,
    inputBlurHandler: priceBlurHandler,
    reset: resetPriceInput,
  } = useInput(isNumeric);

  const {
    value: enteredDescription,
    isValid: enteredDescriptionIsValid,
    hasError: descriptionInputHasError,
    valueChangeHandler: descriptionChangeHandler,
    inputBlurHandler: descriptionBlurHandler,
    reset: resetDescriptionInput,
  } = useInput((value) => value.trim() !== "");

  const resetInputs = () => {
    resetNameInput();
    resetPriceInput();
    resetDescriptionInput();
  };

  let formIsValid = false;
  if (enteredNameIsValid && enteredPriceIsValid && enteredDescriptionIsValid) {
    formIsValid = true;
  }
  console.log(`render`);

  const submitHandler = (event) => {
    event.preventDefault();

    const product = {
      name: enteredName,
      price: enteredPrice,
      description: enteredDescription,
    };

    if (!formIsValid) {
      return;
    }

    props.onAddProduct(product);

    resetInputs();
  };

  return (
    <div className={classes["adding-product"]}>
      <div className={classes["form-container"]}>
        <h1>Adding Product</h1>
        <form onSubmit={submitHandler}>
          <div className={classes.name}>
            <input
              type="text"
              placeholder="Name"
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
              value={enteredName}
            />
            <div className={classes.hasError}>
              {nameInputHasError && "Enter a valid name"}
            </div>
          </div>
          <div>
            <input
              type="text"
              placeholder="Price"
              onChange={priceChangeHandler}
              onBlur={priceBlurHandler}
              value={enteredPrice}
            />
            <div className={classes.hasError}>
              {priceInputHasError && "Enter a valid price"}
            </div>
          </div>
          <div>
            <input
              type="text"
              placeholder="Description"
              onChange={descriptionChangeHandler}
              onBlur={descriptionBlurHandler}
              value={enteredDescription}
            />
            <div className={classes.hasError}>
              {descriptionInputHasError && "Enter a valid description"}
            </div>
          </div>
          <div className={classes.submit}>
            <button type="submit">Add Product</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddingProduct;

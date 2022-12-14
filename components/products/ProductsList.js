import { useState } from "react";

import classes from "./ProductsList.module.css";

import Product from "./Product";
import { useSelector } from "react-redux";

const ProductsList = (props) => {
  //let xxx = props.produc;
  let [products, setProducts] = useState(props.products);

  const selectChangeHandler = (event) => {
    console.log(event.target.value);
    let tmp = [...products];

    if (event.target.value == "Ascending") {
      tmp = tmp.sort(
        (firstProduct, secondProduct) =>
          firstProduct.price - secondProduct.price
      );
      setProducts(
        tmp.sort(
          (firstProduct, secondProduct) =>
            firstProduct.price - secondProduct.price
        )
      );
    }
    if (event.target.value == "Descending") {
      tmp = tmp.sort(
        (firstProduct, secondProduct) =>
          secondProduct.price - firstProduct.price
      );
      setProducts(
        tmp.sort(
          (firstProduct, secondProduct) =>
            secondProduct.price - firstProduct.price
        )
      );
    }
    console.log(products);
  };
  return (
    <div className={classes.products}>
      <div className={classes.container}>
        <div className={classes.filter}>
          <div>
            <button className={"first-button " + classes.button}>
              Filtered by
            </button>
          </div>
          <div>
            {/* <label htmlFor="sorting">Sorting</label> */}
            <select
              name="sorting"
              className={"first-button "}
              onChange={selectChangeHandler}
            >
              <option value="Ascending">Ascending</option>
              <option value="Descending">Descending</option>
            </select>
          </div>
        </div>
        <div className={classes["products-list"]}>
          {products.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;

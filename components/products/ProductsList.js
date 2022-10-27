import { useState } from "react";

import classes from "./ProductsList.module.css";

import Product from "./Product";

const ProductsList = (props) => {
  let [products, setProducts] = useState(props.products);

  const selectChangeHandler = (event) => {
    console.log(event.target.value);
    let tmp;

    if (event.target.value == "Ascending") {
      tmp = products.sort(
        (firstProduct, secondProduct) =>
          firstProduct.price - secondProduct.price
      );
      setProducts(tmp);
    }
    if (event.target.value == "Descending") {
      tmp = products.sort(
        (firstProduct, secondProduct) =>
          secondProduct.price - firstProduct.price
      );
      setProducts(tmp);
    }
    console.log(tmp);
  };
  return (
    <div className={classes.products}>
      <div className={classes.container}>
        <div className={classes.filter}>
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
          <div>
            <button className={"first-button " + classes.button}>Filter</button>
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

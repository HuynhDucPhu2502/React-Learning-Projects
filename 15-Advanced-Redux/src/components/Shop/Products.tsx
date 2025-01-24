import classes from "./Products.module.css";
import ProductItem from "./ProductItem";

import { ITEM_DATA_DUMMY } from "../../data";

const Products = () => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {ITEM_DATA_DUMMY.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
};

export default Products;

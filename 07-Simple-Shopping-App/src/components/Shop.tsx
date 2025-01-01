import { PRODUCTS_DATA } from "../products-data";
import Product from "./Product";

const Shop = () => {
  return (
    <>
      <section id="shop">
        <h2>Elegant Clothing For Everyone</h2>
        <ul id="products">
          {PRODUCTS_DATA.map((product) => (
            <li key={product.id}>
              <Product product={product} {...product} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Shop;

import { PRODUCTS_DATA } from "../products-data";
import Product from "./Product";

type Props = {
  handleAddItemToCart: (productId: string) => void;
};

const Shop: React.FC<Props> = ({ handleAddItemToCart }) => {
  return (
    <>
      <section id="shop">
        <h2>Elegant Clothing For Everyone</h2>
        <ul id="products">
          {PRODUCTS_DATA.map((product) => (
            <li key={product.id}>
              <Product
                product={product}
                handleAddItemToCart={handleAddItemToCart}
                {...product}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Shop;

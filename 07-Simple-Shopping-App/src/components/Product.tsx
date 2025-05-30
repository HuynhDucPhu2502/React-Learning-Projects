import { useContext } from "react";
import ShoppingCartContext from "../store/shopping-cart-context";
type Product = {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
};

type Item = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type ShoppingCartContextType = {
  shoppingCart: Item[];
  handleAddItemToCart: (productId: string) => void;
  handleUpdateCartItemQuantity: (productId: string, quantity: number) => void;
};

type Props = {
  product: Product;
};

const Product: React.FC<Props> = ({ product }) => {
  const { handleAddItemToCart } =
    useContext<ShoppingCartContextType>(ShoppingCartContext);

  return (
    <article className="product">
      <img src={product.image} alt={product.title} />
      <div className="product-content">
        <div>
          <h3>{product.title}</h3>
          <p className="product-price">${product.price}</p>
          <p>{product.description}</p>
        </div>
        <p className="product-actions">
          <button onClick={() => handleAddItemToCart(product.id)}>
            Add to Cart
          </button>
        </p>
      </div>
    </article>
  );
};

export default Product;

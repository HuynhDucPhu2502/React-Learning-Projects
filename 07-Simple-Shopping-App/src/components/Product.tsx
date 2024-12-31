type Product = {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
};

type Props = {
  handleAddItemToCart: (productId: string) => void;
  product: Product;
};

const Product: React.FC<Props> = ({ product, handleAddItemToCart }) => {
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

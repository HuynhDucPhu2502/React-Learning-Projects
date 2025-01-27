import { useParams, Link } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();

  return (
    <div>
      <h1>Product Details</h1>
      <p>{params.productID}</p>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </div>
  );
};

export default ProductDetails;

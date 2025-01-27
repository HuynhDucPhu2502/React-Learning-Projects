import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/products");
  };

  return (
    <>
      <h1>This is Home page</h1>
      <p>
        Go to <Link to={"products"}>list of products</Link>
      </p>
      <button onClick={handleClick}>Go to products</button>
    </>
  );
};

export default HomePage;

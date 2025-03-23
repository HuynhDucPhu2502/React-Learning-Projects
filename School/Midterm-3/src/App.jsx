import { CartList } from "./components/CartList";
import { Shop } from "./components/Shop";

function App() {
  return (
    <>
      <div className="my-12 w-11/12 mx-auto">
        <CartList />
        <Shop />
      </div>
    </>
  );
}

export default App;

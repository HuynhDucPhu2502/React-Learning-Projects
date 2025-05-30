import Header from "./components/Header";
import Shop from "./components/Shop";
import { ShoppingCartProvider } from "./store/shopping-cart-context";

function App() {
  return (
    <ShoppingCartProvider>
      <Header />
      <Shop />
    </ShoppingCartProvider>
  );
}

export default App;

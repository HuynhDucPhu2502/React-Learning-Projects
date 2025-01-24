import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "./store";
import { useEffect } from "react";
import { sendDataCart, fetchDataCart } from "./store/cart-actions";
import { uiActions } from "./store/ui-slice";

function App() {
  const { cartIsVisible, isInitialLoad, notification } = useSelector(
    (state: RootState) => state.ui
  );
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (isInitialLoad) {
      dispatch(fetchDataCart());
      dispatch(uiActions.initialLoad());
    } else return;
  }, [dispatch, isInitialLoad]);

  useEffect(() => {
    if (!isInitialLoad && cart.isCartModified) {
      dispatch(sendDataCart(cart));
    } else return;
  }, [cart, dispatch, isInitialLoad]);

  return (
    <>
      {notification && <Notification {...notification}></Notification>}
      <Layout>
        {cartIsVisible && <Cart></Cart>}
        <Products></Products>
      </Layout>
    </>
  );
}

export default App;

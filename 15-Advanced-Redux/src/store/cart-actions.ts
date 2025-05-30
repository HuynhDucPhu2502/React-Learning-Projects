import { uiActions } from "./ui-slice";
import { AppDispatch } from "./index";

import { Cart } from "../types/models-type";
import { cartActions } from "./cart-slice";

export const fetchDataCart = () => {
  return async (dispatch: AppDispatch) => {
    console.log("test fetch");
    const request = async () => {
      const response = await fetch(
        "https://new-project-39221-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json"
      );

      if (!response.ok) throw new Error("Something went wrong!");

      const data = await response.json();
      dispatch(cartActions.replaceCart(data.cartItems));
    };

    try {
      await request();
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message:
            error instanceof Error
              ? error.message
              : "Fetching cart data failed!",
        })
      );
    }
  };
};

export const sendDataCart = (cart: Cart) => {
  return async (dispatch: AppDispatch) => {
    console.log("test");
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const request = async () => {
      const response = await fetch(
        "https://new-project-39221-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) throw new Error("Something went wrong!");
    };

    try {
      await request();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message:
            error instanceof Error
              ? error.message
              : "An unknown error occurred",
        })
      );
    }
  };
};

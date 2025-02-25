import { currencyFormatter } from "../util/formatting";
import useHttp from "../hooks/useHttp";

import { useContext } from "react";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext ";

import Input from "./UI/Input";
import Modal from "./UI/Modal";
import Button from "./UI/Button";

import { Customer, Order } from "../types/models";
import Error from "./UI/Error";

const requestConfig = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
};

const Checkout = () => {
  const { items, clearItem } = useContext(CartContext);
  const { hideCheckout, progress } = useContext(UserProgressContext);
  const {
    data,
    error,
    isLoading: isSending,
    sendRequest,
    clearData,
  } = useHttp("http://localhost:3000/orders", {}, requestConfig);

  const cartTotal = items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.meal.price,
    0
  );

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    const rawData = Object.fromEntries(formData.entries());
    const customer: Customer = {
      name: rawData["full-name"] as string,
      email: rawData.email as string,
      street: rawData.street as string,
      city: rawData.city as string,
      "postal-code": rawData["postal-code"] as string,
    };

    const order: Order = {
      items,
      customer,
    };

    sendRequest({ order });
  };

  const handleFinish = () => {
    hideCheckout();
    clearItem();
    clearData();
  };

  let actions = (
    <>
      <Button type="button" textOnly onClick={hideCheckout}>
        Close
      </Button>
      <Button>Submit Order</Button>
    </>
  );

  if (isSending) {
    actions = <span>Sending order data...</span>;
  }

  if (data && Object.keys(data).length > 0 && !error) {
    return (
      <Modal open={progress === "checkout"} onClose={handleFinish}>
        <h2>Success!</h2>
        <p>Your order was submitted successfully.</p>
        <p>
          We will get back to you with more details via email within the next
          few minutes.
        </p>
        <p className="modal-actions">
          <Button onClick={handleFinish}>Okay</Button>
        </p>
      </Modal>
    );
  }

  return (
    <Modal open={progress === "checkout"} onClose={hideCheckout}>
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>

        <Input label="Full Name" type="text" id="full-name" />
        <Input label="E-Mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>

        {error && <Error title="Failed to submit order" message={error} />}

        <p className="modal-actions">{actions}</p>
      </form>
    </Modal>
  );
};

export default Checkout;

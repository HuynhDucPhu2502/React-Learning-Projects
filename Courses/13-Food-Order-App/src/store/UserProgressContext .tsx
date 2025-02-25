import { createContext, ReactNode, useState } from "react";

type UserProgressContextType = {
  progress: string;
  showCart: () => void;
  hideCart: () => void;
  showCheckout: () => void;
  hideCheckout: () => void;
};

const UserProgressContext = createContext<UserProgressContextType>({
  progress: "",
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export default UserProgressContext;

export const UserProgressContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [progress, setProgress] = useState("");

  const showCart = () => {
    setProgress("cart");
  };

  const hideCart = () => {
    setProgress("");
  };

  const showCheckout = () => {
    setProgress("checkout");
  };

  const hideCheckout = () => {
    setProgress("");
  };

  const UserProgressContextValue = {
    progress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };

  return (
    <UserProgressContext.Provider value={UserProgressContextValue}>
      {children}
    </UserProgressContext.Provider>
  );
};

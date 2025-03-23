import { createContext, useState } from "react";

const FoodOrderingContext = createContext({
  foodOrdered: [],
  addFood: () => {},
  removeFood: () => {},
});

export const FoodOrderingProvider = ({ children }) => {
  const [foodOrdered, setFoodOrdered] = useState([]);

  const addFood = (food) => {
    setFoodOrdered((prevFood) => {
      const existingItem = prevFood.find((item) => item.id === food.id);

      if (existingItem) {
        return prevFood.map((item) =>
          item.id === food.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else return [...prevFood, { ...food, quantity: 1 }];
    });
  };

  const removeFood = (food) => {
    setFoodOrdered((prevFood) => {
      return prevFood
        .map((item) =>
          item.id === food.id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0);
    });
  };

  return (
    <FoodOrderingContext.Provider value={{ foodOrdered, addFood, removeFood }}>
      {children}
    </FoodOrderingContext.Provider>
  );
};

export default FoodOrderingContext;

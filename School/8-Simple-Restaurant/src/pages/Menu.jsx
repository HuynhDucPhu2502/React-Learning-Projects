import { useContext, useState } from "react";
import { foodData } from "../data/data";
import MenuList from "../components/MenuList";
import FoodOrderingContext from "../context/FoodOrderingContext";

const Menu = () => {
  const [menuData] = useState(foodData);

  const { addFood } = useContext(FoodOrderingContext);

  const handleAddFood = (food) => {
    addFood(food);
  };

  return (
    <div className="my-12 grid grid-cols-4 w-11/12 mx-auto gap-4">
      {menuData.map((item) => {
        return <MenuList item={item} onclick={handleAddFood} key={item.id} />;
      })}
    </div>
  );
};

export default Menu;

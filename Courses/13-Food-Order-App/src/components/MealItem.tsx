import { Meal } from "../types/models";
import Button from "./UI/Button";
import { currencyFormatter } from "../util/formatting";

import CartContext from "../store/CartContext";
import { useContext } from "react";

type Props = {
  meal: Meal;
};

const MealItem: React.FC<Props> = ({ meal }) => {
  const { addItem } = useContext(CartContext);

  const addItemHandler = (meal: Meal) => addItem(meal);

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={() => addItemHandler(meal)}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
};

export default MealItem;

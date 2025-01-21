import { Meal } from "../types/models";

import MealItem from "./MealItem";
import Error from "./UI/Error";

import useHttp from "../hooks/useHttp";

const requestConfig = {};

const Meals = () => {
  const {
    data: meals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", [] as Meal[], requestConfig);

  if (isLoading) {
    return <p className="center">Fetching meals...</p>;
  }

  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }

  return (
    <>
      <ul id="meals">
        {meals.map((meal) => (
          <MealItem meal={meal} key={meal.id}></MealItem>
        ))}
      </ul>
    </>
  );
};

export default Meals;

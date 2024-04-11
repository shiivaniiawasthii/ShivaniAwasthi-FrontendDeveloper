import React, { useContext } from "react";

import FoodCard from "./FoodCard";
import { DataContext } from "../Context/Context.js";

function GridCard() {
  const { data, loading } = useContext(DataContext);

  const meals = data?.meals || [];

  if (loading) {
    return <div>Loading...</div>; // Display a loading indicator
  }
  console.log("data is final rendere");
  return (
    <>
      {meals?.map((el) => (
        <FoodCard
          key={el.idMeal}
          strMeal={el.strMeal}
          strMealThumb={el.strMealThumb}
        />
      ))}
    </>
  );
}

export default GridCard;

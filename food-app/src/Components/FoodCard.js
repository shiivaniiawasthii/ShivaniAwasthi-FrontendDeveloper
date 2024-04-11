import React from "react";

function FoodCard({ strMealThumb, strMeal }) {
  return (
    <div className=" m-auto mt-12">
      {" "}
      <img
        alt="foodimage"
        className="  w-80 h-48 rounded-2xl m-auto"
        src={strMealThumb}
      ></img>
      <div className="mt-2 ml-4 ">
        <p className="font-bold text-zinc-800 text-2xl">{strMeal}</p>
        <p className="text-zinc-400">4</p>
      </div>
    </div>
  );
}

export default FoodCard;

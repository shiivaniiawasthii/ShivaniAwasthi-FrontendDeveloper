import React from "react";

function FoodCard({ strMealThumb, strMeal, onClick }) {
  function generateRandomRating() {
    // Generate a random number between 0 and 5 (inclusive)
    return Math.ceil(Math.random() * 5);
  }

  // Example usage
  const randomRating = generateRandomRating();

  return (
    <div className=" m-auto mt-12" onClick={onClick}>
      {" "}
      <img
        alt="foodimage"
        className="  w-80 h-48 rounded-2xl m-auto"
        src={strMealThumb}
      ></img>
      <div className="mt-2 ml-4 ">
        <p className="font-bold text-zinc-800 text-2xl">{strMeal}</p>
        <p className="text-zinc-400 font-bold">
          {"Rating:" + " " + randomRating}
        </p>
      </div>
    </div>
  );
}

export default FoodCard;

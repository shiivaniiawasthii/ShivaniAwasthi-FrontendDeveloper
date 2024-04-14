// import React, { useContext } from "react";

// import FoodCard from "./FoodCard";
// import { DataContext } from "../Context/Context.js";

// function GridCard() {
//   const { data, loading } = useContext(DataContext);

//   const meals = data?.meals || [];

//   if (loading) {
//     return <div>Loading...</div>; // Display a loading indicator
//   }
//   console.log("data is final rendere");
//   return (
//     <>
//       {meals?.map((el) => (
//         <FoodCard
//           key={el.idMeal}
//           strMeal={el.strMeal}
//           strMealThumb={el.strMealThumb}
//         />
//       ))}
//     </>
//   );
// }

// export default GridCard;
import React, { useState, useContext } from "react";
import FoodCard from "./FoodCard";
import Modal from "./Modal";
import { DataContext } from "../Context/Context.js";
import Pagination from "./Pagination.js";

function GridCard() {
  const { data, loading } = useContext(DataContext);
  const [selectedMeal, setSelectedMeal] = useState(null); // State to track the selected meal
  const [isModalOpen, setIsModalOpen] = useState(false); // State to track modal visibility
  const [mealDetails, setMealDetails] = useState(null); // State to store fetched meal details
  // ppppppppppppppppppppppppppppppppppppppppppppp

  const [currentPage, setCurrentPage] = useState(1);
  const [mealsPerPage] = useState(6);
  const meals = data?.meals || [];

  // -------------------------------------pag
  const openModal = async (meal) => {
    setSelectedMeal(meal); // Set the selected meal in state
    setIsModalOpen(true); // Open the modal

    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`
      );
      const data = await response.json();
      if (data && data.meals && data.meals.length > 0) {
        setMealDetails(data.meals[0]); // Set the fetched meal details in state
      }
    } catch (error) {
      console.error("Error fetching meal details:", error);
    }
  };

  const closeModal = () => {
    setSelectedMeal(null); // Clear the selected meal
    setIsModalOpen(false); // Close the modal
    setMealDetails(null); // Clear the fetched meal details
  };

  if (loading) {
    return <div>Loading...</div>; // Display a loading indicator
  }
  const generateIngredientsParagraph = (meal) => {
    let ingredientsParagraph = "";

    // Loop through the meal's ingredients and measures
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];

      // If both ingredient and measure are present, concatenate them
      if (ingredient && measure) {
        ingredientsParagraph += `${ingredient} - ${measure}, `;
      } else if (ingredient) {
        // If only ingredient is present, concatenate it alone
        ingredientsParagraph += `${ingredient}, `;
      }
    }

    // Remove the trailing comma and space from the end
    ingredientsParagraph = ingredientsParagraph.slice(0, -2);

    return ingredientsParagraph;
  };

  // Get current meals
  const indexOfLastmeal = currentPage * mealsPerPage;
  const indexOfFirstmeal = indexOfLastmeal - mealsPerPage;
  const currentMeal = meals.slice(indexOfFirstmeal, indexOfLastmeal);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-4  md:grid-cols-2 gap-x-4 w-3/4 m-auto">
        {currentMeal?.map((el) => (
          <FoodCard
            key={el.idMeal}
            strMeal={el.strMeal}
            strMealThumb={el.strMealThumb}
            onClick={() => openModal(el)} // Pass onClick event handler to open modal with meal details
          />
        ))}
      </div>
      {/* pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(meals.length / mealsPerPage)}
        onPageChange={paginate}
        length={meals.length}
        mealsPerPage={mealsPerPage}
      />

      {/* Render modal with selected meal details */}
      {mealDetails && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          src={mealDetails.strMealThumb}
          alt={mealDetails.strMeal}
          mealName={mealDetails.strMeal}
          strInstructions={mealDetails.strInstructions}
          para={generateIngredientsParagraph(mealDetails)}
        />
      )}
    </>
  );
}

export default GridCard;

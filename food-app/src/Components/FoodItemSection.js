import React from "react";
import GridCard from "./GridCard";
import FilterSection from "./FilterSection";

function FoodItemSection() {
  return (
    <>
      <div className="lg:w-3/4 md:w-3/4 w-1/2 m-auto mt-6  ">
        <FilterSection />
      </div>

      <GridCard />
    </>
  );
}

export default FoodItemSection;

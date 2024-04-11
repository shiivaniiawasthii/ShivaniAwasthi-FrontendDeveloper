import React from "react";
import GridCard from "./GridCard";
import FilterSection from "./FilterSection";

function FoodItemSection() {
  return (
    <>
      <div className="w-3/4 m-auto mt-6 ">
        <FilterSection />
      </div>

      <div className=" grid grid-cols-1 lg:grid-cols-4  md:grid-cols-2  w-3/4 m-auto">
        <GridCard />
      </div>
    </>
  );
}

export default FoodItemSection;

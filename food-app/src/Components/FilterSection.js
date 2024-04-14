import { useState, useRef, useEffect, useContext } from "react";
import { DataContext, DataProvider } from "../Context/Context.js";
import Button from "./Button";

const FilterSection = () => {
  const [openDropDown, setOpenDropDown] = useState(false);
  const [selectedArea, setSelectedArea] = useState("Indian"); // Default value

  const dropdownRef = useRef(null);
  const { updateSelectedArea, updateSelectedSort } = useContext(DataContext);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropDown(false); // Close dropdown when clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDropdown = () => {
    setOpenDropDown(!openDropDown); // Toggle dropdown visibility
  };

  const handleApply = () => {
    updateSelectedArea(selectedArea);
    setOpenDropDown(false);
    // Close dropdown upon clicking apply button
    // Fetch data based on selected area
  };

  const handleSorting = (sort) => {
    updateSelectedSort(sort);
  };

  return (
    <>
      <DataProvider selectedArea={selectedArea} openDropDown={openDropDown}>
        <div className="text-3xl font-bold ml-10 ">
          Restaurants with online food delivery in Pune
        </div>
        <div className="flex justify-between w-5/6 ml-6 mt-6 ">
          <Button onClick={handleDropdown}>Filter</Button>
          <div
            ref={dropdownRef}
            className={`z-10 w-56 p-3  mt-3 shadow-lg bg-white  rounded-lg  absolute top-36 ${
              openDropDown ? "" : "hidden"
            }`}
          >
            <ul
              className="space-y-2 text-gray-500 p-4"
              aria-labelledby="dropdownDefault"
            >
              <li className="flex items-center  p-2">
                <input
                  type="radio"
                  name="area"
                  value="Indian"
                  checked={selectedArea === "Indian"}
                  onChange={() => setSelectedArea("Indian")}
                />
                <label className="ml-2 text-sm font-medium font-2xl text-gray-900">
                  Indian
                </label>
              </li>
              <li className="flex items-center p-2">
                <input
                  type="radio"
                  name="area"
                  value="Canadian"
                  checked={selectedArea === "Canadian"}
                  onChange={() => setSelectedArea("Canadian")}
                />
                <label className="ml-2 text-sm font-medium text-gray-900">
                  Canadian
                </label>
              </li>
            </ul>
            <button
              className="bg-orange-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4"
              onClick={handleApply}
            >
              Apply
            </button>
          </div>
          <Button onClick={() => handleSorting("Lower to Upper")}>
            Sort (Lower to Upper)
          </Button>
          <Button onClick={() => handleSorting("Upper to Lower")}>
            Sort ( Upper to Lower)
          </Button>
          <Button>Food delievery</Button>
          <Button>New on swiggy</Button>
        </div>
      </DataProvider>
    </>
  );
};

export default FilterSection;

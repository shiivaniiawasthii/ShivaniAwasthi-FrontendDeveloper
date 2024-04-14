import React, { createContext, useState, useEffect } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedArea, setSelectedArea] = useState("Indian"); // Default value
  const [selectedSort, setSelectedSort] = useState(""); // Default value

  const fetchData = async (selectedArea) => {
    setLoading(true); // Set loading state to true before fetching data
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectedArea}`
      );
      const jsonData = await response.json();
      setData(jsonData);
      console.log(jsonData, response, data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // Set loading state to false after data is fetched
    }
  };

  useEffect(() => {
    fetchData(selectedArea);
  }, [selectedArea]);

  const updateSelectedArea = (area) => {
    setSelectedArea(area);
  };
  const updateSelectedSort = (sort) => {
    setSelectedSort(sort);
  };

  useEffect(() => {
    if (selectedSort === "Lower to Upper") {
      const sortedData = [...data.meals].sort((a, b) => {
        return a.strMeal.localeCompare(b.strMeal);
      });
      setData({ ...data, meals: sortedData });
    } else if (selectedSort === "Upper to Lower") {
      const sortedData = [...data.meals].sort((a, b) => {
        return b.strMeal.localeCompare(a.strMeal);
      });
      setData({ ...data, meals: sortedData });
    }
  }, [selectedSort]);

  return (
    <DataContext.Provider
      value={{ data, loading, updateSelectedArea, updateSelectedSort }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };

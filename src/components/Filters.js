import React  from "react";
import { useDispatch } from "react-redux";
import {  CLEAR_FILTER } from "../redux/filterSlice";
import FilterByGender from "./Filters/FilterByGender";
import FiltersBySize from "./Filters/FilterBySize";
import FiltersByBrand from "./Filters/FiltersByBrand";
import data from "../utils/ProductData.json";



const Filters = () => {
 const dispatch = useDispatch()
    const handleClearFilter = () => {
      dispatch(CLEAR_FILTER(data))
    }


  return (
    <div className="w-[14vw] bg-gray-400">
      <FiltersByBrand/>
      <FiltersBySize/>
      <FilterByGender/>
      <button className="flex justify-center bg-white mt-4 p-3 ml-16 rounded-lg m-3 cursor-pointer border-none" onClick={handleClearFilter}>Clear All</button>
    </div>
  );
};

export default Filters;

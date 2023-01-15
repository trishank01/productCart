import React, { useState } from "react";
import { BiDownArrow } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { SIZE_CHECKBOX_VALUE } from "../../redux/filterSlice";

const FiltersBySize = () => {
  const [isOpen, setIsOpen] = useState(false);
 
  const dispatch = useDispatch();

  const handleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckBox = (e) => {
    const { value, checked } = e.target;
    dispatch(SIZE_CHECKBOX_VALUE({ value, checked }));
  };

  return (
    <>
      <div className="flex flex-col ">
        <div
          className="flex justify-evenly p-2 mt-2 mx-4 bg-white cursor-pointer"
          onClick={handleDropDown}
        >
          <p>Filter By Size</p>
          <BiDownArrow
            className={`${isOpen ? "duration-300" : "rotate-180 duration-300"}`}
          />
        </div>
        <div>
          {isOpen && (
            <div className="flex flex-col  gap-3 justify-start ml-4 mt-2 duration-300">
              <div className="flex">
                <input
                  type="checkbox"
                  value="S"
                  className="w-[15px] h-[15px]"
                  onClick={handleCheckBox}
                />
                <label>Small</label>
              </div>
              <div className="flex">
                <input
                  type="checkbox"
                  value="M"
                  className="w-[15px] h-[15px]"
                  onClick={handleCheckBox}
                />
                <label>Medium</label>
              </div>
              <div className="flex">
              <input
                type="checkbox"
                value="L"
                className="w-[15px] h-[15px]"
                onClick={handleCheckBox}
              />
              <label>Large</label>
              </div>
              <div className="flex">
              <input
                type="checkbox"
                value="XL"
                className="w-[15px] h-[15px]"
                onClick={handleCheckBox}
              />
              <label>Extra Large</label>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FiltersBySize;

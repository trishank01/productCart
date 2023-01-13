import React, { useEffect, useState } from "react";
import data from "../utils/ProductData.json";
import {BiDownArrow} from "react-icons/bi"

const Filters = () => {
  const [isOpen , setIsOpen] = useState(false)
  const [uniqueBrand , setUniqueBrand] = useState([])
  const [selectedValue , setSelectedValue] = useState([])

  useEffect(() => {
     const brand = data.map((item) => item.brand)
     const newSet = new Set(brand)
     setUniqueBrand([...newSet])
  },[])


  const handleDropDown = () => {
    setIsOpen(!isOpen)
  }


  const handleCheckBox = (e) => {
    const {value , checked} = e.target
    if(checked){
      setSelectedValue([...selectedValue , value])
    }else {
      const filtered = selectedValue.filter((item) => item !== value)
       setSelectedValue(filtered)
    }
  }

  return (
    <div className="w-[14vw] bg-gray-400">
      <div className="flex flex-col ">
        <div className="flex justify-evenly p-2 mt-2 mx-4 bg-white cursor-pointer" onClick={handleDropDown} > 
         <p>Brand</p>  
        <BiDownArrow className={`${isOpen ? "duration-300" : "rotate-180 duration-300"}`}/> 
        </div>
        <div> 
        {isOpen && uniqueBrand.map((item) => {
          return (
            <div key={item} className="flex gap-3 justify-start ml-4 mt-2 duration-300">
              <input type="checkbox" value={item} className="w-[15px] h-[15px]" onClick={handleCheckBox}/>
              <label>{item}</label>
            </div>
          );
        })}
        </div>
      </div>
      <div>Size</div>
    </div>
  );
};

export default Filters;

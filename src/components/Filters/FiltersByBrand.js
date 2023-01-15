import React, { useEffect, useState } from 'react'
import { BiDownArrow } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { BRAND_CHECKBOX_VALUE } from '../../redux/filterSlice';
import data from "../../utils/ProductData.json"

const FiltersByBrand = () => {
    const [isOpen , setIsOpen] = useState(false)
    const [uniqueBrand , setUniqueBrand] = useState([])
    const clearFilter = useSelector((state) => state.filter.clearFilter);
    console.log(clearFilter)
    const dispatch = useDispatch()

    useEffect(() => {
       const brand = data.map((item) => item.brand)
       const newSet = new Set(brand)
       setUniqueBrand([...newSet])
    },[])
  
  
    const handleDropDown = () => {
      setIsOpen(!isOpen)
    }

  
      const handleCheckBox = (e) => {
      let {value , checked} = e.target
      dispatch(BRAND_CHECKBOX_VALUE({value , checked}))

    }

   
  return (
    <>
          <div className="flex flex-col ">
        <div className="flex justify-evenly p-2 mt-2 mx-4 bg-white cursor-pointer" onClick={handleDropDown} > 
         <p>Filter By Brand</p>  
        <BiDownArrow className={`${isOpen ? "duration-300" : "rotate-180 duration-300"}`}/> 
        </div>
        <div> 
        {isOpen && uniqueBrand.map((item) => {
          return (
            <div key={item} className="flex gap-3 justify-start ml-4 mt-2 duration-300" >
              <input type="checkbox" value={item}  className="w-[15px] h-[15px]" onChange={handleCheckBox} />
              <label>{item}</label>
            </div>
          );
        })}
        </div>
      </div>
      </>
  )
}

export default FiltersByBrand
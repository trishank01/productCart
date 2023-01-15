import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GENDER_VALUE } from '../../redux/filterSlice'

const FilterByGender = () => {
  const Ideal = useSelector((state) => state.filter.ideal);
    const dispatch = useDispatch()

    const handleFilterByGender = (gender) => {
        dispatch(GENDER_VALUE(gender))
    }

    console.log(Ideal)
  return (
    <div className='flex flex-col items-center mt-2 gap-3'>
        <h4>GENDER</h4>
        <div className={`cursor-pointer bg-white p-3 rounded-lg ${Ideal === "men" ? "bg-gray-300" : "bg-white "}`} onClick={() => handleFilterByGender("men")}>Male</div>
        <div className={`cursor-pointer bg-white p-3 rounded-lg ${Ideal === "female" ? "bg-gray-300" : "bg-white "}`} onClick={() => handleFilterByGender("female")}>Female</div>
    </div>
  )
}

export default FilterByGender
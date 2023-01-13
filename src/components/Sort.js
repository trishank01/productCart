import React from 'react'

const Sort = ({setSortBy}) => {

  return (
    <div className='bg-gray-200 flex gap-10 my-4'>
        <button className='py-2 px-3 border-none rounded-xl'>Sort</button>
        <button className='py-2 px-3 cursor-pointer border-none rounded-xl' onClick={() => setSortBy("low")}>Price -- Low to High</button>
        <button className='py-2 px-3 cursor-pointer border-none rounded-xl'  onClick={() => setSortBy("high")}>Price -- High to Low</button>
    </div>
  )
}

export default Sort
import React, { useEffect, useState } from "react";
import data from "../utils/ProductData.json";
import Sort from "./Sort";

const ProductList = () => {
  const [sortBy, setSortBy] = useState("default")
  const [productData , setProductData] = useState(data)
  
  useEffect(() => {
   const sorted =  productData.map(item => item).sort((a , b) => {
      if(sortBy === "low") return   a.price - b.price
       if(sortBy === "high")  return  b.price - a.price
    })
    setProductData(sorted)
  },[sortBy])

  



  //console.log(productData)
  return (
    <div className="w-[86vw] flex flex-col justify-center items-center bg-gray-200 pb-5">
        <Sort setSortBy={setSortBy}/>
      <div className="grid grid-cols-3 gap-10">
        {productData.map((item) => {
          return (
            <div
              key={item._id}
              className="flex w-[280px] flex-col rounded-2xl overflow-hidden bg-white shadow-lg"
            >
              <img
                className="w-full h-[240px] m-1 object-contain"
                src={item.image}
                alt="item.title"
              />
              <div className="bg-white p-4 grid gap-2">
                <p className="text-gray-500">{item.title}</p>
                <p>
                  <b>Brand</b> : {item.brand}
                </p>
                <p>
                  <b>Price</b> : {`₹ ${item.price}`}
                </p>
                <p>
                  <b>Ideal</b> : {item.ideal.slice(0 , 1).toUpperCase() + item.ideal.slice(1)}
                </p>
                <p className="flex items-center">
                  <b> Size : </b>
                  {item.size.map((i) => (
                    <ul key={i} className={`list-none p-0 first:ml-0 mx-2`}>
                      <li className="bg-gray-200 py-2 px-2 text-[14px] rounded-xl cursor-pointer">
                        {i}
                      </li>
                    </ul>
                  ))}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;

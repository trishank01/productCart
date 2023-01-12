import React from "react";
import data from "../utils/ProductData.json";

const ProductList = () => {
  return (
    <div className="w-[86vw] flex flex-col justify-center items-center bg-gray-200">
      <div>Sort</div>
      <div className="grid grid-cols-3 gap-10 ">
        {data.map((item) => {
          return (
            <div
              key={item._id}
              className="flex w-[280px] flex-col  rounded-2xl overflow-hidden bg-white"
            >
              <img
                className="w-full h-[240px] m-1 object-contain"
                src={item.image}
                alt="item.title"
              />
              <div className="bg-white p-3">
                <p>{item.title}</p>
                <p>
                  {" "}
                  <b>Brand</b> : {item.brand}
                </p>
                <p>
                  {" "}
                  <b>Price</b> : {`₹ ${item.price}`}
                </p>
                <p>
                  {" "}
                  <b>Ideal</b> : {item.ideal}
                </p>
                <p className="flex">
                  {item.size.map((i) => (
                    <ul key={i} className={`list-none p-0 first:ml-0 mx-2`}>
                      {" "}
                      <li className="bg-gray-200 w-[35px] p-3 text-[14px] rounded-xl cursor-pointer">{i}</li>{" "}
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

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_BRAND_DATA } from "../redux/filterSlice";
import data from "../utils/ProductData.json";
import Sort from "./Sort";

const ProductList = () => {
  const [sortBy, setSortBy] = useState("default");
  const Allbrand = useSelector((state) => state.filter.brand);
  const Allsize = useSelector((state) => state.filter.size);
  const Ideal = useSelector((state) => state.filter.ideal);
  const clearFilter = useSelector((state) => state.filter.clearFilter);
  const brandData = useSelector((state) => state.filter.data);
  const dispatch = useDispatch()




  useEffect(() => {
    let sortedData = [];
    if (sortBy === "low") {
      sortedData = data
        .map((item) => item)
        .sort((a, b) => {
          return a.price - b.price;
        });
    } else {
      sortedData = data
        .map((item) => item)
        .sort((a, b) => {
          return b.price - a.price;
        });
    }
    dispatch(SET_BRAND_DATA(sortedData));
  }, [sortBy , dispatch]);


  useEffect(() => {
    const filterByCheckBoxSize = (item) => {
      for (let size of Allsize) {
        if (item.size.includes(size)) {
          return true;
        }
      }
    };
    const filteredBySize = data.filter((item) => filterByCheckBoxSize(item))
      if(Allsize.length > 0){
        dispatch(SET_BRAND_DATA(filteredBySize));
      }else{
        dispatch(SET_BRAND_DATA(data))
      }
  }, [Allsize , dispatch ]);


  useEffect(() => {
    const filterByCheckBox = (item) => {
      for (let brand of Allbrand) {
        if (item.brand.includes(brand)) {
          return true;
        }
      }
    };
      if(Allbrand.length > 0){
        const filteredByBrand = data.filter((item) => filterByCheckBox(item))
        dispatch(SET_BRAND_DATA(filteredByBrand));
      }else{
        dispatch(SET_BRAND_DATA(data))
      }
  }, [Allbrand  ,dispatch]);





  useEffect(() => {
    const filteredByGender = data.filter((item) => item.ideal.includes(Ideal));
    dispatch(SET_BRAND_DATA(filteredByGender));
  }, [Ideal , dispatch]);

  useEffect(() => {
    if (clearFilter.length > 0) {
      dispatch(SET_BRAND_DATA(clearFilter));

    }
  }, [clearFilter , dispatch]);

  return (
    <div className="w-[98vw] flex flex-col justify-center items-center bg-gray-200 pb-5">
      <Sort setSortBy={setSortBy} />
      <div className="grid grid-cols-3 gap-10">
        {brandData &&
          brandData.map((item) => {
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
                    <b>Ideal</b> :{" "}
                    {item.ideal.slice(0, 1).toUpperCase() + item.ideal.slice(1)}
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

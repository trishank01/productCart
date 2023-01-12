import React from "react";
import Filters from "../components/Filters";
import ProductList from "../components/ProductList";
import Sort from "../components/Sort";

const ProductPage = () => {
  return (
    <div className="flex h-screen">
      <Filters />
      <div>
        <Sort/>
      <ProductList />
      </div>

    </div>
  );
};

export default ProductPage;

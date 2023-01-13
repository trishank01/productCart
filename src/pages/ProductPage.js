import React from "react";
import Filters from "../components/Filters";
import ProductList from "../components/ProductList";

const ProductPage = () => {
  return (
    <div className="flex h-screen">
      <Filters />
      <div>
      <ProductList />
      </div>

    </div>
  );
};

export default ProductPage;

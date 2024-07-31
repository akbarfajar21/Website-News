import React from "react";
import { SearchBar } from "./componens_table/SearchBar";
import ProductTable from "./componens_table/ProductTable";

const FilterlableProductTable = () => {
  return (
    <div className="container">
      <SearchBar label={"List Label Handphone Gayming"} />
      <div className="product-table__container">
        <ProductTable />
      </div>
    </div>
  );
};

export default FilterlableProductTable;

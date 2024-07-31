import React from "react";
import ProductRowTable from "./ProductRowTable";
import ProductColoumnTable from "./ProductColoumnTable";

const ProductTable = () => {
  return (
    <table className="table-container">
      <ProductColoumnTable />
      <tbody>
        <ProductRowTable product={"Samsung Z Flips"} harga={"20.000.000.0"} />
      </tbody>
    </table>
  );
};

export default ProductTable;

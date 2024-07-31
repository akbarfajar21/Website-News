import React from "react";
import "./ProductReactTableRow.css";

const ProductRowTable = ({ product, harga }) => {
  return (
    <tr>
      <td style={{ textAlign: "start" }}>{product}</td>
      <td>{harga}</td>
    </tr>
  );
};

export default ProductRowTable;

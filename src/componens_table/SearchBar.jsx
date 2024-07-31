import React from "react";

export const SearchBar = ({ label }) => {
  return (
    <div className="search-bar__container">
      <input type="text" placeholder="Search..." />
      <div className="search-bar__in_stock_checkbox">
        <input type="checkbox" />
        <label>{label}</label>
      </div>
    </div>
  );
};

export default SearchBar;

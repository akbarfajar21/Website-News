import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import "./style.css";
import FilterlableProductTable from "./FilterlableProductTable.jsx";
import CardApp from "./CardApp.jsx";
import BelajarChildren from "./componens/BelajarChildren.jsx";
import News from "./latihan1/News.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* {<FilterlableProductTable />} */}
    {/* {<CardApp />} */}
    {<News/>}
  </React.StrictMode>
);

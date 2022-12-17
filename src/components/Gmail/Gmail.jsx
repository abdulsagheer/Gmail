import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import "./Gmail.css";

const Gmail = () => {
  return (
    <div>
      <Header />
      <div className="gmailBody">
        <Sidebar />
      </div>
    </div>
  );
};

export default Gmail;

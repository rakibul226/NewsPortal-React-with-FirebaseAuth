import React from "react";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="px-16">
      <Outlet></Outlet>
    </div>
  );
};

export default Root;

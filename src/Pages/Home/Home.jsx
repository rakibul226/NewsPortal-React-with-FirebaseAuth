import React from "react";
import Header from "../../Shared/Header/Header";
import Navbar from "../../Shared/Header/Navbar/Navbar";
import BreakingNews from "./BreakingNews";
import LeftSideNav from "../../Shared/Header/LeftSideNav/LeftSideNav";
import RightSideNav from "../../Shared/Header/RightSideNav/RightSideNav";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="border">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="md:col-span-2 border">
          <h2 className="text-4xl">News coming soon...</h2>
        </div>
        <div className="border">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;

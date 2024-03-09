import React from "react";
import Header from "../../Shared/Header/Header";
import Navbar from "../../Shared/Header/Navbar/Navbar";
import BreakingNews from "./BreakingNews";
import LeftSideNav from "../../Shared/Header/LeftSideNav/LeftSideNav";
import RightSideNav from "../../Shared/Header/RightSideNav/RightSideNav";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const Home = () => {
  const news = useLoaderData();

  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="md:col-span-2">
          <h2 className="text-4xl">News</h2>
          {news.map((aNews) => (
            <NewsCard key={aNews.id} news={aNews}></NewsCard>
          ))}
        </div>
        <div className="">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;

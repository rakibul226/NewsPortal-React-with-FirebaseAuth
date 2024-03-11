import { useLoaderData, useParams } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import LeftSideNav from "../../Shared/Header/LeftSideNav/LeftSideNav";
import RightSideNav from "../../Shared/Header/RightSideNav/RightSideNav";

const NewsDetails = () => {
  const { id } = useParams();
  const newses = useLoaderData();
  const news = newses.find((news) => news._id === id);

  const { title, thumbnail_url, details } = news;

  return (
    <div>
      <div>
        <Header></Header>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-3 ml-40">
            <h2 className="text-4xl mb-7 ">News Details</h2>
            <img className="w-full h-2/4 " src={thumbnail_url} alt="" />
            <p>{details}</p>
          </div>
          <div className="">
            <RightSideNav></RightSideNav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;

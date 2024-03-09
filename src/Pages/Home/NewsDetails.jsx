import { useParams } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import LeftSideNav from "../../Shared/Header/LeftSideNav/LeftSideNav";
import RightSideNav from "../../Shared/Header/RightSideNav/RightSideNav";

const NewsDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <div>
        <Header></Header>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-3">
            <h2 className="text-4xl">News Details {id}</h2>
            {/* {news.map((aNews) => (
              <NewsCard key={aNews.id} news={aNews}></NewsCard>
            ))} */}
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

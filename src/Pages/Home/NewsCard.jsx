// const NewsCard = ({ news }) => {
//   return (
//     <div>

//     </div>
//   );
// };

// export default NewsCard;

import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const {
    _id,
    title,
    author,
    thumbnail_url,
    details,
    rating,
    total_view,
    others_info,
  } = news;

  return (
    <div className="card  bg-base-100 mb-16 shadow-xl border-b-2">
      <figure>
        <img src={thumbnail_url} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {details.length > 150 ? (
          <p>
            {details.slice(0, 150)}{" "}
            <Link to={`/news/${_id}`} className="text-blue-600">
              Read more..
            </Link>
          </p>
        ) : (
          <details></details>
        )}
      </div>
    </div>
  );
};

export default NewsCard;

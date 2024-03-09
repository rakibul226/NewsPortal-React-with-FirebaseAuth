import { data } from "autoprefixer";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="sticky top-20">
      <span className="font-extrabold">All Categories</span>
      <div className="space-y-5">
        {categories.map((category) => (
          <Link
            to={`/category/${category.id}`}
            className="block ml-6 text-xl font-semibold"
            key={category.id}
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;

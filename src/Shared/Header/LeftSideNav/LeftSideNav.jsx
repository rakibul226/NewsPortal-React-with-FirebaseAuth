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
    <div className="space-y-5">
      All Categories: {categories.length}
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
  );
};

export default LeftSideNav;

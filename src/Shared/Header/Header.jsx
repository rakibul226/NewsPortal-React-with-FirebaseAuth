import moment from "moment";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-center mt-14">
      <Link to="/">
        <img className="mx-auto" src="../../../assets/logo.png" alt="" />
      </Link>
      <p className="mt-3 mb-2">Journalism Without Fear or Favour</p>
      <p className="text-xl mb-1">{moment().format("dddd, MMMM D, YYYY")}</p>
    </div>
  );
};

export default Header;

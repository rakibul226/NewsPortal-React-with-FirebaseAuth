import moment from "moment";

const Header = () => {
  return (
    <div className="text-center mt-14">
      <img className="mx-auto" src="../../../assets/logo.png" alt="" />
      <p className="mt-3 mb-2">Journalism Without Fear or Favour</p>
      <p className="text-xl mb-1">{moment().format("dddd, MMMM D, YYYY")}</p>
    </div>
  );
};

export default Header;

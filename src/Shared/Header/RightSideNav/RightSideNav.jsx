import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import qzone1 from "../../../../assets/qZone1.png";
import qzone2 from "../../../../assets/qZone2.png";
import qzone3 from "../../../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-3">
        <h2 className="text-3xl">Login with</h2>
        <button className="btn btn-outline w-full">
          <FaGoogle />
          Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub />
          Github
        </button>
      </div>
      <div className="p-4  mb-6">
        <h2 className="text-3xl">Find us on</h2>
        <a
          href=""
          className="p-4 flex text-lg items-center gap-1 border rounded-t-lg"
        >
          <FaFacebook />
          Facebook
        </a>
        <a href="" className="p-4 flex text-lg items-center gap-1 border">
          <FaTwitter />
          Twitter
        </a>
        <a
          href=""
          className="p-4 flex text-lg items-center gap-1 border rounded-b-lg"
        >
          <FaInstagram />
          Instagram
        </a>
      </div>

      <div className="p-4 space-y-3">
        <h2 className="text-3xl">Q Zone</h2>
        <img src={qzone1} alt="" />
        <img src={qzone2} alt="" />
        <img src={qzone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;

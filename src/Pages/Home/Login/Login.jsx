import { Link } from "react-router-dom";
import Navbar from "../../../Shared/Header/Navbar/Navbar";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
  };

  return (
    <>
      <Navbar></Navbar>
      <h2 className="text-3xl my-10 text-center">Please Login</h2>
      <div className="">
        <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary text-white">Login</button>
          </div>
        </form>
        <Link to="/registration">
          <p className="md:w-3/4 lg:w-1/2 mx-auto pt-1 underline">
            Don't have an account.?
            <span className="text-blue-500">Register now</span>
          </p>
        </Link>
      </div>
    </>
  );
};

export default Login;

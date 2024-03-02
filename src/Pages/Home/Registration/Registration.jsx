import { useContext } from "react";
import Navbar from "../../../Shared/Header/Navbar/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { Result } from "postcss";

const Registration = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    //create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        console.log("Registration successful");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Navbar></Navbar>
      <h2 className="text-3xl my-10 text-center">Please Register</h2>
      <div className="">
        <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
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
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="URL"
              className="input input-bordered"
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
            <button className="btn btn-primary text-white">Register</button>
          </div>
        </form>
        <Link to="/login">
          <p className="md:w-3/4 lg:w-1/2 mx-auto pt-1 underline">
            Already have an account.?
            <span className="text-blue-500"> Login</span>
          </p>
        </Link>
      </div>
    </>
  );
};

export default Registration;

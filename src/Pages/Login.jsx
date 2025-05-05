import React from "react";
import { Link } from "react-router";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { FcGoogle } from "react-icons/fc";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.init";
const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log({ email, password });

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="bg-gray-700 min-h-[calc(100vh-64px)] pt-30">
        <div className="card bg-base-200 max-w-sm mx-auto  shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleLogin} className="fieldset">
              <label className="label font-bold text-xl">Email</label>
              <input
                type="email"
                className="input w-full"
                name="email"
                placeholder="Email"
                required
              />
              <label className="label font-bold text-xl">Password</label>
              <input
                type="password"
                className="input w-full"
                placeholder="Password"
                name="password"
                required
              />
              <label className="label font-bold text-xl">
                Login with Google
              </label>
              <button
                type="submit"
                className="btn border-black hover:bg-amber-300"
              >
                <FcGoogle size={20} />
                Google Login
              </button>

              <div>
                <p className="">Forgot password?</p>
              </div>
              <p className="font-medium text-[14px] text-center">
                "Please{" "}
                <Link to="/register">
                  <span className="text-red-500">register</span>
                </Link>{" "}
                your account to get started."
              </p>
              <button type="submit" className="btn btn-neutral mt-4">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Login;

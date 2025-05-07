import React, { use, useRef } from "react";
import { Link, Navigate, useNavigate } from "react-router";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Provider/AuthProvider";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase.init";
import { Helmet } from "react-helmet";

const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const { login, googleSignIn } = use(AuthContext);
  const handleGoogleLogIn = () => {
    googleSignIn()
      .then((result) => {
        navigate("/");
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log({ email, password });

    login(email, password)
      .then((result) => {
        navigate("/");

        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleForgot = () => {
    console.log(emailRef.current.value);
    const email = emailRef.current.value;

    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("a password reset email send to your email")
      })
      .catch((error) => {
        console.log(error)
      });
  };

  return (
    <>
      <Navbar></Navbar>
      <Helmet>
                <meta charSet="utf-8" />
                <title>login - AppStore</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <div className="bg-gray-700 min-h-[calc(100vh-64px)] pt-30">
        <div className="card bg-base-200 max-w-sm mx-auto  shadow-2xl">
          <h1 className="text-center pt-3 font-bold text-2xl">
            Please,Login here!
          </h1>
          <div className="card-body">
            <form onSubmit={handleLogin} className="fieldset">
              <label className="label font-bold text-xl">Email</label>
              <input
                ref={emailRef}
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
                onClick={handleGoogleLogIn}
                type="submit"
                className="btn border-black hover:bg-amber-300"
              >
                <FcGoogle size={20} />
                Google Login
              </button>

              <div>
                <p onClick={handleForgot} className="font-bold cursor-pointer">
                  Forgot password?
                </p>
              </div>
              <p className="font-medium text-[14px] text-center">
                "Please
                <Link to="/register">
                  <span className="text-red-500"> register </span>
                </Link>
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

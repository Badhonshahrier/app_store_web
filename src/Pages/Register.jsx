import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link } from "react-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.init";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    console.log({ name, email, photo, password });

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="min-h-screen bg-amber-200">
        <Navbar></Navbar>
        <div className="card bg-base-100 mx-auto  max-w-sm mt-30 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegister} className="fieldset">
              <label className="label text-xl font-bold">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Your Name"
              />
              <label className="label text-xl font-bold">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="label text-xl font-bold">Photo URL</label>
              <input
                type="url"
                className="input"
                name="photo"
                placeholder="Your photo URL"
              />
              <label className="label text-xl font-bold">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <p className="font-bold text-center pt-4">
                Already have an account?{" "}
                <Link to="/login">
                  <span className="text-red-500">Login</span>
                </Link>{" "}
                here.
              </p>

              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Register;

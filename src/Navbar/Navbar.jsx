import React, { use } from "react";
import NavbarLogo from "../assets/farhat-altaf-2X1CbJ8kVL0-unsplash.jpg";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Logged out!",
          text: "You have been logged out successfully.",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#3085d6",
        });
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Error!",
          text: "Something went wrong during logout.",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <div className="bg-base-200">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className=" lg:hidden">
            <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-10">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 underline text-lg font-bold"
                    : "text-lg font-bold"
                }
              >
                Apps
              </NavLink>
            </li>

            <li>
              <NavLink
                to={user ? "/profile" : "/login"}
                className={({ isActive }) =>
                  isActive && user
                    ? "text-blue-500 underline text-lg font-bold"
                    : "text-lg font-bold"
                }
              >
                My Profile
              </NavLink>
            </li>

            <li>
              <NavLink
                to={user ? "/contactUs" : "/login"}
                className={({ isActive }) =>
                  isActive && user
                    ? "text-blue-500 underline text-lg font-bold"
                    : "text-lg font-bold"
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
          </div>
          <img
            src={NavbarLogo}
            className="w-12 h-12 object-cover rounded-4xl"
            alt=""
          />
          <p className="ml-2 text-xl font-bold text-green-500">AppStore</p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-10">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 underline text-lg font-bold"
                    : "text-lg font-bold"
                }
              >
                Apps
              </NavLink>
            </li>

            <li>
              <NavLink
                to={user ? "/profile" : "/login"}
                className={({ isActive }) =>
                  isActive && user
                    ? "text-blue-500 underline text-lg font-bold"
                    : "text-lg font-bold"
                }
              >
                My Profile
              </NavLink>
            </li>

            <li>
              <NavLink
                to={user ? "/contactUs" : "/login"}
                className={({ isActive }) =>
                  isActive && user
                    ? "text-blue-500 underline text-lg font-bold"
                    : "text-lg font-bold"
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <div className="flex items-center space-x-3">
              <div
                className="tooltip tooltip-bottom"
                data-tip={user.displayName ? user.displayName : user.email}
              >
                <img
                  src={user ? user.photoURL : ""}
                  alt="profile"
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>
              <button
                onClick={handleLogout}
                className="btn p-0 px-7 rounded-2xl text-xl font-bold bg-amber-400 hover:bg-green-500"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn p-0 px-7 rounded-2xl text-xl font-bold bg-amber-400 hover:bg-green-500">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

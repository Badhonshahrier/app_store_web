import React, { use } from "react";
import NavbarLogo from "../assets/farhat-altaf-2X1CbJ8kVL0-unsplash.jpg";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user } = use(AuthContext);
  return (
   <div className="bg-base-200">
     <div className="navbar  w-11/12 mx-auto shadow-sm ">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className=" lg:hidden">
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
          <NavLink
            to=""
            className={({ isActive }) =>
              isActive ? "text-green-500 font-bold" : "text-lg font-medium"
            }
          >
            <li>Apps</li>
          </NavLink>
          <NavLink
            to=""
            className={({ isActive }) =>
              isActive ? "text-green-500 font-bold" : "text-lg font-medium"
            }
          >
            <li>My Profile</li>
          </NavLink>
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
                src={user? user.photoURL: ""}
                alt="profile"
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>
            <button className="btn p-0 px-7 rounded-2xl text-xl font-bold bg-amber-400 hover:bg-green-500">
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

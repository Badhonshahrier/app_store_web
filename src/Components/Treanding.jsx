import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { GoStarFill } from "react-icons/go";
import { FaCloudDownloadAlt, FaArrowCircleRight } from "react-icons/fa";

const Trending = ({ data }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const trendingApps = data
    .filter((app) => app.isTrending === true)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  const handleClick = (id) => {
    if (!user) {
      navigate("/login");
    } else {
      navigate(`/app-details/${id}`);
    }
  };

  return (
    <div className="p-6 w-11/12 mx-auto">
      <h2 className="text-4xl bg-base-300 p-6 rounded-3xl text-center font-bold mb-4 text-red-600">
        Trending Apps
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {trendingApps.map((app) => (
          <div
            key={app.id}
            onClick={() => handleClick(app.id)}
            className="cursor-pointer card bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 p-4 shadow rounded-2xl transition-transform hover:scale-105"
          >
            <img
              src={app.thumbnail || "https://via.placeholder.com/150"}
              alt={app.name}
              className="h-32 w-full object-cover rounded mb-2"
            />
            <h3 className="text-xl font-semibold flex items-center gap-1 text-white">
              <FaArrowCircleRight color="black" /> {app.name}
            </h3>
            <p className="text-white flex items-center">
              <GoStarFill size={20} color="gold" /> {app.rating}
            </p>
            <p className="text-white flex items-center gap-1">
              <FaCloudDownloadAlt color="red" size={20} />{" "}
              {Number(app.downloads).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;


import React, { use } from "react";
import { GoStarFill } from "react-icons/go";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Productivity = ({ data }) => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  const productivityApps = data.filter(
    (app) => app.category === "Productivity"
  );
  const handleClick = (id) => {
    if (!user) {
      navigate("/login");
    } else {
      navigate(`/app-details/${id}`);
    }
  };

  return (
    <div className="p-6 w-11/12 mx-auto">
      <h2 className="text-4xl bg-base-300 p-6 rounded-3xl text-center font-bold mb-4 text-blue-600">
        Productivity Apps
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {productivityApps.map((app) => (
          <Link to={`/app-details/${app.id}`}>
            <div
              onClick={handleClick(app.id)}
              key={app.id}
              className="card bg-gradient-to-r from-purple-400 via-pink-500 to-red-500
            p-4 shadow rounded-2xl transition-transform hover:scale-105 cursor-pointer"
            >
              <img
                src={app.thumbnail}
                alt={app.name}
                className="h-40 w-full object-cover rounded mb-2"
              />
              <h3 className="text-xl flex items-center gap-2 font-semibold">
                <FaArrowCircleRight />
                {app.name}
              </h3>
              <p>
                <div className="flex items-center gap-1">
              
                 <GoStarFill size={20} color="gold" />
                  {app.rating}
                </div>
              </p>
              <div className="">
                <p className="flex items-center gap-1">
                  <FaCloudDownloadAlt color="red" size={20} />
                  {app.downloads}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Productivity;

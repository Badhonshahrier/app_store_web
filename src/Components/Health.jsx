import React, { use } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { FaStar } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";

const Health = ({ data }) => {
  const { user } = use(AuthContext);
  const navigate=useNavigate()
  const healthApps = data.filter((app) => app.category === "Healthcare");
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
        Health Apps
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {healthApps.map((app) => (
         
            <div
            onClick={()=>{handleClick(app.id)}}
              key={app.id}
              className="card bg-gradient-to-r from-teal-300 via-teal-500 to-green-500
p-4 shadow rounded-2xl transition-transform hover:scale-105 cursor-pointer"
            >
              <img
                src={app.thumbnail}
                alt={app.name}
                className="h-40 w-full object-cover rounded mb-2"
              />
              <h3 className="text-xl flex items-center gap-1 font-semibold">
                <FaArrowCircleRight />
                {app.name}
              </h3>
              <p className="flex items-center gap-1">
                <FaStar color="gold" size={20} /> {app.rating}
              </p>
              <p className="flex items-center gap-1">
                <FaCloudDownloadAlt size={20} color="red" /> {app.downloads}
              </p>
            </div>
        
        ))}
      </div>
    </div>
  );
};

export default Health;

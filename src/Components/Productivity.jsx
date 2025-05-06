import React from "react";
import { FaRegStar } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";

const Productivity = ({ data }) => {
  const productivityApps = data.filter(
    (app) => app.category === "Productivity"
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">
        Productivity Apps
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {productivityApps.map((app) => (
          <div key={app.id} className="card bg-white p-4 shadow rounded">
            <img
              src={app.thumbnail}
              alt={app.name}
              className="h-32 w-full object-cover rounded mb-2"
            />
            <h3 className="text-xl font-semibold">{app.name}</h3>
            <p><div className="flex items-center">
            <FaRegStar color="gold" /><FaRegStar color="gold" /><FaRegStar color="gold" />{app.rating}
                </div> </p>
           <div className="flex items-center">
           <p><FaCloudDownloadAlt />{app.downloads}</p>
           </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productivity;

import React from "react";
import { Link } from "react-router";

const Treanding = ({ data }) => {
  const trendingApps = data
    .filter((app) => app.isTrending === true)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  return (
    <div className="p-6 w-11/12 mx-auto">
      <h2 className="text-4xl bg-base-300 p-6 rounded-3xl text-center font-bold mb-4 text-red-600">
        Trending Apps
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {trendingApps.map((app) => (
          <Link to={`/app-details/${app.id}`}>
            <div
              key={app.id}
              className="cursor-pointer card bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 p-4 shadow rounded-2xl transition-transform hover:scale-105"
            >
              <img
                src={app.thumbnail}
                alt={app.name}
                className="h-32 w-full object-cover rounded mb-2"
              />
              <h3 className="text-xl font-semibold text-white">{app.name}</h3>
              <p className="text-white">⭐ {app.rating}</p>
              <p className="text-white">📥 {app.downloads.toLocaleString()}</p>
            </div>
          </Link>
        ))}
        
      </div>
    </div>
  );
};

export default Treanding;

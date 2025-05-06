import React from "react";

const Treanding = ({ data }) => {
  const trendingApps = data
    .filter((app) => app.isTrending === true)
    .sort((a, b) => a.rating - b.rating);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-red-600">🔥 Trending Apps</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {trendingApps.map((app) => (
          <div key={app.id} className="card bg-white p-4 shadow rounded">
            <img
              src={app.thumbnail}
              alt={app.name}
              className="h-32 w-full object-cover rounded mb-2"
            />
            <h3 className="text-xl font-semibold">{app.name}</h3>
            <p>⭐ {app.rating}</p>
            <p>📥 {app.downloads}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Treanding;

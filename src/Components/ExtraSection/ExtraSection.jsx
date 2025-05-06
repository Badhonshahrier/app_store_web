import React from "react";

const ExtraSection = ({ apps }) => {


  const leftApps = apps.slice(0, 6);
  const rightApps = apps.slice(6,14);

  return (
    <div className="min-h-screen w-full bg-gray-50 py-10">
      <h1 className="text-center font-bold text-3xl text-pink-600 mb-10">
        Get Install Our Trending Apps Now
      </h1>

      <div className="flex flex-col lg:flex-row items-center  justify-center gap-10 px-4">
        <div className="space-y-8 ">
          {leftApps.map((app, index) => (
            <div
              key={index}
              className="flex justify-around items-center gap-4 bg-white p-4 rounded-xl shadow-md"
            >
             
              <h2 className="text-lg font-semibold text-gray-700">
                {app.name}
              </h2>
              <img
                src={app.thumbnail}
                alt={app.name}
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="mockup-phone border-primary">
          <div className="mockup-phone-camera"></div>
          <div className="mockup-phone-display">
            <img
              alt="wallpaper"
              src="https://img.daisyui.com/images/stock/453966.webp"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="space-y-8">
          {rightApps.map((app, index) => (
            <div
              key={index}
              className="flex justify-around items-center gap-4 bg-white p-4 rounded-xl shadow-md"
            >
              <img
                src={app.thumbnail}
                alt={app.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <h2 className="text-lg font-semibold text-gray-700">
                {app.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;

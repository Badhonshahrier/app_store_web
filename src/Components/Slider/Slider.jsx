import React, { useEffect, useState } from "react";

const Slider = () => {
  const images = [
    "https://i.ibb.co.com/QvVCcFr3/programing-hero.png",
    "https://i.ibb.co.com/0R5Xr4vR/1-9-Wz-J1r-Rpuc-LURg-U-QLWs-Aw.jpg",
    "https://i.ibb.co.com/nNLgmZp6/MB-Khan-Academy-001-Cover-2000x1126.jpg",
    "https://i.ibb.co.com/jkr4xjHB/todoist-new-logo-red.webp",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-11/12 mx-auto h-[500px] mt-10 overflow-hidden rounded-2xl shadow-lg">
      <img
        src={images[current]}
        alt={`Slide ${current + 1}`}
        className="w-full h-full object-cover transition duration-700 ease-in-out"
      />

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;

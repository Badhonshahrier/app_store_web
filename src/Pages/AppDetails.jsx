import React, { useContext, useState } from "react";
import { useParams, useLoaderData } from "react-router";
import ReviewSection from "../Components/ReviewSection";
import { AuthContext } from "../Provider/AuthProvider";
import { FaStar } from "react-icons/fa6";
import { Helmet } from "react-helmet";

const AppDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const data = useLoaderData();
  const app = data.find((item) => item.id === id);
  const [isInstalled, setIsInstalled] = useState(false);

  const {
    name,
    developer,
    thumbnail,
    banner,
    downloads,
    category,
    rating,
    description,
    features,
    reviews,
  } = app;

  const handleInstallToggle = () => {
    setIsInstalled(!isInstalled);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 flex flex-col space-y-6">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{name} - AppStore</title>
      </Helmet>

      <h1 className="text-3xl font-bold text-center">{name}</h1>
      <img src={banner} className="w-full object-cover rounded-xl shadow-lg" />

      <div className="flex items-center space-x-4 mt-4">
        <img src={thumbnail} className="w-40 h-24 object-cover rounded-xl" />
        <div>
          <p className="text-xl font-semibold">
            <span className="text-teal-500">Developer</span>: {developer}
          </p>
          <p>
            <span className="text-teal-500">Downloads</span>: {downloads}
          </p>
          <p>
            <span className="text-teal-500">Category</span>: {category}
          </p>
          <p className="flex items-center gap-1">
            <span className="text-teal-500">Rating</span>:{" "}
            <FaStar color="gold" size={20} /> {rating}
          </p>
        </div>
      </div>

      {user && (
        <button
          onClick={handleInstallToggle}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          {isInstalled ? "Uninstall" : "Install"}
        </button>
      )}

      <div>
        <h2 className="text-2xl font-bold mt-6 mb-2">Description</h2>
        <p className="text-gray-700">{description}</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mt-6 mb-2">Features</h2>
        <ul className="list-disc list-inside text-gray-700">
          {features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </div>

      <ReviewSection initialReviews={reviews} isInstalled={isInstalled} />
    </div>
  );
};

export default AppDetails;

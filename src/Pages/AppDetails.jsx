import React, { use } from "react";
import { useParams, useLoaderData } from "react-router";
import ReviewSection from "../Components/ReviewSection";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet";

const AppDetails = () => {
  const {user}=use(AuthContext)
  const { id } = useParams();
  const data = useLoaderData();
const app = data.find((item) => item.id === id);

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

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
        <Helmet>
                <meta charSet="utf-8" />
                <title>AppDetails - AppStore</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <h1 className="text-3xl font-bold text-center">{name}</h1>

      <img src={banner} className="w-full object-cover rounded-xl shadow-lg" />

      <div className="flex items-center space-x-4 mt-4">
        <img src={thumbnail} className="w-24 h-24 object-cover rounded-xl" />
        <div>
          <p className="text-lg font-semibold">Developer: {developer}</p>
          <p>Downloads: {downloads}</p>
          <p>Category: {category}</p>
          <p>Rating: ⭐ {rating}</p>
        </div>
      </div>

     {
      user? <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
      Install
    </button>: <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
      Uninstall
    </button>
     }

      <div>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Description</h2>
        <p className="text-gray-700">{description}</p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Features</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>{features[0]}</li>
          <li>{features[1]}</li>
          <li>{features[2]}</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mt-6 mb-2">User Reviews</h2>
        <div className="space-y-4">
          {reviews && reviews.length > 0 ? (
            reviews.map(() => (<ReviewSection></ReviewSection>
            ))
          ) : (
            <p className="text-gray-500">No reviews yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppDetails;





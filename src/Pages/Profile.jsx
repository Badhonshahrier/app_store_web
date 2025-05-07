import React, { use } from "react";
import Navbar from "../Navbar/Navbar";
import { AuthContext } from "../Provider/AuthProvider";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet";

const Profile = () => {
  const { user } = use(AuthContext);

  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Profile - AppStore</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <Navbar />
      <div className="min-h-screen bg-amber-50 flex flex-col items-center justify-center py-10">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
          <img
            src={user?.photoURL}
            alt="User Profile"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold text-teal-600">
           Name : {user?.displayName}
          </h2>
          <p className= "text-lg my-2 text-gray-600 mb-2">
            Email: {user?.email}
          </p>
          <p className="text-gray-500">
            UID:{user?.uid}
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;


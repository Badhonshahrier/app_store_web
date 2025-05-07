import React from "react";
import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-amber-50 flex flex-col items-center justify-center px-4">
      <img
        className="w-full max-w-md mb-6"
        src="https://i.ibb.co.com/VYB4V79V/3828537.jpg"
        alt="Page Not Found"
      />
      <h1 className="text-4xl font-bold text-red-500 mb-2">404 - Page Not Found</h1>
      <button
        onClick={() => navigate("/")}
        className="btn bg-teal-500 text-white hover:bg-teal-600 px-6 py-2 rounded-xl shadow"
      >
        Go to Home
      </button>
    </div>
  );
};

export default NotFound;


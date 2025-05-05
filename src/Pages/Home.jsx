import React from "react";
import { useLoaderData } from "react-router";
import CategoryApps from "../Components/CategoryApps";

const Home = () => {
  const data = useLoaderData();

  return (
    <div className="min-h-screen bg-amber-300">
      {data.map((singleData) => (
        <CategoryApps singleData={singleData}></CategoryApps>
      ))}
    </div>
  );
};

export default Home;

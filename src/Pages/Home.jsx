import React from "react";
import { useLoaderData } from "react-router";
import Slider from "../Components/Slider/Slider";
import Productivity from "../Components/Productivity";
import Health from "../Components/health";
import Education from "../Components/Education";
import Treanding from "../Components/Treanding";
import ExtraSection from "../Components/ExtraSection/ExtraSection";
import { Helmet } from "react-helmet";

const Home = () => {
  const data = useLoaderData();


  return (
    <>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Home - AppStore</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <Slider></Slider>
      <Treanding data={data}></Treanding>
      <Productivity data={data}></Productivity>
      <Health data={data}></Health>
      <Education data={data}></Education>
      <ExtraSection apps={data}></ExtraSection>
    </>
  );
};

export default Home;

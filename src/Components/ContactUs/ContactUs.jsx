import React from "react";
import { useLoaderData } from "react-router";

const ContactUs = () => {
 const data=useLoaderData()
 console.log(data);

  return (
    <div
      className="hero min-h-screen w-11/12 mx-auto my-20 "
      style={{
        backgroundImage: "url(https://i.ibb.co.com/1J8j1c31/5124556.jpg)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

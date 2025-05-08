import React from "react";
import { useLoaderData } from "react-router";

const ContactUs = () => {
  const data = useLoaderData();
  const { title, subtitle, message, email, phone, support_hours, category } =
    data;

  return (
    <div
      className="hero min-h-screen w-11/12 mx-auto my-20"
      style={{
        backgroundImage: "url(https://i.ibb.co.com/1J8j1c31/5124556.jpg)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{data.title}</h1>
          <p className="mb-5">{data.subtitle}</p>
          <p className="mb-5">{data.message}</p>
          <p className="mb-5">
            <strong>Email: </strong>
            <a href={`mailto:${data.email}`} className="text-blue-400">
              {data.email}
            </a>
          </p>
          <p className="mb-5">
            <strong>Phone: </strong>
            <a href={`tel:${phone}`} className="text-blue-400">
              {phone}
            </a>
          </p>
          <p className="mb-5">
            <strong>Support Hours: </strong>
            {support_hours}
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

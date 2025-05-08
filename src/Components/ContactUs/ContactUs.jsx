import React from "react";
import { useLoaderData } from "react-router"

const ContactUs = () => {
  const data = useLoaderData();

  return (
    <div className="w-11/12 mx-auto my-10">
      <h2 className="text-4xl font-bold text-center mb-10 text-purple-600">
        Contact Us
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((contact, index) => (
          <div
            key={index}
            className="card bg-gradient-to-r from-purple-300 via-lime-200 to-pink-300
 shadow-lg p-6 rounded-2xl transition-transform hover:scale-105"
          >
            <div
              className=""
              
            >
              <img className=" w-full object-cover bg-center rounded-lg mb-4" src={contact.image} alt="" />
            </div>
            <h3 className="text-2xl font-bold text-blue-600 mb-2">{contact.title}</h3>
            <p className="mb-2 text-lg font-bold  text-gray-700">{contact.subtitle}</p>
            <p className="mb-4">{contact.message}</p>
            <p className="mb-1">
              <strong>Email: </strong>
              <a className="text-blue-500 underline">
                {contact.email}
              </a>
            </p>
            <p className="mb-4">
              <strong>Phone: </strong>
              {contact.phone}
            </p>
            <button className="btn btn-primary text-white w-full">Support Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactUs;

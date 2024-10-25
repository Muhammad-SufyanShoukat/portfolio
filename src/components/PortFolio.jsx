import React from "react";
import java from "../../public/java.png";
import python from "../../public/python.webp";
import mongoDB from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";
import blogImage from "../../public/Blogimage.jpg"; // Placeholder for Blog Posting Platform image
import ecommerceImage from "../../public/ecommerce.png"; // Placeholder for E-commerce image

function PortFolio() {
  const cardItem = [
    { id: 1, logo: mongoDB, name: "MongoDB" },
    { id: 2, logo: express, name: "Express" },
    { id: 3, logo: reactjs, name: "ReactJS" },
    { id: 4, logo: nodejs, name: "NodeJS" },
    { id: 5, logo: python, name: "Python" },
    { id: 6, logo: java, name: "Java" },
  ];

  const projects = [
    {
      id: 1,
      logo: blogImage,
      name: "Blog Posting Platform (MERN)",
      description:
        "Implemented JWT-based authentication, enabling secure user registration and session management. Users can perform CRUD operations on blog posts using a user-friendly interface.",
      features:
        "Utilized React.js with Tailwind CSS for a responsive frontend, designed RESTful APIs for server-side logic, and configured MongoDB for efficient data storage.",
    },
    {
      id: 2,
      logo: ecommerceImage,
      name: "Multi-Vendor E-commerce Website (MERN)",
      description:
        "Supports multiple vendors to list products, manage inventories, and handle orders. Ensured a responsive interface with RESTful APIs and scalable MongoDB.",
      features:
        "Implemented vendor registration, product management, and Stripe payment gateway for order processing.",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold">Featured Technologies</span>
        {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt={name}
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="px-6 py-4 space-x-3 justify-around">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                  Video
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                  Source code
                </button>
              </div>
            </div>
          ))}
        </div> */}

        <span className="underline font-semibold">Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
  {projects.map(({ id, logo, name, description, features }) => (
    <div
      className="border-[2px] rounded-lg shadow-lg p-3 cursor-pointer hover:scale-105 duration-300" // Decreased padding and scale
      key={id}
    >
      <img
        src={logo}
        className="w-auto h-auto size-auto object-cover rounded-lg mb-2" // Decreased height
        alt={name}
      />
      <h2 className="font-bold text-lg mb-1">{name}</h2> {/* Decreased font size */}
      <p className="text-gray-700 mb-1 text-sm">{description}</p> {/* Decreased font size */}
      <p className="text-gray-600 text-sm">{features}</p> {/* Decreased font size */}
    </div>
  ))}
</div>

      </div>
    </div>
  );
}

export default PortFolio;

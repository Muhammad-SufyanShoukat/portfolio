import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import javascript from "../../public/javascript.png";
import reactjs from "../../public/reactjs.png";

import bootstrap  from "../../public/bootstrap.png"

import Tailwind  from "../../public/TailwindCSS.png"

import Express  from "../../public/express.png"

import MongoDb from "../../public/mongodb.jpg"

import nodejs from "../../public/node-js.svg"

import nextjs from "../../public/nextjs.png"





function Experiance() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "Html",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
   
    {
      id: 3,
      logo: javascript,
      name: "Javascript",
    },
    {
      id: 4,
      logo: reactjs,
      name: "Reactjs",
    },
    {
      id : 5,
      logo : bootstrap ,
      name : "Bootstrap"
    },
    {
      id : 6,
      logo : Tailwind ,
      name : "Tailwind"
    },
    {
      id :  7,
      logo : Express ,
      name : "Express"
    },
    {
      id : 8,
      logo : MongoDb ,
      name : "MongoDB"
    },
    {
      id : 9,
      logo : nodejs ,
      name : "Nodejs"
    },
    {
       id : 10,
      logo : nextjs ,
      name : "Nextjs"
    }
    
    
    
  ];
  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experiance</h1>
        <p className="  ">
          I've more than 1 year of experiance in below technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;

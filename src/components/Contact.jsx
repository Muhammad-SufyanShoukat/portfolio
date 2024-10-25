import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  
  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
      >
    
    <div className="flex justify-center">
      <a 
        href="https://api.whatsapp.com/send?phone=+923079480215&text=Hello%20from%20My%20Portfolio"
        target="_blank" 
        rel="noopener noreferrer"
      >
        <button className="bg-green-500 text-white font-bold py-4 px-8 rounded hover:bg-green-600 transition duration-300">
          Hire Me
        </button>
      </a>
    </div>


      </div>
    </>
  );
}

export default Contact;

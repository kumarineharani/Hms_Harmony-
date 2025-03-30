import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row bg-blue-500 rounded-2xl px-6 md:px-10 lg:px-20 py-10">
      {/* Left Side */}
      <div className="md:w-1/2 flex flex-col justify-center gap-6 text-white">
        <p className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
          Book Appointment <br /> With Trusted Doctors
        </p>
        <div className="flex items-center gap-3">
          <img
            className="w-24 rounded-full"
            src={assets.group_profiles}
            alt="Group Profiles"
          />
          <p className="text-white text-lg font-light">
            Simply browse through our extensive list of trusted doctors, <br />
            schedule your appointment hassle-free.
          </p>
        </div>

        
        <a
          href="#speciality"
          className="flex items-center bg-white text-blue-500 font-bold text-lg mt-3 px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 hover:text-white transition duration-300"
        >
          Book appointment
          <img className="ml-2" src={assets.arrow_icon} alt="Arrow Icon" />
        </a>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 flex justify-center">
        <img
          className="w-full max-w-sm md:max-w-md rounded-lg"
          src={assets.header_img}
          alt="Header Image"
        />
      </div>
    </div>
  );
};

export default Header;

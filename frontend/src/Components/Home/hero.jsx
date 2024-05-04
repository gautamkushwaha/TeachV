import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className=" h-[672px]"
    style={{
        backgroundImage: `url("public/hero.png")`, // Specify the path to your image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      <div className="container  my-[-100px] mx-auto flex flex-col  md:flex-row items-center">
        {/* Column 1 */}
        <div className=" mt-[192px]  ml-[207px] ">
          <h1 className="  text-white text-[62px] font-semibold leading-tight mb-4 mx-auto md:mx-[0px]  w-[100%] h-[180]">
          Building vision,
          <br></br>
Shaping the future
          </h1>
          <p className="text-white text-[24px] w-[80%] md:w-[85%] mx-auto md:mx-[0px] mb-4 ">
            Start learning with Edpark courses
          </p>
          <button className="bg-orange-500 text-white rounded-full px-4 py-2">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

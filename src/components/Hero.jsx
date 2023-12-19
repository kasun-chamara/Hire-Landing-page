import React from "react";
import hero from "../assets/images/hero.png";
const Hero = () => {
 
  return (
    <section
      id="home"
      className="flex flex-col items-center min-h-screen py-10 md:flex-row"
    >
      <div className="flex items-center justify-center flex-1 h-full">
        <img src={hero} alt="" className="object-contain h-100 w-100 md:w-11/12  rounded-2xl" />
      </div>
      <div className="flex-1">
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold leading-10 text-white md:text-5xl md:leading-normal">
            <span className="text-5xl text-cyan-400 md:text-6xl"><br></br>
           Empowering Dreams
              <br />
            </span>
             <span>Building Realities.</span>
          </h1>
<h6 className="text-sm text-gray-600 md:text-2 md:leading-normal">
 Welcome to a realm where aspirations come alive. <br></br>We believe in empowering dreams, <br></br>meticulously crafting the bridge that transforms<br></br> your visions into tangible realities. 
</h6>

          <button className="mt-8 btn-primary">READ MORE</button>
          <div className="flex items-center justify-center gap-5 mt-8 text-3xl md:justify-start">
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

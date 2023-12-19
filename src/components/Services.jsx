import React from "react";
import image1 from "../assets/icons/image1.png";
import image2 from "../assets/icons/image2.png";
import image3 from "../assets/icons/image3.png";
import image4 from "../assets/icons/image4.png";
import image5 from "../assets/icons/image5.png";
import image6 from "../assets/icons/image6.png";

const Services = () => {
  const Service = [
    {
      image: image1,
      level: "Mobile App Development",
      description: "We specialize in creating innovative and user-friendly mobile applications tailored to your business needs.",
    },
    {
      image: image2,
      level: "Software Product Engineering",
      description: "Our software product engineering services cover the entire product development lifecycle, from ideation to deployment.",
    },
    {
      image: image3,
      level: "Digital Marketing Services",
      description: "Boost your online presence with our digital marketing services, including SEO, social media management, and more.",
    },
    {
      image: image4,
      level: "eCommerce Website",
      description: "Create a seamless online shopping experience with our eCommerce website development expertise.",
    },
    {
      image: image5,
      level: "Managed Infrastructure",
      description: "Ensure the stability and efficiency of your IT infrastructure with our managed infrastructure services.",
    },
    {
      image: image6,
      level: "Digital Marketing SEO",
      description: "Explore our range of digital marketing products designed to enhance your online marketing strategies.",
    },
  ];

  return (
    <section id="service" className="relative px-4 py-10 bg-gray-800">
      <div className="mt-8 text-gray-100">
        <h3 className="text-4xl font-semibold text-center">
          Our <span className="text-cyan-400">Services</span>
        </h3>
        <p className="mt-3 text-lg text-center text-gray-400">Explore our expertise</p>
        <div className="flex flex-wrap items-stretch justify-center gap-16 mt-6 sm:mt-12">
          {Service?.map((Service, i) => (
            <div
              key={i}
              className="relative w-full p-4 bg-gray-900 border-2 border-gray-900 border-b-cyan-500 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 rounded-xl py-11"
            >
              <div className="flex flex-col items-center justify-start mb-2">
                <img src={Service.image} alt={Service.level} className="object-cover w-12 h-12 mb-2 rounded-full" />
                <p className="mb-2 text-xl font-bold">{Service.level}</p>
                <p className="text-sm text-gray-500">{Service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

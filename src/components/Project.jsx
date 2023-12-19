import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.png";
import project3 from "../assets/images/project-3.png";
import project4 from "../assets/images/project-4.png";
import project5 from "../assets/images/project-5.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: <center>Synaptic symphony
</center>,
      
    },
    {
      img: project2,
      name: <center>Technological flora
</center>,
     
    },
    {
      img: project3,
      name: <center>Human-machine integration
</center>,
   
    },
    {
      img: project4,
      name: <center>Medical imaging
</center>,
      
    },
    {
      img: project5,
      name: <center>AI learning</center>,
      
    },
  ];

  return (
    <section id="projects" className="py-10 text-white text-xs antialiased">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          OUR <span className="text-cyan-400">Projects</span>
        </h3>
        <p className="mt-3 text-lg text-gray-400">OUR awesome works</p>
      </div>
      <br />
      <div className="relative max-w-6xl mx-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4, 
            },
          }}
          loop={true}
          autoplay={{
            delay: 3000,
          }}
          modules={[Pagination, Autoplay]}
        >
          {projects.map((project_info, i) => (
            <SwiperSlide key={i}>
             <div className="w-full p-4  h-fit bg-slate-800 rounded-xl">

                <img src={project_info.img} alt="" className="rounded-lg" />
                <h3 className="my-4 text-xl">{project_info.name}</h3>
                <div className="flex gap-3">
                  
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Project;

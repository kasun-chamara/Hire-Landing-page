import React from "react";
const About = () => {
  const info = [
    { text: "Years in Operation", count: "06" },
    { text: "Successful Projects", count: "310" },
    { text: "Loyal Clients", count: "100" },
    { text: "Industries Serving", count: "20" },
    { text: "Branches Worldwide", count: "06" },
    
  ];
  return (
    <section id="about" className="py-10 text-white">
      <div className="mt-8 text-center">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-400">US</span>
        </h3>
        <br></br><br></br>

        <div className="flex flex-col-reverse items-center max-w-6xl gap-12 px-10 mx-auto md:flex-row md:gap-6">
          <div className="p-2">
            <div className="my-3 text-gray-300">
              <p className="relative w-11/12 px-6 mx-auto leading-7 text-justify ">
            We at company-name strive to provide you by developing and implementing innovative solutions which empower your business and make you stand out from your competition. 
            We deliver innovative and scalable solutions to our clients with the latest technology allowing them to grow exponentially with their business pace.
              </p>
              <div className="flex items-center px-2 mt-10 gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="text-2xl font-semibold text-white md:text-4xl scroll -px-11">
                      {content.count}
                      <span className="text-cyan-400">+</span>{" "}
                    </h3>
                    <span className="text-xs md:text-base">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              
            </div>
          </div>
          <div className="flex items-center justify-center flex-1 mt-6 md:mt-0">
            <div className="relative w-11/12 h-full max-w-sm lg:w-96 sm:w-10/12 ">
              <img
                src="https://www.pngplay.com/wp-content/uploads/7/Global-Networking-Transparent-PNG.png"
                alt=""
                className="object-cover w-full pb-1 "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

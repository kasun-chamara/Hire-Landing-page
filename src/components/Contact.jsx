import React from "react";

const Contact = () => {
  const contact_info = [
   
  ];
  return (
    <section id="contact" className="py-6 px-3 text-white">
      <div className="text-center mt-4">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">US</span>
        </h3>
        <p className="text-gray-400 mt-3  text-md ">Get in touch</p>

        <div
          className="mt-8 flex flex-col lg:flex-row 
         gap-4 max-w-3xl bg-gray-800 lg:p-10 p-2 rounded-xl mx-auto"
        >
          <form className="flex flex-col flex-1 gap-3 ">
            <input type="text" placeholder="Your Name" className="p-3 text-sm " />
            <input type="email" placeholder="Your Email Address" className="p-3 text-sm " />
            <textarea placeholder="Your Message" rows={4} className="p-3 text-sm "></textarea>
            <button className="btn-primary w-fit p-1">Send </button> 
          </form>
          <div className="flex flex-col gap-4 lg:w-1/3 items-center"> 
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-2 flex-wrap items-center"
              >
                <div className="min-w-[2rem] text-xl min-h-[2rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="text-sm break-words">
                  {contact.text}
                </p>
              </div>
            ))}
            <div className="hidden lg:flex flex-col gap-4">
    <br></br>
              <img
                src="https://zfunds.in/static/contactUs.svg"
                alt="Your Alt Text"
                className="rounded-lg max-w-[250px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

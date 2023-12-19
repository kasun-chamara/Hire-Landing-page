import React from "react";

const Contact = () => {
  const contact_info = [
   
  ];
  return (
    <section id="contact" className="px-3 py-6 text-white">
      <div className="mt-4 text-center">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">US</span>
        </h3>
        <p className="mt-3 text-gray-400 text-md ">Get in touch</p>

        <div
          className="flex flex-col max-w-3xl gap-4 p-2 mx-auto mt-8 bg-gray-800 lg:flex-row lg:p-10 rounded-xl"
        >
          <form className="flex flex-col flex-1 gap-3 ">
            <input type="text" placeholder="Your Name" className="p-3 text-sm " />
            <input type="email" placeholder="Your Email Address" className="p-3 text-sm " />
            <textarea placeholder="Your Message" rows={4} className="p-3 text-sm "></textarea>
            <button className="p-1 btn-primary w-fit">Send </button> 
          </form>
          <div className="flex flex-col items-center gap-4 lg:w-1/3"> 
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row flex-wrap items-center gap-2 text-left"
              >
                <div className="min-w-[2rem] text-xl min-h-[2rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="text-sm break-words">
                  {contact.text}
                </p>
              </div>
            ))}
            <div className="flex-col hidden gap-4 lg:flex">
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

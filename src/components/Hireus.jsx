import React, { useState, useEffect } from "react";


const UserReview = ({ name, comment, rating, imageUrl }) => (
  <div className="mb-6 flex items-center">
    <img src={imageUrl} alt={`User ${name}`} className="w-10 h-10 rounded-full mr-4" />
    <div>
      <h3 className="text-xl font-semibold">{name}</h3>
      <div className="flex items-center mt-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`text-yellow-500 ${star <= rating ? 'fill-current' : 'stroke-current'} text-lg mr-1`}
          >
            ★
          </span>
        ))}
      </div>
      <p className="text-gray-400 text-sm mt-1">{comment}</p>
    </div>
  </div>
);

const Hireus = () => {
  const reviews = [
    { name: "J.Roy", comment: "Great work! I highly recommend.", rating: 4.7, imageUrl: "https://web.certicamara.com/app/webroot/files/uploads/cweb/certicamara/img/quote_user.jpg" },
    { name: "UsHman .J", comment: "Excellent communication and skills.", rating: 4.5, imageUrl: "https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png" },
    { name: "Leasa", comment: "Very professional and efficient.", rating: 4.3, imageUrl: "https://www.lovepanky.com/wp-content/uploads/2015/09/Body-Language-of-a-Girl.jpg" },
    { name: "keit", comment: "Easy to work with, delivered on time.", rating: 4.8, imageUrl: "https://img.freepik.com/premium-photo/girl-pink-jacket-is-texting-her-phone-smiling_973047-22293.jpg" },
    { name: "Kasun .C", comment: "Outstanding service and quality.", rating: 3.9, imageUrl: "https://media.licdn.com/dms/image/C5603AQEAOsV3AMfntQ/profile-displayphoto-shrink_400_400/0/1659196597850?e=2147483647&v=beta&t=1fGjLtYUSG_qSFMYgStvPFAAINNx693koXGMOoZwFp8" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000); 

    return () => clearInterval(intervalId); 
  }, [currentIndex, reviews.length]);

  const currentReview = reviews[currentIndex];

  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center ">
        <h3 className="text-4xl font-semibold mt-7">
          Hire <span className="text-cyan-400 py-0">US</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg py-0">Unlock the full potential of your project with US.</p>
      </div>
      <div className=" bg-gradient-to-b from-gray-800 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-14 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div>
          <h2 className="text-2xl font-semibold">
            Why Hire Us?
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6 py-2">
       We stand out as your premier choice for project hiring due to our unwavering commitment to excellence. Our specialized team of experts brings a wealth of industry-specific knowledge,
          ensuring the successful execution of every project. <br></br>Backed by a proven track record of delivering exceptional results, we pride ourselves on innovative problem-solving and 
         creative solutions that propel our clients ahead of the curve. 
          </p>
          <button className="btn-primary mt-10">Read More</button>
        </div>
        <div className="lg:w-1/2 ">
          <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Client Reviews</h2>
          <div>
            <UserReview {...currentReview} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hireus;


import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="hero min-h-screen text-slate-800 bg-gray-50">
      <div className="hero-content flex-col lg:flex-row">
        {/* Image Section */}
        <div className="lg:w-1/2 relative">
          <Image
            width={1000}
            height={1000}
            alt="Team working on car servicing"
            src="/assets/images/about_us/person.jpg"
            className="w-3/4 rounded-lg shadow-2xl"
          />
          <Image
            width={1000}
            height={1000}
            alt="Car parts"
            src="/assets/images/about_us/parts.jpg"
            className="w-1/2 absolute right-5 top-1/2 transform -translate-y-1/2 rounded-lg border-8 border-white shadow-2xl"
          />
        </div>
        
        {/* Text Section */}
        <div className="lg:w-1/2 space-y-5 p-4">
          <h3 className="text-3xl text-orange-500 font-bold">About Us</h3>
          <h1 className="text-5xl font-bold">Your Trusted Car Service Experts</h1>
          <p className="py-4">
            We are a team of qualified professionals with extensive experience in the automotive service industry. Our goal is to provide exceptional car care that ensures safety and reliability on the road.
          </p>
          <p className="py-4">
            With a passion for cars and a commitment to excellence, we offer a range of services tailored to meet your vehicle's needs. From routine maintenance to complex repairs, we ensure quality service every time.
          </p>
          <button className="btn btn-primary">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;

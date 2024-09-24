
import React from "react";

const Banner = () => {
  return (
    <div className="container mx-auto text-white">
      <div className="carousel w-full mt-12">
        {banners.map((banner, index) => (
          <div
            style={{
              backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url(/assets/images/banner/${index + 1}.jpg)`,
            }}
            key={index}
            id={`slide${index + 1}`}
            className="carousel-item relative w-full bg-top bg-no-repeat h-[90vh] rounded-xl"
          >
            <div className="h-full w-full flex items-center pl-36">
              <div className="space-y-6">
                <h1 className="text-5xl font-bold">{banner.title}</h1>
                <p>{banner.description}</p>
                <button className="btn btn-primary mr-4">Discover More</button>
                <button className="btn btn-outline text-white">Latest Project</button>
              </div>
            </div>
            <div className="absolute flex justify-between transform bottom-12 right-12">
              <a href={banner.prev} className="btn btn-circle mr-6">
                ❮
              </a>
              <a href={banner.next} className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const banners = [
  {
    title: "Affordable Price For Car Servicing",
    description: "Experience top-notch car servicing without breaking the bank, ensuring your vehicle runs smoothly and efficiently!",
    next: "#slide2",
    prev: "#slide4",
  },
  {
    title: "Quality Assurance in Every Service",
    description: "Our certified technicians guarantee quality with every service to keep your vehicle in peak condition.",
    next: "#slide3",
    prev: "#slide1",
  },
  {
    title: "Convenient & Fast Car Repairs",
    description: "Get back on the road quickly with our efficient repair services tailored to your needs.",
    next: "#slide4",
    prev: "#slide2",
  },
  {
    title: "Expert Care for Your Vehicle",
    description: "Trust our experts to handle all your car servicing needs with care and professionalism.",
    next: "#slide1",
    prev: "#slide3",
  },
];

export default Banner;


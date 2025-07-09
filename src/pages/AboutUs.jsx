import React from 'react';

const AboutUs = () => {
  return (
    <>
      <div className="w-full bg-green-950 text-white">
        <div className="flex flex-row items-center justify-center gap-10">
          <h1 className="text-2xl flex flex-col justify-center font-bold font-serif mb-4 p-20">
            ABOUT US
            <p className="text-lg w-xl text-justify font-normal text-gray-300">
              <br />
              "At Plant Peek, we aim to reconnect people with nature.
              Our journey began with the simple idea of making plant knowledge easy and inspiring for everyone."
            </p>
          </h1>
          <img
            src="https://images.unsplash.com/photo-1602522431179-f6552611447e"
            alt="Plant in Hand"
            className="rounded-s-full shadow-lg h-80 w-xl"
          />
        </div>
      </div>

      <div className="bg-white py-20 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1619765872256-b69c508ad4a8"
            alt="Our Journey"
            className="w-md h-1/2 shadow-md"
          />
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Story Of Our Journey
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            We began with a dream of encouraging people to live in harmony with nature.
            Whether you live in the city or countryside, housing beautiful green partners can bring calm and joy to your everyday routine.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Our goal is to inspire love for nature’s beauty. We bring you a wide collection of indoor and outdoor plants,
            each carefully curated to suit your needs.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;

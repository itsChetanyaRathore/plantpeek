import React from 'react';

const AboutUs = () => {
  return (
    <>
      <div style={{ backgroundColor: "#ecfae5" }} className="relative w-full  overflow-hidden">
        {/* Top Left Image */}
        <img
          src="./src/assets/sideleaf.png"
          alt="side"
          className="absolute top-0 left-0 w-28 md:w-50 z-0 "
        />

        {/* Bottom Right Image */}
        <img
          src="./src/assets/sideleaf2.png"
          alt="sideleaf"
          className="absolute bottom-0 right-0 w-48 md:w-64 z-0 "
        />

        {/* Text Content */}
        <div className="relative z-10 flex flex-row items-center justify-center gap-10 py-16 px-4">
          <h1 className="text-3xl flex flex-col justify-center text-green-800 items-center font-bold font-serif mb-4">
            ABOUT US
            <p className="text-lg max-w-xl text-center text-black font-normal mt-4">
              "At Plant Peek, we aim to reconnect people with nature.
              Our journey began with the simple idea of making plant knowledge easy and inspiring for everyone."
            </p>
          </h1>
        </div>
      </div>

      <div className="bg-white py-20 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1692364043097-694650027191?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D" // 📌 Replace with your own image path in public folder
            alt="Plant in Hand"
            className="w-md h-2/5 shadow-md"
          />
        </div>
        <div>
          <h2 className="text-3xl font-semibold font-serif text-green-800 mb-4">
            Story Of Our Journey
          </h2>
          <p className="text-gray-900 mb-4 leading-relaxed">
            Plant Peek began as a simple passion project rooted in our love for nature and curiosity about the plant world. While living in our hostel rooms during college, surrounded by textbooks and a few green companions, we noticed how little people actually knew about the plants they cared for.
          </p>
          <p className="text-gray-900 mb-6 leading-relaxed">
            That small observation sparked a big idea—to create a digital plant encyclopedia that makes plant knowledge simple, beautiful, and accessible to all. What started as a semester project has now grown into a platform designed to bring people closer to nature, one plant at a time.
          </p>
        </div>
      </div>

      <div className="w-full bg-green-950 text-white flex flex-row justify-between px-20 ">
        <h1 className="text-2xl flex items-center font-bold font-serif w-5xl gap-20  mt-5 ">🌿Our Green Mission
          <p className="text-lg w-2xl text-justify font-normal text-gray-300 mb-10"><br />
            At Plant Peek, we do more than share plant facts—we promote a greener, more mindful lifestyle.
            By simplifying plant care, we inspire home gardening and eco-friendly living.
            In the future, we hope to launch green initiatives like tree planting and urban gardening.
            Join us in growing a greener world—one plant at a time.
          </p>
        </h1>
      </div>
    </>
  );
};

export default AboutUs;

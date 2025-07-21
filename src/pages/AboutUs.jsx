import React from 'react';

const AboutUs = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full bg-[#f2faf1]  overflow-hidden">
        <img
          src="./src/assets/sideleaf.png"
          alt="side"
          className="absolute top-0 left-0 w-28 md:w-50 z-0 "
        />
        <img
          src="./src/assets/sideleaf2.png"
          alt="sideleaf"
          className="absolute bottom-0 right-0 w-48 md:w-64 z-0 "
        />
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

      {/* Our Story Section */}
      <div className="bg-white py-20 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBsYW50JTIwY2FyZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Plant in Hand"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-semibold font-serif text-green-800 mb-6">
            Our Green Journey
          </h2>
          <p className="text-gray-900 mb-6 leading-relaxed">
            At Plant Peek, we believe that every leaf tells a story, and every plant holds a purpose in the balance of life.
            Our vision is to make the world of plants more accessible, understandable, and inspiring for everyone—from curious beginners taking care of their first succulent, to seasoned plant parents growing their indoor jungles. In a fast-paced digital world, we aim to slow things down and bring people back to nature, one plant at a time.
            We envision a future where homes, schools, and communities thrive with greenery—where people reconnect with the environment and embrace a more mindful, sustainable lifestyle.

          </p>
          <p className="text-gray-900 mb-6 leading-relaxed">
           Because to care for a plant is to care for life itself.
           A quiet act of love that brings peace, patience, and purpose into our lives.
           And that’s a journey worth sharing—with you, with nature, and with the world.
           </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="w-full bg-green-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold font-serif mb-6 flex items-center gap-3">
                <span>🌿</span> Our Green Mission
              </h2>
              <p className="text-gray-100 mb-6 leading-relaxed">
                At Plant Peek, we do more than share plant facts—we're cultivating a movement. Our mission is to transform urban spaces into green sanctuaries and help people develop meaningful relationships with their plant companions.
              </p>
              <p className="text-gray-100 mb-6 leading-relaxed">
                We're committed to sustainable practices in everything we do, from our carbon-neutral servers to our partnerships with eco-conscious nurseries.
              </p>
            </div>
            <div className="md:w-1/2 rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGxhbnQlMjBjb21tdW5pdHl8ZW58MHx8MHx8fDA%3D"
                alt="Community gardening"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>


      {/* Values Section */}
      <div className="bg-green-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-serif text-green-800 mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Accessibility",
                icon: "🌱",
                description: "We break down complex plant science into simple, actionable advice for everyone."
              },
              {
                title: "Sustainability",
                icon: "♻️",
                description: "Every recommendation considers environmental impact and long-term ecosystem health."
              },
              {
                title: "Community",
                icon: "👥",
                description: "We grow together by sharing knowledge and supporting fellow plant enthusiasts."
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-green-800 mb-2">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </>
  );
};

export default AboutUs;
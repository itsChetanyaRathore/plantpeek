import React, { useState } from "react";

const CareTips = () => {
    const [activeButton, setActiveButton] = useState("sunlight");

    const handleClick = (key) => {
        setActiveButton(key);
    };

    const content = {
        soil: {
            title: "Soil",
            text: `The right soil mix supports healthy roots and ensures proper drainage and aeration. Different plants need different types 
      of soil. For example, succulents prefer sandy, fast-draining soil, while ferns and calatheas do better in a moisture-retaining mix 
      with peat moss. Make sure your pots have drainage holes to prevent water from pooling at the bottom. It's also important to repot 
      plants every 1–2 years or when they outgrow their container. This refreshes the soil nutrients and gives roots more space to expand. 
      Avoid using garden soil indoors, as it may carry pests or diseases and lacks proper drainage.`,
            image: "https://images.unsplash.com/photo-1598433608836-3d34424f50c4?auto=format&fit=crop&w=800&q=60",
        },
        water: {
            title: "Water",
            text: `Watering your plants correctly is crucial to prevent root rot or dehydration. A good rule of thumb is to water when 
      the top inch of soil feels dry to the touch. Use a finger to test the moisture level — if it’s still damp, wait a bit longer. 
      Overwatering is a common mistake and can drown roots, especially in pots without drainage holes. Always let excess water escape 
      and avoid letting plants sit in standing water. Water requirements also vary: tropical plants may need more frequent watering, 
      while cacti need far less. It's better to underwater slightly than to overwater.`,
            image: "https://images.unsplash.com/photo-1615484477663-905400be1c16?auto=format&fit=crop&w=800&q=60",
        },
        sunlight: {
            title: "Sunlight",
            text: `Sunlight is essential for photosynthesis — the process plants use to convert light into energy. 
      Most indoor plants thrive with 4–6 hours of indirect sunlight daily. However, the type of light (direct, indirect, low-light) 
      matters depending on the plant species. For example, succulents love direct sunlight, while ferns prefer filtered light. 
      It’s a good idea to rotate your plants every few days so all sides receive equal exposure, preventing them from leaning or 
      growing unevenly. If natural light is limited, consider using grow lights to supplement. Avoid placing plants too close 
      to windows where harsh afternoon sun might scorch their leaves.`,
            image: "https://images.unsplash.com/photo-1618221106346-6d23f36dbd38?auto=format&fit=crop&w=800&q=60",
        },
        temperature: {
            title: "Temperature",
            text: `Most houseplants are happiest in temperatures between 18°C to 24°C (65°F to 75°F). Sudden changes, such as cold drafts, 
      heaters, or air conditioners, can stress plants and stunt their growth. Keep plants away from window sills during winter and 
      avoid placing them near heat vents or radiators. Tropical plants in particular dislike temperature drops below 15°C (59°F). 
      If your plant's leaves start to curl, brown, or drop, it could be reacting to temperature stress. Always check the plant’s 
      ideal temperature range and try to mimic its native climate for the best results.`,
            image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800&q=60",
        },
        fertilizer: {
            title: "Fertilizer",
            text: `Fertilizer acts as a vitamin boost for your plants, providing essential nutrients like nitrogen (for leaves), phosphorus 
      (for roots), and potassium (for overall health). During the growing season (spring and summer), feed your plants every 2–4 weeks 
      with a balanced liquid fertilizer. Always dilute it to half-strength for indoor plants to avoid chemical burns. In fall and winter, 
      reduce or stop fertilizing as most plants go into dormancy. Over-fertilizing can do more harm than good, leading to salt build-up 
      in the soil and leaf burn. Organic fertilizers like compost tea or worm castings are gentler and eco-friendly options.`,
            image: "https://images.unsplash.com/photo-1524592172751-ced4272e85ba?auto=format&fit=crop&w=800&q=60",
        },
    };

    return (
        <div className="flex flex-col items-center justify-center mt-10 py-10 px-6 md:px-40 gap-20  text-gray-800">
            {/* Button Group */}
            <div className="flex flex-row items-center justify-center  gap-5 flex-wrap">
                {Object.keys(content).map((key) => (
                    <button
                        key={key}
                        className={`btn rounded-full px-6 py-3 text-lg transition ${activeButton === key
                            ? "bg-green-200 text-green-900 border-green-600 border-2"
                            : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
                            }`}
                        onClick={() => handleClick(key)}
                    >
                        {content[key].title}
                    </button>
                ))}
            </div>

            {/* Active Content Section */}
            <div className="w-full flex flex-col md:flex-row items-center gap-10">
                <div className="md:w-1/2">
                    <img
                        src={content[activeButton].image}
                        alt={content[activeButton].title}
                        className="rounded-xl shadow-lg h-80 w-full object-cover"
                    />
                </div>
                <div className="md:w-1/2 text-left space-y-4">
                    <h2 className="text-3xl font-bold font-serif">{content[activeButton].title}</h2>
                    <p className="text-lg whitespace-pre-line text-justify">{content[activeButton].text}</p>
                </div>

            </div>
        </div>
    );
};

export default CareTips;

import React, { useState } from 'react';

const faqData = [
    {
        question: "What is Plant Peek and how does it help me?",
        answer: "Plant Peek is your go-to encyclopedia for all things plants! Whether you're a beginner or a seasoned gardener, we provide verified care tips, plant profiles, indoor/outdoor suggestions, and much more to help your plants thrive.",
    },
    {
        question: "How do I find the best plant for my space?",
        answer: "You can explore plants by categories such as indoor, outdoor, flowering, air-purifying, low-maintenance, and more. Use our smart filters to match plants with your lighting, space, and care preferences.",
    },
    {
        question: "How can I tell if my plant is healthy or needs attention?",
        answer: "We include detailed plant guides that describe common signs of overwatering, underwatering, pests, or nutrient deficiency. Our encyclopedia helps you identify symptoms and suggests solutions easily.",
    },
    {
        question: "What kind of lighting is best for indoor plants?",
        answer: "Most indoor plants prefer indirect sunlight. However, we label each plant with its specific light needs — whether it prefers low, medium, or bright indirect light — so you can choose accordingly.",
    },
    {
        question: "Can I grow plants if I have no gardening experience?",
        answer: "Absolutely! Plant Peek is built for beginners too. We highlight easy-care plants, include step-by-step watering and repotting instructions, and offer beginner-friendly plant picks.",
    },
    {
        question: "Do you also provide plant care tips or just information?",
        answer: "Yes! Besides detailed plant data, we offer ongoing plant care tips, seasonal reminders, watering schedules, and DIY tricks to make plant care fun and simple.",
    },
];

const FAQPage = () => {
    const [openIndex, setOpenIndex] = useState(0); // First one open by default

    const toggle = (index) => {
        setOpenIndex(index);
    };

    return (
        <>
            <div className="relative min-h-screen bg-[#f9f9fc] px-4 md:px-10 py-16 overflow-hidden">
                <img
                    src="./src/assets/image1.png"
                    alt="Left Leaf"
                    className="absolute top-40 -left-8 w-36 md:w-48 z-0 pointer-events-none"
                />
                {/* <img
                    src="./src/assets/image4.png"
                    alt="Right Leaf"
                    className="absolute top-3/4 -right-15 w-40 md:w-52  z-0 pointer-events-none"
                /> */}
                <img
                    src="./src/assets/image2.png"
                    alt="Floating Leaf"
                    className="absolute -top-15 right-30 w-50 h-40 md:w-36 z-0 pointer-events-none"
                />
                <img
                    src="./src/assets/image3.png"
                    alt="Floating Leaf"
                    className="absolute bottom-10 -left-20 size-60 w-full md:w-40 z-0 pointer-events-none"
                />
                <img
                    src="./src/assets/image5.png"
                    alt="Decorative Leaf"
                    className="absolute top-2/5 -right-20 w-60 h-60  z-0 pointer-events-none"
                />

                <div className="text-center mb-12 relative z-10">
                    <h1 className="text-2xl text-green-800 font-semibold font-serif">
                        Frequently Asked Questions
                    </h1>
                </div>

                {/* FAQ List */}
                <div className="max-w-3xl mx-auto flex flex-col gap-6 relative z-10 mb-40">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-md overflow-hidden transition-all"
                        >
                            <button
                                onClick={() => toggle(index)}
                                className="w-full text-left px-6 py-5 hover:bg-gray-50 transition"
                            >
                                <span className="text-md md:text-lg font-semibold text-gray-800">
                                    {item.question}
                                </span>
                            </button>

                            <div
                                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 py-4' : 'max-h-0'
                                    }`}
                            >
                                <p className="text-sm md:text-base text-gray-600">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </>
    );
};

export default FAQPage;

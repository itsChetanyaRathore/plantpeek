import React from 'react';

const WateringCard = () => (
    <div className="relative w-80 h-40">
        {/* Background card */}
        <div className="absolute inset-0 bg-[#064E1A] text-white p-6 rounded-xl z-10">
            <h2 className="text-lg font-semibold mb-2">
                How Often Should You Water Your Plants?
            </h2>
            <p className="text-sm text-green-300 leading-relaxed">
                Understand the signs, seasons, and rhythms of proper watering.....
            </p>
        </div>

        {/* Curve cut-out at bottom-right */}
        <svg
            className="absolute bottom-0 right-0 z-20"
            width="60"
            height="60"
            viewBox="0 0 60 60"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M0 60 C30 60 60 30 60 0 V60 H0 Z"
                fill="white"
            />
        </svg>
    </div>
);

export default WateringCard;
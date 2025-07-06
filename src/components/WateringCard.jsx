import React from 'react';

const WateringCard = () => (
    <div className="relative bg-green-900 text-white p-6 rounded-[2rem] w-72 h-56 overflow-hidden flex flex-col justify-center shadow-lg">
        {/* Top-left icon */}
        <div className="absolute top-4 left-4 w-5 h-5 flex items-center justify-center bg-green-800 rounded-full">
            <svg width="12" height="12" viewBox="0 0 20 20" fill="none">
                <path d="M10 4v8m0 0l3-3m-3 3l-3-3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
        <h3 className="mt-4 text-lg font-semibold">
            How Often Should You Water Your Plants?
        </h3>
        <p className="mt-2 text-sm text-green-100">
            Understand the signs,<br />
            seasons, and rhythms of<br />
            proper watering…..
        </p>
        {/* Custom bottom-right cutout */}
        <div className="absolute bottom-0 right-0 w-14 h-14 bg-white rounded-br-[2.5rem] rounded-tl-full" style={{ clipPath: 'circle(70% at 10% 70%)' }} />
    </div>
);

export default WateringCard;
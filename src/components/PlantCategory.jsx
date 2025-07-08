import React from 'react';

const categories = [
    { label: 'Indoor Plant', image: './src/assets/indoorP.png' },
    { label: 'Outdoor Plant', image: './src/assets/outdoorP.png' },
    { label: 'Shrub', image: './src/assets/shrub.png' },
    { label: 'Flower', image: './src/assets/flowers.png' },
];

const CategorySection = () => {
    return (
        <div className="py-16 text-center mt-10">
            {/* Title */}
            <h2 className="text-green-800 text-4xl font-bold font-serif uppercase ">
                Category
            </h2>
            <div className="w-20 h-1 bg-green-700 mx-auto my-3 rounded-full"></div>

            {/* Category Icons */}
            <div className="flex justify-center flex-wrap gap-25 mt-12">
                {categories.map((cat, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                        <div className="w-48 h-48 bg-gray-100 rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                            <img
                                src={cat.image}
                                alt={cat.label}
                                className="w-50 h-50 object-contain"
                            />
                        </div>
                        <p className="mt-4 text-base md:text-lg font-semibold text-green-800">
                            {cat.label}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategorySection;

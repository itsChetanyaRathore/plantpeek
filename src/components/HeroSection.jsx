import React from 'react';

const HeroSection = () => {
    const images = [
        "https://images.unsplash.com/photo-1731486744843-c7ecce11a707?w=600",
        "https://images.unsplash.com/photo-1563419837758-e48ef1b731dd?w=600",
        "https://plus.unsplash.com/premium_photo-1681807326535-621ae5ef9da3?w=600",
        "https://images.unsplash.com/photo-1701270631258-ca1a2edbd9c5?w=600",
        "https://images.unsplash.com/photo-1696508340429-91b5dd10dc88?w=600",
        "https://images.unsplash.com/photo-1747641567564-e318a88cf1b0?w=600",
        "https://images.unsplash.com/photo-1694425357369-3c10ec0e1a90?w=600",
        "https://images.unsplash.com/photo-1721305368879-5364922355b0?w=600",
        "https://images.unsplash.com/photo-1723473362344-202a7b85b060?w=600"
    ];

    return (
        <div className="w-full h-screen mb-0 mt-4">
            <div className="grid grid-cols-5 gap-6 h-3/4 p-5">

                {/* Text Section - Slightly Narrower */}
                <div className="col-span-2 flex items-center justify-center px-10 rounded-xl ">
                    <div className="space-y-4">
                        <p className="text-4xl font-semibold font-serif">
                            🌿Welcome to PlantPeek
                            <br />
                            <span className="font-normal text-2xl">
                                — your green guide to the plant world.
                            </span>
                        </p>
                        <p className="text-md font-normal text-justify">
                            Discover the natural beauty, benefits, and stories behind every leaf.
                            From the lush jungles to your cozy living room, PlantPeek brings detailed knowledge and care guides for all kinds of plants — indoor, outdoor, rare, common, flowering, and more.
                        </p>
                    </div>
                </div>

                {/* Image Grid Section - Slightly Wider */}
                <div className="col-span-3 relative overflow-hidden rounded-xl flex items-center">

                    {/* Fade Overlays */}
                    <div className="absolute top-0 left-0 w-full h-15 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-full h-15 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

                    {/* Masonry Grid */}
                    <div className="columns-2 md:columns-3 gap-2 space-y-2 px-2">
                        {images.map((src, index) => (
                            <img
                                key={index}
                                src={src}
                                alt={`Plant ${index + 1}`}
                                className="w-full rounded-xl object-cover break-inside-avoid shadow"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HeroSection;

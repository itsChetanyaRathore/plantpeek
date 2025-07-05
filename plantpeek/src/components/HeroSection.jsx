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
        <div className=" w-full h-screen">
            <div className="max-w-full md:flex-row h-3/4 grid grid-cols-3 p-5">
                {/* Left Text */}
                <div class=" max-w-lg flex items-center  justify-center col-span-1 px-10  bg-green-300 ">
                    <div classname="grid grid-rows-2 ">
                        <p className="text-3xl font-semibold font-serif row-span-2">
                            🌿Welcome to PlantPeek
                            <br />
                            <span className="font-normal text-2xl ">
                                — your green guide to the plant world.
                            </span>
                        </p>
                        <p className="text-sm font-normal text-justify row-span-1">
                            Discover the natural beauty, benefits, and stories behind every leaf.
                            From the lush jungles to your cozy living room, PlantPeek brings detailed knowledge and care guides for all kinds of plants — indoor, outdoor, rare, common, flowering, and more.
                        </p>
                    </div>
                </div>
                <div className="flex items-center col-span-2 overflow-hidden w-2xl rounded-xl bg-amber-400">

                    <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-base-100 to-transparent z-10 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-base-100 to-transparent z-10 pointer-events-none" />

                    <div className="columns-2 md:columns-3 gap-2 space-y-2">
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
        </div >
    );
};

export default HeroSection;
